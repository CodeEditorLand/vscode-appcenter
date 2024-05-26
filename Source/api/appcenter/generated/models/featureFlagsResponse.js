/**
 * Class representing a FeatureFlagsResponse.
 */
class FeatureFlagsResponse {
	/**
	 * Create a FeatureFlagsResponse.
	 * @member {array} featureFlags
	 */
	constructor() {}

	/**
	 * Defines the metadata of FeatureFlagsResponse
	 *
	 * @returns {object} metadata of FeatureFlagsResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "FeatureFlagsResponse",
			type: {
				name: "Composite",
				className: "FeatureFlagsResponse",
				modelProperties: {
					featureFlags: {
						required: true,
						serializedName: "feature_flags",
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

module.exports = FeatureFlagsResponse;
