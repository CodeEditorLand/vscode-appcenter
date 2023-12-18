import { validRange } from "semver";
import { CommandParams, CurrentApp } from "../../../helpers/interfaces";
import { AppCenterOS, Constants } from "../../resources/constants";
import { Messages } from "../../resources/messages";
import { Strings } from "../../resources/strings";
import { VsCodeUI } from "../../ui/vscodeUI";
import { RNCPAppCommand } from "./rncpAppCommand";

export default class SetTargetBinaryVersion extends RNCPAppCommand {
	constructor(params: CommandParams) {
		super(params);
	}

	public async run(): Promise<void> {
		if (!(await super.run())) {
			return;
		}
		const app: CurrentApp = await this.getCurrentApp(true);
		if (!app) {
			VsCodeUI.ShowWarningMessage(Messages.NoCurrentAppSetWarning);
			return void 0;
		}
		if (!this.hasCodePushDeployments(app)) {
			VsCodeUI.ShowWarningMessage(Messages.NoDeploymentsWarning);
			return void 0;
		}
		const appVersion: string = await VsCodeUI.showInput(
			Strings.PleaseProvideTargetBinaryVersionHint,
		);
		if (!appVersion) {
			// if user press esc do nothing then
			return void 0;
		}
		if (
			appVersion !== Constants.AppCenterDefaultTargetBinaryVersion &&
			!validRange(appVersion)
		) {
			VsCodeUI.ShowWarningMessage(Messages.InvalidAppVersionParamWarning);
			return void 0;
		}

		const currentApp: CurrentApp = await this.saveCurrentApp(
			app.identifier,
			AppCenterOS[app.os],
			{
				currentDeploymentName:
					app.currentAppDeployments.currentDeploymentName,
				codePushDeployments:
					app.currentAppDeployments.codePushDeployments,
			},
			appVersion,
			app.type,
			app.isMandatory,
			app.appSecret,
		);
		if (!currentApp) {
			return;
		}
		VsCodeUI.ShowInfoMessage(
			Messages.ChangedTargetBinaryVersionMessage(appVersion),
		);
	}
}
