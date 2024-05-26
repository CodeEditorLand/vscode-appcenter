/**
 * The user's settings
 *
 */
class UserProfileResponseInternalSettings {
	/**
	 * Create a UserProfileResponseInternalSettings.
	 * @member {string} [marketingOptIn] The marketing opt-in setting
	 */
	constructor() {}

	/**
	 * Defines the metadata of UserProfileResponseInternalSettings
	 *
	 * @returns {object} metadata of UserProfileResponseInternalSettings
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "UserProfileResponseInternal_settings",
			type: {
				name: "Composite",
				className: "UserProfileResponseInternalSettings",
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

module.exports = UserProfileResponseInternalSettings;
