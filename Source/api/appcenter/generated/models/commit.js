/**
 * Class representing a Commit.
 */
class Commit {
	/**
	 * Create a Commit.
	 * @member {string} [sha] The commit SHA
	 * @member {string} [url] The URL to the commit
	 */
	constructor() {}

	/**
	 * Defines the metadata of Commit
	 *
	 * @returns {object} metadata of Commit
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "Commit",
			type: {
				name: "Composite",
				className: "Commit",
				modelProperties: {
					sha: {
						required: false,
						serializedName: "sha",
						type: {
							name: "String",
						},
					},
					url: {
						required: false,
						serializedName: "url",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = Commit;
