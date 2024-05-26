/**
 * Audience definition.
 *
 */
class AudienceBlobResult {
	/**
	 * Create a AudienceBlobResult.
	 * @member {string} [url] Location of the audience blob.
	 */
	constructor() {}

	/**
	 * Defines the metadata of AudienceBlobResult
	 *
	 * @returns {object} metadata of AudienceBlobResult
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AudienceBlobResult",
			type: {
				name: "Composite",
				className: "AudienceBlobResult",
				modelProperties: {
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

module.exports = AudienceBlobResult;
