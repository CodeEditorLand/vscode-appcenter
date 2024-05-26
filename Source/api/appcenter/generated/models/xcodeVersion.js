/**
 * The Xcode version
 *
 */
class XcodeVersion {
	/**
	 * Create a XcodeVersion.
	 * @member {string} [name] The version name
	 * @member {boolean} [current] If the Xcode is latest stable
	 */
	constructor() {}

	/**
	 * Defines the metadata of XcodeVersion
	 *
	 * @returns {object} metadata of XcodeVersion
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "XcodeVersion",
			type: {
				name: "Composite",
				className: "XcodeVersion",
				modelProperties: {
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					current: {
						required: false,
						serializedName: "current",
						type: {
							name: "Boolean",
						},
					},
				},
			},
		};
	}
}

module.exports = XcodeVersion;
