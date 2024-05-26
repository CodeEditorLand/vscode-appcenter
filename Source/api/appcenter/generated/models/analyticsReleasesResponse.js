const models = require("./index");

/**
 * Class representing a AnalyticsReleasesResponse.
 */
class AnalyticsReleasesResponse {
	/**
	 * Create a AnalyticsReleasesResponse.
	 * @member {array} [releases]
	 */
	constructor() {}

	/**
	 * Defines the metadata of AnalyticsReleasesResponse
	 *
	 * @returns {object} metadata of AnalyticsReleasesResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AnalyticsReleasesResponse",
			type: {
				name: "Composite",
				className: "AnalyticsReleasesResponse",
				modelProperties: {
					releases: {
						required: false,
						serializedName: "releases",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"AnalyticsReleasesParameterElementType",
								type: {
									name: "Composite",
									className: "AnalyticsReleasesParameter",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = AnalyticsReleasesResponse;
