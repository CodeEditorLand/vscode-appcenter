const models = require("./index");

/**
 * List of export configurations
 *
 */
class ExportConfigurationListResult {
	/**
	 * Create a ExportConfigurationListResult.
	 * @member {array} values
	 * @member {number} [total] the total count of exports
	 * @member {string} [nextLink]
	 */
	constructor() {}

	/**
	 * Defines the metadata of ExportConfigurationListResult
	 *
	 * @returns {object} metadata of ExportConfigurationListResult
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ExportConfigurationListResult",
			type: {
				name: "Composite",
				className: "ExportConfigurationListResult",
				modelProperties: {
					values: {
						required: true,
						serializedName: "values",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"ExportConfigurationResultElementType",
								type: {
									name: "Composite",
									className: "ExportConfigurationResult",
								},
							},
						},
					},
					total: {
						required: false,
						serializedName: "total",
						type: {
							name: "Number",
						},
					},
					nextLink: {
						required: false,
						serializedName: "nextLink",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = ExportConfigurationListResult;
