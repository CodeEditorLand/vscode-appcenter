const models = require("./index");

/**
 * Class representing a CrashGroupContainer.
 */
class CrashGroupContainer {
	/**
	 * Create a CrashGroupContainer.
	 * @member {array} crashGroups
	 */
	constructor() {}

	/**
	 * Defines the metadata of CrashGroupContainer
	 *
	 * @returns {object} metadata of CrashGroupContainer
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CrashGroupContainer",
			type: {
				name: "Composite",
				className: "CrashGroupContainer",
				modelProperties: {
					crashGroups: {
						required: true,
						serializedName: "crash_groups",
						constraints: {
							MinItems: 1,
						},
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"CrashGroupAndVersionElementType",
								type: {
									name: "Composite",
									className: "CrashGroupAndVersion",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = CrashGroupContainer;
