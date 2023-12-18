import { CurrentApp } from "../../helpers/interfaces";

export class MenuStrings {
	// #region Menu labels
	public static BuildTabMenuLabel = "Build";
	public static TestTabMenuLabel = "Test";
	public static DistributeTabMenuLabel = "Distribute";
	public static CrashesTabMenuLabel = "Crashes";
	public static AnalyticsTabMenuLabel = "Analytics";
	public static PushTabMenuLabel = "Push";
	public static DistributeGroupsTabMenuLabel = "Groups";
	public static DistributeStoresTabMenuLabel = "Stores";
	public static DistributeCodePushTabMenuLabel = "CodePush";
	public static DistributeReleasesTabMenuLabel = "Releases";
	public static StartAProjectMenuLabel = "Start a new project";
	public static LoginMenuLabel = "Login";
	public static GetCurrentAppMenuLabel = "Get current app info";
	public static CodePushMenuLabel = "CodePush";
	public static CodePushMenuLabelDescription =
		"Release a new CodePush update";
	public static AppCenterPortalMenuLabel = "Portal";
	public static CreateNewAppMenuLabel = "Create a new App Center app";
	public static CreateNewIOSAppMenuLabel = "Create an app for iOS";
	public static CreateNewAndroidAppMenuLabel = "Create an app for Android";
	public static CreateNewAppsForBothMenuLabel =
		"Create apps for both platforms";
	public static SettingsMenuLabel = "Settings";
	public static SimulateCrashesMenuLabel = "Simulate Crashes";
	public static LinkCodePushMenuLabel = "Link CodePush";
	public static LinkAppCenterMenuLabel = "Link App Center";
	public static InstallSDKMenuLabel = "Install SDK";
	public static SwitchAccountMenuLabel = "Switch App Center account";
	public static LogoutMenuLabel = "Logout of App Center";
	public static VstsLoginToAnotherAccountMenuLabel = "Add VSTS account";
	public static VstsSwitchAccountMenuLabel = "Switch VSTS account";
	public static LoginToAnotherAccountMenuLabel = "Add App Center account";
	public static VstsLogoutMenuLabel = "Logout of VSTS";
	public static HideStatusBarMenuLabel = "Hide status bar";
	public static RunUITestsMenuLabel = "Run UI tests";
	public static RunUITestsAsyncMenuLabel = "Run UI tests asynchronously";
	public static ViewUITestResultOnPortalMenuLabel = "View results in portal";
	public static setCurrentAppDeploymentMenuLabel(app: CurrentApp): string {
		return `Change '${app.currentAppDeployments.currentDeploymentName}' to a different deployment`;
	}

	public static setCurrentAppTargetBinaryVersionMenuLabel(
		app: CurrentApp,
	): string {
		const targetBinaryVersionProvided =
			app.targetBinaryVersion !== undefined && app.targetBinaryVersion;
		return `Change ${
			targetBinaryVersionProvided
				? `'${app.targetBinaryVersion}'`
				: "automatically fetched"
		} target binary version`;
	}

	public static setCurrentAppIsMandatoryMenuLabel(app: CurrentApp): string {
		const isMandatory = app.isMandatory !== undefined && app.isMandatory;
		return `Change release to ${
			isMandatory ? "be not Mandatory" : "be Mandatory"
		}`;
	}

	public static setCurrentAppMenuLabel(app?: CurrentApp): string {
		if (app) {
			return `Switch ${app.appName} (${app.os})`;
		} else {
			return `Set current app`;
		}
	}

	public static releaseReactMenuLabel(app?: CurrentApp): string {
		if (app) {
			return `Release '${app.appName}' to '${app.currentAppDeployments.currentDeploymentName}' deployment`;
		} else {
			return `Release react (please specify current app first)`;
		}
	}
	// #endregion Menu labels

	// #region Menu Descriptions
	public static AppCenterPortalMenuDescription =
		"Quick navigate your App Center apps";
	public static SelectCurrentAppMenuDescription = "Use Current App";
	public static StartAProjectMenuDescription = "";
	public static OrganizationMenuDescription = "Organization";
	public static UserMenuDescription = "User";
	public static CurrentAppMenuDescription =
		"Click here to change current app";
	public static LoginMenuDescription = "";
	public static SettingsMenuDescription = "";
	public static SimulateCrashesMenuDescription =
		"Send test crash data to your current application in App Center";
	public static LinkCodePushMenuDescription =
		"Link CodePush SDK to your application";
	public static LinkAppCenterMenuDescription =
		"Link App Center SDK to your application";
	public static InstallSDKMenuDescription =
		"Link the App Center or CodePush SDK to your project";
	public static LoginToAnotherAccountMenuDescription =
		"Log in to another App Center account";
	public static SwitchAccountMenuDescription =
		"Switch to an App Center account you've previously logged in to";
	public static VstsLoginToAnotherAccountMenuDescription =
		"Log in to another VSTS account";
	public static VstsSwitchAccountMenuDescription =
		"Switch to a VSTS account you've previously logged in to";
	public static HideStatusBarMenuDescription =
		"Hide status bar from the bottom left corner. You can enable it with 'Show status bar' cmd.";
	public static OpenTabInBrowserMenuDescription(tabName: string): string {
		return `Navigate to '${tabName}' options for current app`;
	}

	public static DeviceSetsDescription(ownerType: string): string {
		return `configured device set (${ownerType})`;
	}
	// #endregion Menu Descriptions
}
