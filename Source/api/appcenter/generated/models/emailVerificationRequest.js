/**
 * Class representing a EmailVerificationRequest.
 */
class EmailVerificationRequest {
	/**
	 * Create a EmailVerificationRequest.
	 * @member {string} token The verification token that was sent to the user
	 */
	constructor() {}

	/**
	 * Defines the metadata of EmailVerificationRequest
	 *
	 * @returns {object} metadata of EmailVerificationRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "EmailVerificationRequest",
			type: {
				name: "Composite",
				className: "EmailVerificationRequest",
				modelProperties: {
					token: {
						required: true,
						serializedName: "token",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = EmailVerificationRequest;
