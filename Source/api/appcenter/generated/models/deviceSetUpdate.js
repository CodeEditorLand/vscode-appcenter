/**
 * @summary Device Set update information
 *
 * The name of the device set and the list of device IDs
 *
 */
class DeviceSetUpdate {
	/**
	 * Create a DeviceSetUpdate.
	 * @member {array} devices List of device IDs
	 * @member {string} name The name of the device set
	 */
	constructor() {}

	/**
	 * Defines the metadata of DeviceSetUpdate
	 *
	 * @returns {object} metadata of DeviceSetUpdate
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DeviceSetUpdate",
			type: {
				name: "Composite",
				className: "DeviceSetUpdate",
				modelProperties: {
					devices: {
						required: true,
						serializedName: "devices",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "StringElementType",
								type: {
									name: "String",
								},
							},
						},
					},
					name: {
						required: true,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = DeviceSetUpdate;
