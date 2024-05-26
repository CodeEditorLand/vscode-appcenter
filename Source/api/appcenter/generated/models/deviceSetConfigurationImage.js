/**
 * Class representing a DeviceSetConfigurationImage.
 */
class DeviceSetConfigurationImage {
	/**
	 * Create a DeviceSetConfigurationImage.
	 * @member {string} [thumb]
	 */
	constructor() {}

	/**
	 * Defines the metadata of DeviceSetConfigurationImage
	 *
	 * @returns {object} metadata of DeviceSetConfigurationImage
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DeviceSetConfiguration_image",
			type: {
				name: "Composite",
				className: "DeviceSetConfigurationImage",
				modelProperties: {
					thumb: {
						required: false,
						serializedName: "thumb",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = DeviceSetConfigurationImage;
