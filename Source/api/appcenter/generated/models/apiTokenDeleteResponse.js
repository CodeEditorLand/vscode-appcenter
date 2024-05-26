/**
 * Class representing a ApiTokenDeleteResponse.
 */
class ApiTokenDeleteResponse {
	/**
	 * Create a ApiTokenDeleteResponse.
	 * @member {string} id The unique id (UUID) of the api token
	 * @member {string} tokenHash The hashed value of api token
	 */
	constructor() {}

	/**
	 * Defines the metadata of ApiTokenDeleteResponse
	 *
	 * @returns {object} metadata of ApiTokenDeleteResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ApiTokenDeleteResponse",
			type: {
				name: "Composite",
				className: "ApiTokenDeleteResponse",
				modelProperties: {
					id: {
						required: true,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					tokenHash: {
						required: true,
						serializedName: "token_hash",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = ApiTokenDeleteResponse;
