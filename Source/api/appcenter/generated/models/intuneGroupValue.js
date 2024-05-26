/**
 * Class representing a IntuneGroupValue.
 */
class IntuneGroupValue {
	/**
	 * Create a IntuneGroupValue.
	 * @member {string} [id] the id of the Group
	 * @member {string} [displayName] the display name of the group
	 */
	constructor() {}

	/**
	 * Defines the metadata of IntuneGroupValue
	 *
	 * @returns {object} metadata of IntuneGroupValue
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "IntuneGroupValue",
			type: {
				name: "Composite",
				className: "IntuneGroupValue",
				modelProperties: {
					id: {
						required: false,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					displayName: {
						required: false,
						serializedName: "displayName",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = IntuneGroupValue;
