/**
 * The versioning configuration for artifacts built for this branch
 *
 */
class BranchConfigurationArtifactVersioning {
	/**
	 * Create a BranchConfigurationArtifactVersioning.
	 * @member {string} [buildNumberFormat] Possible values include: 'buildId',
	 * 'timestamp'
	 */
	constructor() {}

	/**
	 * Defines the metadata of BranchConfigurationArtifactVersioning
	 *
	 * @returns {object} metadata of BranchConfigurationArtifactVersioning
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "BranchConfigurationArtifactVersioning",
			type: {
				name: "Composite",
				className: "BranchConfigurationArtifactVersioning",
				modelProperties: {
					buildNumberFormat: {
						required: false,
						serializedName: "buildNumberFormat",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = BranchConfigurationArtifactVersioning;
