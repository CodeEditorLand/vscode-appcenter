/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

/**
 * The Mono version
 *
 */
class MonoVersion {
	/**
	 * Create a MonoVersion.
	 * @member {string} [name] The version name
	 * @member {boolean} [current] If the Mono is latest stable
	 */
	constructor() {}

	/**
	 * Defines the metadata of MonoVersion
	 *
	 * @returns {object} metadata of MonoVersion
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "MonoVersion",
			type: {
				name: "Composite",
				className: "MonoVersion",
				modelProperties: {
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					current: {
						required: false,
						serializedName: "current",
						type: {
							name: "Boolean",
						},
					},
				},
			},
		};
	}
}

module.exports = MonoVersion;
