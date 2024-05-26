/**
 * The source repository
 *
 */
class SourceRepository {
	/**
	 * Create a SourceRepository.
	 * @member {string} [name] The repository name
	 * @member {object} [cloneUrl] URL used to clone the repository
	 */
	constructor() {}

	/**
	 * Defines the metadata of SourceRepository
	 *
	 * @returns {object} metadata of SourceRepository
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "SourceRepository",
			type: {
				name: "Composite",
				className: "SourceRepository",
				modelProperties: {
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					cloneUrl: {
						required: false,
						serializedName: "clone_url",
						type: {
							name: "Object",
						},
					},
				},
			},
		};
	}
}

module.exports = SourceRepository;
