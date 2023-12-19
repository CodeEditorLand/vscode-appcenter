export class Constants {
	public static ExtensionName = "App Center";
	public static ExtensionCommandPrefix = "appcenter";
	public static DefaultAPIEndPoint = "https://api.appcenter.ms";
	public static AppCenterPortalURL = "https://appcenter.ms";
	public static DefaultLegacyCodePushService =
		"https://codepush-management.azurewebsites.net/";
	public static DefaultDistributionGroupTestersName = "Beta Testers";
	public static DefaultBranchName = "master";
	public static DefaultLoginEndPoint = "https://appcenter.ms/cli-login";
	public static ProdCrashesEndPoint = "https://in.mobile.azure.com/logs";
	public static IntCrashesEndPoint =
		"https://in-integration.dev.avalanch.es/logs";
	public static StagingCrashesEndPoint =
		"https://in-staging-south-centralus.staging.avalanch.es/logs";
	public static CodePushStagingDeploymentName = "Staging";
	public static iOSAppSuffix = "-ios";
	public static AndroidAppSuffix = "-android";
	public static AppCenterDefaultTargetBinaryVersion = "";
	public static AppCenterDefaultIsMandatoryParam = false;
	public static IOSAppSecretKey = "AppSecret";
	public static AndroidAppSecretKey = "app_secret";
	public static IOSCodePushDeploymentKey = "CodePushDeploymentKey";
	public static AndroidCodePushDeploymentKey =
		"reactNativeCodePush_androidDeploymentKey";
	public static AppCenterSampleGitRemoteName = "appcenter-sample-repo";
	public static AppCenterSampleGitRemoteDefaultBranchName = "master";
	public static AppCenterSampleAppName = "AppCenterSample";
	public static GitDefaultRemoteName = "origin";
	public static ProfileDir = ".vscode-appcenter";
	public static AppCenterProfileFileName = "VSCodeAppCenterProfile.json";
	public static VstsProfileFileName = "VSCodeVstsProfile.json";
	public static TokenDir = ".vscode-appcenter";
	public static AppCenterTokenFileName = "VSCodeAppCenterTokens.json";
	public static TelemetrySource = "appcenter-vscode-extension";

	// IMPORTANT: this two items below should stay in sync in terms of xcode projectOrWorkspacePath/scheme values
	// We should decide how we should handle this (e.g. create manually within App Center site)
	public static AppCenterDemoAppRepository =
		"https://github.com/Microsoft/appcenter-sampleapp-react-native.git";
	public static defaultBuildConfigJSON = `{
        "branch": {
            "name": "master"
        },
        "id": 1,
        "trigger": "continuous",
        "environmentVariables": [],
        "signed": false,
        "testsEnabled": false,
        "badgeIsEnabled": false,
        "toolsets": {
            "buildscripts": {},
            "javascript": {
                "packageJsonPath": "package.json",
                "runTests": false
            },
            "xcode": {
                "projectOrWorkspacePath": "ios/AppCenterSample.xcworkspace",
                "scheme": "AppCenterSample",
                "xcodeVersion": "9.3",
                "automaticSigning": false,
                "podfilePath":"ios/Podfile"
            },
            "android": {
                "module": "app",
                "buildVariant": "release",
                "isRoot": false,
                "runTests": false,
                "runLint": false,
                "automaticSigning": false,
                "gradleWrapperPath": "android/gradlew"
            }
        }
    }`;

	public static AppCenterReactNativePlatformName = "React-Native";
}
// tslint:disable:max-classes-per-file
export class CommandNames {
	public static CommandPrefix = `${Constants.ExtensionCommandPrefix}.`;
	public static AppCenterPortal = `${CommandNames.CommandPrefix}showPortalMenu`;
	public static WhoAmI = `${CommandNames.CommandPrefix}whoAmI`;
	public static Login = `${CommandNames.CommandPrefix}login`;
	public static ShowMenu = `${CommandNames.CommandPrefix}menu`;
	public static Start = `${CommandNames.CommandPrefix}start`;
	public static GetCurrentApp = `${CommandNames.CommandPrefix}getCurrentApp`;
	public static SetCurrentApp = `${CommandNames.CommandPrefix}setCurrentApp`;
	public static SimulateCrashes = `${CommandNames.CommandPrefix}simulateCrashes`;
	public static InstallSDK = `${CommandNames.CommandPrefix}installSDK`;
	public static CreateNewApp = `${CommandNames.CommandPrefix}createNewApp`;

	public static Settings = class {
		public static ShowMenu = `${CommandNames.CommandPrefix}settings.showMenu`;
		public static LoginToAnotherAccount = `${CommandNames.CommandPrefix}settings.loginToAnotherAccount`;
		public static SwitchAccount = `${CommandNames.CommandPrefix}settings.switchAccount`;
		public static Logout = `${CommandNames.CommandPrefix}settings.logout`;

		public static LoginVsts = `${CommandNames.CommandPrefix}settings.vsts.login`;
		public static SwitchAccountVsts = `${CommandNames.CommandPrefix}settings.vsts.switchAccount`;
		public static LogoutVsts = `${CommandNames.CommandPrefix}settings.vsts.logout`;
		public static ShowStatusBar = `${CommandNames.CommandPrefix}settings.showStatusBar`;
		public static HideStatusBar = `${CommandNames.CommandPrefix}settings.hideStatusBar`;
	};

	public static CreateApp = class {
		public static CommandName = `${CommandNames.CommandPrefix}appcenter.createNewApp`;
		public static Android = `${CommandNames.CommandPrefix}appcenter.createNewApp.android`;
		public static IOS = `${CommandNames.CommandPrefix}appcenter.createNewApp.ios`;
		public static Both = `${CommandNames.CommandPrefix}appcenter.createNewApp.both`;
	};

	public static CodePush = class {
		public static SetCurrentDeployment = `${CommandNames.CommandPrefix}codePush.setCurrentDeployment`;
		public static ReleaseReact = `${CommandNames.CommandPrefix}codePush.releaseReact`;
		public static SwitchMandatoryPropForRelease = `${CommandNames.CommandPrefix}codePush.switchMandatoryPropForRelease`;
		public static SetTargetBinaryVersion = `${CommandNames.CommandPrefix}codePush.setTargetBinaryVersion`;
		public static LinkCodePush = `${CommandNames.CommandPrefix}codePush.linkCodePush`;
	};

	public static Test = class {
		public static ShowMenu = `${CommandNames.CommandPrefix}test.showMenu`;
		public static RunUITests = `${CommandNames.CommandPrefix}test.runUITests`;
		public static RunUITestsAsync = `${CommandNames.CommandPrefix}test.runUITestsAsync`;
		public static ViewResults = `${CommandNames.CommandPrefix}test.viewResults`;
	};
}

export enum MessageTypes {
	Error = 0,
	Warn = 1,
	Info = 2,
}

export enum AppCenterOS {
	iOS = "iOS",
	Android = "Android",
	macOS = "macOS",
	Tizen = "Tizen",
	tvOS = "tvOS",
	Windows = "Windows",
}

export enum AppCenterPlatform {
	ReactNative = "React-Native",
	Cordova = "Cordova",
	UWP = "UWP",
	Xamarin = "Xamarin",
	Java = "Java",
}

export enum AppCenterBeacons {
	Build = "Build",
	Test = "Test",
	CodePush = "CodePush",
	Distribute = "Distribute",
	Crashes = "Crashes",
	Analytics = "Analytics",
	Push = "Push",
}

export enum AppCenterDistributionTabs {
	Stores = "distribution-stores",
	Groups = "distribution-groups",
	CodePush = "code-push",
	Releases = "releases",
}

export enum AppCenterCrashesTabs {
	Crashes = "crashes-portal",
	Simulate = "simulate-crashes",
}

export enum AppCenterAppType {
	User = "User",
	Org = "Org",
}

export enum AuthProvider {
	Vsts = "VSTS",
	AppCenter = "App Center",
}

export enum AppCenterEnvironment {
	Prod = 0,
	Staging = 1,
	Int = 2,
}

export enum ReactNativePlatformDirectory {
	IOS = "ios",
	Android = "android",
}
