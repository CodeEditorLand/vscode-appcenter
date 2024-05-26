/**
 * Location for downloading symbol
 *
 */
class SymbolLocation {
	/**
	 * Create a SymbolLocation.
	 * @member {string} uri
	 */
	constructor() {}

	/**
	 * Defines the metadata of SymbolLocation
	 *
	 * @returns {object} metadata of SymbolLocation
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "SymbolLocation",
			type: {
				name: "Composite",
				className: "SymbolLocation",
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

module.exports = SymbolLocation;
