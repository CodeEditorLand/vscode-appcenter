/**
 * Class representing a Release.
 */
class Release {
	/**
	 * Create a Release.
	 * @member {string} release Release Id.
	 */
	constructor() {}

	/**
	 * Defines the metadata of Release
	 *
	 * @returns {object} metadata of Release
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "Release",
			type: {
				name: "Composite",
				className: "Release",
				modelProperties: {
					release: {
						required: true,
						serializedName: "release",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = Release;
