/**
 * Class representing a DateTimePercentages.
 */
class DateTimePercentages {
	/**
	 * Create a DateTimePercentages.
	 * @member {string} [datetime] the ISO 8601 datetime
	 * @member {number} [percentage] percentage of the object
	 */
	constructor() {}

	/**
	 * Defines the metadata of DateTimePercentages
	 *
	 * @returns {object} metadata of DateTimePercentages
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DateTimePercentages",
			type: {
				name: "Composite",
				className: "DateTimePercentages",
				modelProperties: {
					datetime: {
						required: false,
						serializedName: "datetime",
						type: {
							name: "String",
						},
					},
					percentage: {
						required: false,
						serializedName: "percentage",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = DateTimePercentages;
