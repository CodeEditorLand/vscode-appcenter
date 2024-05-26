/**
 * Class representing a ValidationErrorResponse.
 */
class ValidationErrorResponse {
	/**
	 * Create a ValidationErrorResponse.
	 * @member {string} id
	 * @member {string} code
	 * @member {string} message
	 */
	constructor() {}

	/**
	 * Defines the metadata of ValidationErrorResponse
	 *
	 * @returns {object} metadata of ValidationErrorResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ValidationErrorResponse",
			type: {
				name: "Composite",
				className: "ValidationErrorResponse",
				modelProperties: {
					id: {
						required: true,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					code: {
						required: true,
						serializedName: "code",
						type: {
							name: "String",
						},
					},
					message: {
						required: true,
						serializedName: "message",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = ValidationErrorResponse;
