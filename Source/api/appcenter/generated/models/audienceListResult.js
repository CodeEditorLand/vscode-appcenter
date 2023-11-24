/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

const models = require("./index");

/**
 * List of audiences.
 *
 */
class AudienceListResult {
	/**
	 * Create a AudienceListResult.
	 * @member {array} values List of audiences.
	 * @member {string} [nextLink]
	 */
	constructor() {}

	/**
	 * Defines the metadata of AudienceListResult
	 *
	 * @returns {object} metadata of AudienceListResult
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AudienceListResult",
			type: {
				name: "Composite",
				className: "AudienceListResult",
				modelProperties: {
					values: {
						required: true,
						serializedName: "values",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "AudienceSummaryElementType",
								type: {
									name: "Composite",
									className: "AudienceSummary",
								},
							},
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

module.exports = AudienceListResult;
