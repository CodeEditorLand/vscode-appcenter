/**
 * Class representing a TestCloudProjectFrameworkProperties.
 */
class TestCloudProjectFrameworkProperties {
	/**
	 * Create a TestCloudProjectFrameworkProperties.
	 * @member {array} [configurations]
	 */
	constructor() {}

	/**
	 * Defines the metadata of TestCloudProjectFrameworkProperties
	 *
	 * @returns {object} metadata of TestCloudProjectFrameworkProperties
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "TestCloudProjectFrameworkProperties",
			type: {
				name: "Composite",
				className: "TestCloudProjectFrameworkProperties",
				modelProperties: {
					configurations: {
						required: false,
						serializedName: "configurations",
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

module.exports = TestCloudProjectFrameworkProperties;
