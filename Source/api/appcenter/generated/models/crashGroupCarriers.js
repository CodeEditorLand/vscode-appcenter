const models = require("./index");

/**
 * Class representing a CrashGroupCarriers.
 */
class CrashGroupCarriers {
	/**
	 * Create a CrashGroupCarriers.
	 * @member {number} [crashCount]
	 * @member {array} [carriers]
	 */
	constructor() {}

	/**
	 * Defines the metadata of CrashGroupCarriers
	 *
	 * @returns {object} metadata of CrashGroupCarriers
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CrashGroupCarriers",
			type: {
				name: "Composite",
				className: "CrashGroupCarriers",
				modelProperties: {
					crashCount: {
						required: false,
						serializedName: "crash_count",
						type: {
							name: "Number",
						},
					},
					carriers: {
						required: false,
						serializedName: "carriers",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "CrashGroupCarrierElementType",
								type: {
									name: "Composite",
									className: "CrashGroupCarrier",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = CrashGroupCarriers;
