/**
 * @summary Device List
 *
 * A list of device IDs
 *
 */
class DeviceList {
	/**
	 * Create a DeviceList.
	 * @member {array} devices
	 */
	constructor() {}

	/**
	 * Defines the metadata of DeviceList
	 *
	 * @returns {object} metadata of DeviceList
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DeviceList",
			type: {
				name: "Composite",
				className: "DeviceList",
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
				},
			},
		};
	}
}

module.exports = DeviceList;
