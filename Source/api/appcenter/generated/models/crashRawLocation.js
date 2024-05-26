/**
 * Location for downloading crash raw
 *
 */
class CrashRawLocation {
	/**
	 * Create a CrashRawLocation.
	 * @member {string} uri
	 */
	constructor() {}

	/**
	 * Defines the metadata of CrashRawLocation
	 *
	 * @returns {object} metadata of CrashRawLocation
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CrashRawLocation",
			type: {
				name: "Composite",
				className: "CrashRawLocation",
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

module.exports = CrashRawLocation;
