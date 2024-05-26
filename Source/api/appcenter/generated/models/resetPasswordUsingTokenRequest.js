/**
 * Class representing a ResetPasswordUsingTokenRequest.
 */
class ResetPasswordUsingTokenRequest {
	/**
	 * Create a ResetPasswordUsingTokenRequest.
	 * @member {string} newPassword The new password. Needs to be at least 8
	 * characters long and contain at least one lower- and one uppercase letter.
	 * @member {string} token The reset password token that was sent to the user
	 */
	constructor() {}

	/**
	 * Defines the metadata of ResetPasswordUsingTokenRequest
	 *
	 * @returns {object} metadata of ResetPasswordUsingTokenRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ResetPasswordUsingTokenRequest",
			type: {
				name: "Composite",
				className: "ResetPasswordUsingTokenRequest",
				modelProperties: {
					newPassword: {
						required: true,
						serializedName: "new_password",
						type: {
							name: "String",
						},
					},
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

module.exports = ResetPasswordUsingTokenRequest;
