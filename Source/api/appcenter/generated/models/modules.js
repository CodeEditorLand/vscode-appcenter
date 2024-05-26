/**
 * Class representing a Modules.
 */
class Modules {
	/**
	 * Create a Modules.
	 * @member {object} [modules]
	 */
	constructor() {}

	/**
	 * Defines the metadata of Modules
	 *
	 * @returns {object} metadata of Modules
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "Modules",
			type: {
				name: "Composite",
				className: "Modules",
				modelProperties: {
					modules: {
						required: false,
						serializedName: "modules",
						type: {
							name: "Dictionary",
							value: {
								required: false,
								serializedName: "ObjectElementType",
								type: {
									name: "Dictionary",
									value: {
										required: false,
										serializedName: "BooleanElementType",
										type: {
											name: "Boolean",
										},
									},
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = Modules;
