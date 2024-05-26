/**
 * Class representing a BuildLog.
 */
class BuildLog {
	/**
	 * Create a BuildLog.
	 * @member {array} [value]
	 */
	constructor() {}

	/**
	 * Defines the metadata of BuildLog
	 *
	 * @returns {object} metadata of BuildLog
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "BuildLog",
			type: {
				name: "Composite",
				className: "BuildLog",
				modelProperties: {
					value: {
						required: false,
						serializedName: "value",
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

module.exports = BuildLog;
