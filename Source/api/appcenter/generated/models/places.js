const models = require("./index");

/**
 * Places and count during the time range in descending order
 *
 */
class Places {
	/**
	 * Create a Places.
	 * @member {number} [total]
	 * @member {array} [places]
	 */
	constructor() {}

	/**
	 * Defines the metadata of Places
	 *
	 * @returns {object} metadata of Places
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "Places",
			type: {
				name: "Composite",
				className: "Places",
				modelProperties: {
					total: {
						required: false,
						serializedName: "total",
						type: {
							name: "Number",
						},
					},
					places: {
						required: false,
						serializedName: "places",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "PlaceElementType",
								type: {
									name: "Composite",
									className: "Place",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = Places;
