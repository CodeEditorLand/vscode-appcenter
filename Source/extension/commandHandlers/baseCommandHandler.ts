import type AppCenterAuth from "../../auth/appCenterAuth";
import type VstsAuth from "../../auth/vstsAuth";
import type { CommandParams } from "../../helpers/interfaces";
import type { ExtensionManager } from "../extensionManager";
export default abstract class BaseCommandHandler {
	constructor(
		private manager: ExtensionManager,
		private appCenterAuth: AppCenterAuth,
		private vstsAuth: VstsAuth,
	) {}

	protected getCommandParams(): CommandParams {
		return {
			manager: this.manager,
			appCenterAuth: this.appCenterAuth,
			vstsAuth: this.vstsAuth,
		};
	}
}
