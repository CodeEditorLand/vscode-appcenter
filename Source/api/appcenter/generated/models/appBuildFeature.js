/**
 * supported feature
 *
 */
class AppBuildFeature {
	/**
	 * Create a AppBuildFeature.
	 * @member {string} [name]
	 * @member {boolean} [value]
	 */
	constructor() {}

	/**
	 * Defines the metadata of AppBuildFeature
	 *
	 * @returns {object} metadata of AppBuildFeature
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AppBuildFeature",
			type: {
				name: "Composite",
				className: "AppBuildFeature",
				modelProperties: {
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					value: {
						required: false,
						serializedName: "value",
						type: {
							name: "Boolean",
						},
					},
				},
			},
		};
	}
}

module.exports = AppBuildFeature;
