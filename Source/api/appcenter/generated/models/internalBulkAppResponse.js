/**
 * Class representing a InternalBulkAppResponse.
 */
class InternalBulkAppResponse {
	/**
	 * Create a InternalBulkAppResponse.
	 * @member {string} [appName] The name of the app
	 * @member {string} [ownerDisplayName] The display name of the owner
	 */
	constructor() {}

	/**
	 * Defines the metadata of InternalBulkAppResponse
	 *
	 * @returns {object} metadata of InternalBulkAppResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "InternalBulkAppResponse",
			type: {
				name: "Composite",
				className: "InternalBulkAppResponse",
				modelProperties: {
					appName: {
						required: false,
						serializedName: "app_name",
						type: {
							name: "String",
						},
					},
					ownerDisplayName: {
						required: false,
						serializedName: "owner_display_name",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = InternalBulkAppResponse;
