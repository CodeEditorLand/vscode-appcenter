/**
 * Class representing a CrashGroupAndVersion.
 */
class CrashGroupAndVersion {
	/**
	 * Create a CrashGroupAndVersion.
	 * @member {string} [crashGroupId]
	 * @member {string} [appVersion]
	 */
	constructor() {}

	/**
	 * Defines the metadata of CrashGroupAndVersion
	 *
	 * @returns {object} metadata of CrashGroupAndVersion
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CrashGroupAndVersion",
			type: {
				name: "Composite",
				className: "CrashGroupAndVersion",
				modelProperties: {
					crashGroupId: {
						required: false,
						serializedName: "crash_group_id",
						type: {
							name: "String",
						},
					},
					appVersion: {
						required: false,
						serializedName: "app_version",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = CrashGroupAndVersion;
