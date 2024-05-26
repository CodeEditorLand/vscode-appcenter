/**
 * A user's setting
 *
 */
class UserSettingResponse {
	/**
	 * Create a UserSettingResponse.
	 * @member {string} [marketingOptIn] The marketing opt-in setting
	 */
	constructor() {}

	/**
	 * Defines the metadata of UserSettingResponse
	 *
	 * @returns {object} metadata of UserSettingResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "UserSettingResponse",
			type: {
				name: "Composite",
				className: "UserSettingResponse",
				modelProperties: {
					marketingOptIn: {
						required: false,
						serializedName: "marketing_opt_in",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = UserSettingResponse;
