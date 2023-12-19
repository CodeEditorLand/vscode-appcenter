export class LogStrings {
	public static NodeModulesInstalledMessage =
		"Dependencies have been successfully installed.";
	public static PodsInstalledMessage =
		"Pods have been successfully installed.";
	public static CodePushInstallMessage =
		'Make sure you ran "npm install" and that you are inside a React Native CodePush project.';
	public static AppCenterInstallMessage =
		'Make sure you ran "npm install" and that you are inside a React Native App Center project.';
	public static ReactNativeInstallMessage =
		'Make sure you ran "npm install" and that you are inside a React Native project.';
	public static FailedToGetVSTSProjectList =
		"Failed to get VSTS Project list.";
	public static FailedToGetVSTSReposList =
		"Failed to get VSTS Git repositories list.";
	public static FailedToGetAppCenterProfile =
		"Could get profile from App Center.";
	public static FailedToGetProfileFile =
		"Profile not found. Login to the App Center via the Visual Studio Code Extension to create the profile.";
	public static FailedToGetUserProfile = "Couldn't get user profile.";
	public static FailedToGetUserFromServer =
		"Failed to fetch user info from server";
	public static NoTokenProvided = "No token provided on login";
	public static FailedToGetToken = "Failed to get token from profile.";
	public static CodePushError =
		"An error occured on doing Code Push release.";
	public static FailedToSendCrashes = "Failed to send crashes information.";
	public static ProjectOrOrgNotSet =
		"Sorry, Project name or User/Organization is not set";
	public static FailedToClone = "Failed to clone into exiting repository";
	public static RootNotFound = "No project root folder found";
	public static FailedToGetClient = "Failed to get App Center client";
	public static NoUserSpecified = "No App Center user specified!";
	public static GettingUserOrOrg = "Getting user/organization items...";
	public static NoAppsToShow =
		"Do not show apps quick pick due to no apps (either in cache or fetched from server).";
	public static BuildingProject = "Building a new App Center project...";
	public static FailedToGetVSTSProfile =
		"Failed to get VSTS profile for command.";
	public static FailedToGetVSTSProject = "Failed to get VSTS project.";
	public static FailedToCreateVSTSRepo = "Failed to create VSTS git repo.";
	public static CreatingAppsInAppCenter =
		"Creating your iOS and Android app in App Center...";
	public static FailedCreateAppsInAppCenter =
		"Failed to create apps in App Center.";
	public static FailedToSaveCurrentApp = "Failed to save current app";
	public static ConfiguringAppCenterSDK = "Configuring App Center SDKs...";
	public static FailedToUpdateAppSecret = "Failed to update app secret keys!";
	public static CreatingCodePushDeployments =
		"Creating CodePush deployments...";
	public static SettingDeploymentKeys = "Setting CodePush deployment keys...";
	public static FailedToCreateDeploymentKeys =
		"Failed to update CodePush deployment keys!";
	public static InstallingPods = "Installing pods for ios...";
	public static FailedToInstallPods = "Failed to run pod update.";
	public static RunningNpmI = "Running npm install...";
	public static FailedNpmI = "Failed to run npm install.";
	public static SettingAppSecrets = "Setting app secrets...";
	public static PullingSample =
		"Pull App Center sample app into current directory...";

	public static PushingChangesTo(repoUrl: string): string {
		return `Pushing changes to ${repoUrl}...`;
	}
	public static SecretsInfo(appName: string, secret: string): string {
		return `App name: ${appName}, secret: ${secret}.`;
	}

	public static DeploymentInfo(
		name: string,
		key: string,
		os: string,
	): string {
		return `Deployment name: ${name}, secret: ${key}, OS: ${os}.`;
	}
	public static CodePushUpdatedContentsDir(dir: string): string {
		return `CodePush updated contents directory path: ${dir}`;
	}

	public static UnknownOSFromCodePush(os: string): string {
		return `Couldn't recognize os ${os} returned from CodePush server.`;
	}

	public static CheckingProjectName(projectName: string) {
		return `Checking if project name "${projectName}" is not already used before...`;
	}
	public static DistributionGroupCreated(
		groupName: string,
		projectName: string,
	): string {
		return `"${groupName}" distribution group was created for your project "${projectName}".`;
	}

	public static ProjectConnected(
		projectName: string,
		repoUrl: string,
	): string {
		return `Project "${projectName}" was connected to repositry "${repoUrl}".`;
	}

	public static AppsCreated(projectName: string): string {
		return `Apps for your project "${projectName}" were created.`;
	}

	public static BuildConfigureError(appName: string): string {
		return `An error occurred while configuring your ${appName}" app for build.`;
	}

	public static BuildQueueError(appName: string): string {
		return `An unexpected error occurred while queueing a build for "${appName}".`;
	}

	public static BuildConnectError(appName: string, repoUrl: string): string {
		return `Could not connect your new repository "${repoUrl}" to your "${appName}" App Center project`;
	}

	public static DistributionGroupExists(
		group: string,
		appName: string,
	): string {
		return `Distribution group "${group}" in "${appName}" already exists.`;
	}

	public static ErrorCreatingDistributionGroup(appName: string): string {
		return `An unexpected error occurred while creating a distribution group for "${appName}".`;
	}

	public static AppNameExists(appName: string): string {
		return `The app named "${appName}" already exists.`;
	}

	public static FailedCreateAppUnder(
		appName: string,
		orgName?: string,
	): string {
		let failed = `An unexpected error occurred trying to create "${appName}"`;
		failed += orgName ? `under ${orgName}.` : ".";
		return failed;
	}

	public static DeploymentExists(appName: string): string {
		return `A CodePush deployment with the name ${appName} already exists, fetching the keys...`;
	}

	public static ErrorCreatingDeploymentsFor(appName: string): string {
		return `An unexpected error occurred trying to create CodePush deployments for ${appName}.`;
	}

	public static SavedCodePushDeploymentKey(path: string): string {
		return `Saved CodePush deployemnt key in ${path}.`;
	}

	public static SavedAppSecret(path: string): string {
		return `Saved App secret to ${path}.`;
	}

	public static CouldNotRead(name: string): string {
		return `Could not read contents of ${name}.`;
	}

	public static ReadContents(name: string): string {
		return `Read contents of ${name}.`;
	}

	public static CouldNotSave(name: string): string {
		return `Unable to save ${name}.`;
	}

	public static ConfigurationFailedToParse(value: string): string {
		return `Configuration Reader: Failed to parse value ${value}.`;
	}

	public static MultipleProfiles(
		userId: string,
		storageFilePath: string,
	): string {
		return `There are more than one profile saved with userId ${userId}. Try deleting ${storageFilePath} and log in again.`;
	}

	public static FailedToWriteProfiles(storageFilePath: string): string {
		return `Failed to write profiles into ${storageFilePath}.`;
	}

	public static MultipleActiveProfiles(storageFilePath: string): string {
		return `Malformed profile data. Shouldn\'t be more than one active profile. Try deleting ${storageFilePath} and log in again.`;
	}

	public static FailedToParseStorage(storageFilePath: string): string {
		return `Failed to parse JSON file for ${storageFilePath}.`;
	}

	public static FailedToRemoveRemote(remoteName: string): string {
		return `Failed to remove remote "${remoteName}";`;
	}

	public static FailedToAddRemote(remoteName: string): string {
		return `Failed to add remote ${remoteName}`;
	}

	public static FailedToGetRemote(remoteName: string): string {
		return `Failed to get remote ${remoteName}`;
	}

	public static FailedToPullRemote(remoteName: string): string {
		return `Failed to pull from remote repo "${remoteName}"`;
	}

	public static SuccessfullyPushedTo(
		remoteRepoName: string,
		branch: string,
	): string {
		return `Successfully pushed changes to remote repository: "${remoteRepoName}" branchname: "${branch}"`;
	}

	public static FailedToPushTo(remoteRepoName: string): string {
		return `Failed to configure/push to remote repository "${remoteRepoName}".`;
	}
}
