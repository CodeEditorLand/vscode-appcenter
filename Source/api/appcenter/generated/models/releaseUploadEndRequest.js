/**
 * A request containing information pertaining to complete a release upload
 * process
 *
 */
class ReleaseUploadEndRequest {
	/**
	 * Create a ReleaseUploadEndRequest.
	 * @member {string} status The desired operation for the upload. Possible
	 * values include: 'committed', 'aborted'
	 */
	constructor() {}

	/**
	 * Defines the metadata of ReleaseUploadEndRequest
	 *
	 * @returns {object} metadata of ReleaseUploadEndRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ReleaseUploadEndRequest",
			type: {
				name: "Composite",
				className: "ReleaseUploadEndRequest",
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

module.exports = ReleaseUploadEndRequest;
