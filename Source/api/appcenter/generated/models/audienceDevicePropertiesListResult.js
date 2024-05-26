/**
 * List of device properties.
 *
 */
class AudienceDevicePropertiesListResult {
	/**
	 * Create a AudienceDevicePropertiesListResult.
	 * @member {object} values List of device properties.
	 */
	constructor() {}

	/**
	 * Defines the metadata of AudienceDevicePropertiesListResult
	 *
	 * @returns {object} metadata of AudienceDevicePropertiesListResult
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AudienceDevicePropertiesListResult",
			type: {
				name: "Composite",
				className: "AudienceDevicePropertiesListResult",
				modelProperties: {
					values: {
						required: true,
						serializedName: "values",
						type: {
							name: "Dictionary",
							value: {
								required: false,
								serializedName: "DevicePropertyTypeElementType",
								type: {
									name: "Enum",
									allowedValues: [
										"string",
										"number",
										"boolean",
										"date_time",
									],
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = AudienceDevicePropertiesListResult;
