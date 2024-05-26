/**
 * Repository owner object
 *
 */
class AlertBugTrackerRepoOwner {
	/**
	 * Create a AlertBugTrackerRepoOwner.
	 * @member {string} [name]
	 * @member {string} [id]
	 * @member {string} [login]
	 */
	constructor() {}

	/**
	 * Defines the metadata of AlertBugTrackerRepoOwner
	 *
	 * @returns {object} metadata of AlertBugTrackerRepoOwner
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AlertBugTrackerRepoOwner",
			type: {
				name: "Composite",
				className: "AlertBugTrackerRepoOwner",
				modelProperties: {
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					id: {
						required: false,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					login: {
						required: false,
						serializedName: "login",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = AlertBugTrackerRepoOwner;
