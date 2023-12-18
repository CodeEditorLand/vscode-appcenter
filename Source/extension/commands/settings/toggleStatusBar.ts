import { SettingsHelper } from "../../../helpers/settingsHelper";
import { Messages } from "../../resources/messages";
import { VsCodeUI } from "../../ui/vscodeUI";
import { Command } from "../command";

export default class ToggleStatusBar extends Command {
	public async runNoClient(): Promise<boolean | void> {
		if (!(await super.runNoClient())) {
			return false;
		}

		if (SettingsHelper.shouldStatusBarBeShown()) {
			SettingsHelper.setHideStatusBar();
			this.manager.hideStatusBar();
			VsCodeUI.ShowInfoMessage(Messages.StatusBarHiddenMessage);
		} else {
			SettingsHelper.setShowStatusBar();
			this.manager.showStatusBar();
			VsCodeUI.ShowInfoMessage(Messages.StatusBarShownMessage);
		}
	}
}
