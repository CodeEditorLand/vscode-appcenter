/**
 * @summary Name of the test series
 *
 */
class TestSeriesName {
	/**
	 * Create a TestSeriesName.
	 * @member {string} name Name of the new test series
	 */
	constructor() {}

	/**
	 * Defines the metadata of TestSeriesName
	 *
	 * @returns {object} metadata of TestSeriesName
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "TestSeriesName",
			type: {
				name: "Composite",
				className: "TestSeriesName",
				modelProperties: {
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

module.exports = TestSeriesName;
