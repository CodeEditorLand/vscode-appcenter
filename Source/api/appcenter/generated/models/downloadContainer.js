/**
 * A download reference
 *
 */
class DownloadContainer {
	/**
	 * Create a DownloadContainer.
	 * @member {string} uri Download URI
	 */
	constructor() {}

	/**
	 * Defines the metadata of DownloadContainer
	 *
	 * @returns {object} metadata of DownloadContainer
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DownloadContainer",
			type: {
				name: "Composite",
				className: "DownloadContainer",
				modelProperties: {
					uri: {
						required: true,
						serializedName: "uri",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = DownloadContainer;
