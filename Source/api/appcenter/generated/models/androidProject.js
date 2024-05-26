const models = require("./index");

/**
 * Class representing a AndroidProject.
 */
class AndroidProject {
	/**
	 * Create a AndroidProject.
	 * @member {array} androidModules Android Gradle modules
	 * @member {string} [gradleWrapperPath] The path of the Gradle wrapper
	 */
	constructor() {}

	/**
	 * Defines the metadata of AndroidProject
	 *
	 * @returns {object} metadata of AndroidProject
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AndroidProject",
			type: {
				name: "Composite",
				className: "AndroidProject",
				modelProperties: {
					androidModules: {
						required: true,
						serializedName: "androidModules",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "AndroidModuleElementType",
								type: {
									name: "Composite",
									className: "AndroidModule",
								},
							},
						},
					},
					gradleWrapperPath: {
						required: false,
						serializedName: "gradleWrapperPath",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = AndroidProject;
