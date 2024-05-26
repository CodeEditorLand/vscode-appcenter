/**
 * Class representing a SuccessResponse.
 */
class SuccessResponse {
	/**
	 * Create a SuccessResponse.
	 * @member {string} message
	 */
	constructor() {}

	/**
	 * Defines the metadata of SuccessResponse
	 *
	 * @returns {object} metadata of SuccessResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "SuccessResponse",
			type: {
				name: "Composite",
				className: "SuccessResponse",
				modelProperties: {
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

module.exports = SuccessResponse;
