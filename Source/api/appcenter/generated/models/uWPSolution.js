/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

/**
 * Class representing a UWPSolution.
 */
class UWPSolution {
	/**
	 * Create a UWPSolution.
	 * @member {string} path The path to the UWP solution
	 * @member {array} configurations The possible configurations detected for
	 * the UWP solution
	 */
	constructor() {}

	/**
	 * Defines the metadata of UWPSolution
	 *
	 * @returns {object} metadata of UWPSolution
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "UWPSolution",
			type: {
				name: "Composite",
				className: "UWPSolution",
				modelProperties: {
					path: {
						required: true,
						serializedName: "path",
						type: {
							name: "String",
						},
					},
					configurations: {
						required: true,
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

module.exports = UWPSolution;
