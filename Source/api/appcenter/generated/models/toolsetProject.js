/**
 * Abstract platform project
 *
 */
class ToolsetProject {
	/**
	 * Create a ToolsetProject.
	 * @member {string} [name]
	 * @member {string} [path]
	 */
	constructor() {}

	/**
	 * Defines the metadata of ToolsetProject
	 *
	 * @returns {object} metadata of ToolsetProject
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ToolsetProject",
			type: {
				name: "Composite",
				className: "ToolsetProject",
				modelProperties: {
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					path: {
						required: false,
						serializedName: "path",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = ToolsetProject;
