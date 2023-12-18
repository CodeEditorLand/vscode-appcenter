export class Strings {
	// #region Buttons
	public static OkBtnLabel = "Ok";
	public static RepoManualConnectBtnLabel = "Connect";
	public static PodInstallBtnLabel = "Install CocoaPods";
	public static BuildManualConfigureBtnLabel = "Configure build";
	public static AppCreatedBtnLabel = "Check it out";
	public static CrashesSimulatedBtnLabel = "Check it out";
	public static LinkDoneBtnLabel = "Done";
	// #endregion Buttons

	// #region Status bar
	public static UserMustSignInStatusBarMessage = "Please login to App Center";
	public static LoginToAppCenterStatusBarButton = "App Center: Login";
	// #endregion Status bar

	// #region Hints
	public static PleaseEnterProjectNameHint = "Please enter a project name";
	public static PleaseProvideTokenHint =
		"Please paste your App Center access token";
	public static PleaseEnterNewRepositoryUrlHint =
		"Please enter repository url";
	public static MenuTitleHint = "Please make an App Center selection";
	public static SelectProfileTitleHint = "Please select account";
	public static SpecifyTenantTitleHint =
		"(Step 1). Please specify instance name";
	public static SpecifyUserNameTitleHint =
		"(Step 2). Please specify username";
	public static SpecifyPATTitleHint =
		"(Step 3). Please specify personal access token";
	public static CreateAppHint = "Choose the app to be created";
	public static ProvideCurrentAppHint = "Please specify an App Center app";
	public static ProvideVSTSProjectPromptHint = "Please specify VSTS Project";
	public static SelectCurrentDeploymentHint =
		"Please specify a CodePush deployment";
	public static PleaseSelectCurrentAppOrgHint =
		"Please select user/organization where to create an App";
	public static ChooseAppToBeSetHint =
		"Choose which app you want to set as current";
	public static PleaseProvideTargetBinaryVersionHint =
		"Please provide a target binary version in semver format";
	public static ProvideFirstAppHint = "Choose the first app to be linked";
	public static ProvideSecondAppHint = "Choose the second app to be linked";

	public static SelectTestDeviceTitleHint(appName: string): string {
		return `Please select device configuration to test ${appName}`;
	}
	// #endregion Hints
}
