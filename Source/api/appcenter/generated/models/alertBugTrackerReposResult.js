const models = require("./index");

/**
 * List of bug tracker repositories
 *
 */
class AlertBugTrackerReposResult {
	/**
	 * Create a AlertBugTrackerReposResult.
	 * @member {string} [repoType] Possible values include: 'github', 'vsts',
	 * 'jira'
	 * @member {array} repositories
	 */
	constructor() {}

	/**
	 * Defines the metadata of AlertBugTrackerReposResult
	 *
	 * @returns {object} metadata of AlertBugTrackerReposResult
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AlertBugTrackerReposResult",
			type: {
				name: "Composite",
				className: "AlertBugTrackerReposResult",
				modelProperties: {
					repoType: {
						required: false,
						serializedName: "repo_type",
						type: {
							name: "String",
						},
					},
					repositories: {
						required: true,
						serializedName: "repositories",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"AlertBugTrackerRepoElementType",
								type: {
									name: "Composite",
									className: "AlertBugTrackerRepo",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = AlertBugTrackerReposResult;
