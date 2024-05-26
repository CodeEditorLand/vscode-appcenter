/**
 * Class representing a UpdateDevicesRequestDestinationsItem.
 */
class UpdateDevicesRequestDestinationsItem {
	/**
	 * Create a UpdateDevicesRequestDestinationsItem.
	 * @member {string} [name]
	 */
	constructor() {}

	/**
	 * Defines the metadata of UpdateDevicesRequestDestinationsItem
	 *
	 * @returns {object} metadata of UpdateDevicesRequestDestinationsItem
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "UpdateDevicesRequest_destinationsItem",
			type: {
				name: "Composite",
				className: "UpdateDevicesRequestDestinationsItem",
				modelProperties: {
					name: {
						required: false,
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

module.exports = UpdateDevicesRequestDestinationsItem;
