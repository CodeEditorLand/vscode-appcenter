/**
 * failure response object
 *
 */
class FailureResponse {
	/**
	 * Create a FailureResponse.
	 * @member {string} code
	 * @member {string} message
	 */
	constructor() {}

	/**
	 * Defines the metadata of FailureResponse
	 *
	 * @returns {object} metadata of FailureResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "FailureResponse",
			type: {
				name: "Composite",
				className: "FailureResponse",
				modelProperties: {
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

module.exports = FailureResponse;
