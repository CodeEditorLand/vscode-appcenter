import { VSTSProvider } from "../../../api/vsts/vstsProvider";
import Auth from "../../../auth/auth";
import type { VstsLoginInfo, VstsProfile } from "../../../helpers/interfaces";
import { AuthProvider } from "../../resources/constants";
import { LogStrings } from "../../resources/logStrings";
import { Messages } from "../../resources/messages";
import { Strings } from "../../resources/strings";
import { VsCodeUI } from "../../ui/vscodeUI";
import { Command } from "../command";

export default class LoginToVsts extends Command {
	public async runNoClient(): Promise<boolean | void> {
		if (!(await super.runNoClient())) {
			return false;
		}

		const loginInfo: VstsLoginInfo = {
			tenantName: "",
			userName: "",
			token: "",
		};
		let value;

		value = await VsCodeUI.showInput(Strings.SpecifyTenantTitleHint);
		if (!value) {
			return true;
		}
		loginInfo.tenantName = value;

		value = await VsCodeUI.showInput(Strings.SpecifyUserNameTitleHint);
		if (!value) {
			return true;
		}
		loginInfo.userName = value;

		value = await VsCodeUI.showInput(Strings.SpecifyPATTitleHint);
		if (!value) {
			return true;
		}
		loginInfo.token = value;

		return await this.login(loginInfo);
	}

	private async login(loginInfo: VstsLoginInfo): Promise<boolean> {
		try {
			const profile: VstsProfile = await this.vstsAuth.doLogin(loginInfo);
			if (!profile) {
				this.logger.error(LogStrings.FailedToGetUserFromServer);
				VsCodeUI.ShowErrorMessage(
					Messages.FailedToExecuteLoginMsg(AuthProvider.Vsts),
				);
				return false;
			}

			const tenantName: string = profile.tenantName; //"msmobilecenter";

			const accessToken: string = await Auth.accessTokenFor(profile);

			const userName: string = profile.userName;
			const vsts = new VSTSProvider(
				{
					tenantName: tenantName,
					accessToken: accessToken,
					userName: userName,
				},
				this.logger,
			);
			const isValid: boolean = await vsts.TestVstsConnection();
			if (isValid) {
				VsCodeUI.ShowInfoMessage(
					Messages.YouAreLoggedInMessage(
						AuthProvider.Vsts,
						profile.displayName,
					),
				);
			} else {
				VsCodeUI.ShowWarningMessage(Messages.VstsCredsNotValidWarning);
				this.vstsAuth.doLogout(profile.userId);
				return false;
			}
			return true;
		} catch (e) {
			VsCodeUI.ShowErrorMessage(Messages.FailedToLogin);
			this.logger.error(e.message, e, true);
			return false;
		}
	}
}
