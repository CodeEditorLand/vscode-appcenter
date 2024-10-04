/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

/**
 * Class representing a CrashOverall.
 */
class CrashOverall {
	/**
	 * Create a CrashOverall.
	 * @member {number} [crashCount]
	 * @member {number} [deviceCount]
	 */
	constructor() {}

	/**
	 * Defines the metadata of CrashOverall
	 *
	 * @returns {object} metadata of CrashOverall
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CrashOverall",
			type: {
				name: "Composite",
				className: "CrashOverall",
				modelProperties: {
					crashCount: {
						required: false,
						serializedName: "crash_count",
						type: {
							name: "Number",
						},
					},
					deviceCount: {
						required: false,
						serializedName: "device_count",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = CrashOverall;
