/**
 * Memory data for device
 *
 */
class DeviceMemory {
	/**
	 * Create a DeviceMemory.
	 * @member {string} [formattedSize]
	 */
	constructor() {}

	/**
	 * Defines the metadata of DeviceMemory
	 *
	 * @returns {object} metadata of DeviceMemory
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DeviceMemory",
			type: {
				name: "Composite",
				className: "DeviceMemory",
				modelProperties: {
					formattedSize: {
						required: false,
						serializedName: "formattedSize",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = DeviceMemory;
