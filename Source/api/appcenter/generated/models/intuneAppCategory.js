/**
 * Class representing a IntuneAppCategory.
 */
class IntuneAppCategory {
	/**
	 * Create a IntuneAppCategory.
	 * @member {string} [name] display name for the app category
	 */
	constructor() {}

	/**
	 * Defines the metadata of IntuneAppCategory
	 *
	 * @returns {object} metadata of IntuneAppCategory
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "IntuneAppCategory",
			type: {
				name: "Composite",
				className: "IntuneAppCategory",
				modelProperties: {
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = IntuneAppCategory;
