/**
 * Class representing a ApiTokensCreateRequest.
 */
class ApiTokensCreateRequest {
	/**
	 * Create a ApiTokensCreateRequest.
	 * @member {string} [description] The description of the token
	 * @member {array} [scope] The scope for this token.
	 */
	constructor() {}

	/**
	 * Defines the metadata of ApiTokensCreateRequest
	 *
	 * @returns {object} metadata of ApiTokensCreateRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ApiTokensCreateRequest",
			type: {
				name: "Composite",
				className: "ApiTokensCreateRequest",
				modelProperties: {
					description: {
						required: false,
						serializedName: "description",
						type: {
							name: "String",
						},
					},
					scope: {
						required: false,
						serializedName: "scope",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "StringElementType",
								type: {
									name: "String",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = ApiTokensCreateRequest;
