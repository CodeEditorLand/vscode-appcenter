/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

const models = require("./index");

/**
 * Class representing a FilterVersionsContainer.
 */
class FilterVersionsContainer {
	/**
	 * Create a FilterVersionsContainer.
	 * @member {array} [versions]
	 */
	constructor() {}

	/**
	 * Defines the metadata of FilterVersionsContainer
	 *
	 * @returns {object} metadata of FilterVersionsContainer
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "FilterVersionsContainer",
			type: {
				name: "Composite",
				className: "FilterVersionsContainer",
				modelProperties: {
					versions: {
						required: false,
						serializedName: "versions",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"FilterVersionsContainerVersionsItemElementType",
								type: {
									name: "Composite",
									className:
										"FilterVersionsContainerVersionsItem",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = FilterVersionsContainer;
