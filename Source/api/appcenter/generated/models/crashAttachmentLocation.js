/**
 * Location for downloading crash attachment
 *
 */
class CrashAttachmentLocation {
	/**
	 * Create a CrashAttachmentLocation.
	 * @member {string} uri
	 */
	constructor() {}

	/**
	 * Defines the metadata of CrashAttachmentLocation
	 *
	 * @returns {object} metadata of CrashAttachmentLocation
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CrashAttachmentLocation",
			type: {
				name: "Composite",
				className: "CrashAttachmentLocation",
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

module.exports = CrashAttachmentLocation;
