/**
 * The status information from Itunes portal
 *
 */
class ApplicationStatusResponse {
	/**
	 * Create a ApplicationStatusResponse.
	 * @member {string} versionType The type of version being returned
	 * (production/edit/test flight).
	 * @member {string} [version] The version of the application
	 */
	constructor() {}

	/**
	 * Defines the metadata of ApplicationStatusResponse
	 *
	 * @returns {object} metadata of ApplicationStatusResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ApplicationStatusResponse",
			type: {
				name: "Composite",
				className: "ApplicationStatusResponse",
				modelProperties: {
					versionType: {
						required: true,
						serializedName: "version_type",
						type: {
							name: "String",
						},
					},
					version: {
						required: false,
						serializedName: "version",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = ApplicationStatusResponse;
