import type { CommandParams, Profile } from "../../../helpers/interfaces";
import { AuthProvider } from "../../resources/constants";
import { Messages } from "../../resources/messages";
import { VsCodeUI } from "../../ui/vscodeUI";
import { Command } from "../command";

export default class WhoAmI extends Command {
	constructor(params: CommandParams) {
		super(params);
	}

	public async runNoClient(): Promise<void> {
		super.runNoClient();
		const profile: Profile | null = await this.appCenterProfile;
		if (profile) {
			VsCodeUI.ShowInfoMessage(
				Messages.YouAreLoggedInMessage(
					AuthProvider.AppCenter,
					profile.displayName,
				),
			);
		} else {
			VsCodeUI.ShowWarningMessage(Messages.UserIsNotLoggedInWarning);
		}
	}
}
