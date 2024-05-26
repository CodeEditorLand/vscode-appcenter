/**
 * Class representing a IntuneAppCategoryResponse.
 */
class IntuneAppCategoryResponse {
	/**
	 * Create a IntuneAppCategoryResponse.
	 * @member {string} [name] display name for the app category
	 * @member {string} [id] ID for the category.
	 */
	constructor() {}

	/**
	 * Defines the metadata of IntuneAppCategoryResponse
	 *
	 * @returns {object} metadata of IntuneAppCategoryResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "IntuneAppCategoryResponse",
			type: {
				name: "Composite",
				className: "IntuneAppCategoryResponse",
				modelProperties: {
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					id: {
						required: false,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = IntuneAppCategoryResponse;
