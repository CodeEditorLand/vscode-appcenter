/**
 * A request containing information pertaining to completing a symbol upload
 * process
 *
 */
class SymbolUploadEndRequest {
	/**
	 * Create a SymbolUploadEndRequest.
	 * @member {string} status The desired operation for the symbol upload.
	 * Possible values include: 'committed', 'aborted'
	 */
	constructor() {}

	/**
	 * Defines the metadata of SymbolUploadEndRequest
	 *
	 * @returns {object} metadata of SymbolUploadEndRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "SymbolUploadEndRequest",
			type: {
				name: "Composite",
				className: "SymbolUploadEndRequest",
				modelProperties: {
					status: {
						required: true,
						serializedName: "status",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = SymbolUploadEndRequest;
