/**
 * List of device property values.
 *
 */
class AudienceDevicePropertyValuesListResult {
	/**
	 * Create a AudienceDevicePropertyValuesListResult.
	 * @member {array} values List of device property values.
	 */
	constructor() {}

	/**
	 * Defines the metadata of AudienceDevicePropertyValuesListResult
	 *
	 * @returns {object} metadata of AudienceDevicePropertyValuesListResult
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AudienceDevicePropertyValuesListResult",
			type: {
				name: "Composite",
				className: "AudienceDevicePropertyValuesListResult",
				modelProperties: {
					values: {
						required: true,
						serializedName: "values",
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

module.exports = AudienceDevicePropertyValuesListResult;
