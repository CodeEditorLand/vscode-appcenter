/**
 * A response containing the fully encoded binary blob for a mobileconfig
 *
 */
class DeviceConfigurationResponse {
	/**
	 * Create a DeviceConfigurationResponse.
	 * @member {string} dataUrl A data URL containing a signed mobileconfig
	 * profile
	 */
	constructor() {}

	/**
	 * Defines the metadata of DeviceConfigurationResponse
	 *
	 * @returns {object} metadata of DeviceConfigurationResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DeviceConfigurationResponse",
			type: {
				name: "Composite",
				className: "DeviceConfigurationResponse",
				modelProperties: {
					dataUrl: {
						required: true,
						serializedName: "data_url",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = DeviceConfigurationResponse;
