/**
 * Class representing a GetInAppUpdateTokenResponse.
 */
class GetInAppUpdateTokenResponse {
	/**
	 * Create a GetInAppUpdateTokenResponse.
	 * @member {string} apiToken The api token generated will not be accessible
	 * again
	 */
	constructor() {}

	/**
	 * Defines the metadata of GetInAppUpdateTokenResponse
	 *
	 * @returns {object} metadata of GetInAppUpdateTokenResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "GetInAppUpdateTokenResponse",
			type: {
				name: "Composite",
				className: "GetInAppUpdateTokenResponse",
				modelProperties: {
					apiToken: {
						required: true,
						serializedName: "api_token",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = GetInAppUpdateTokenResponse;
