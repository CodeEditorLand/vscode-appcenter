/**
 * @summary Test Cloud Error Details
 *
 * Details of a failed operation
 *
 */
class TestCloudErrorDetails {
	/**
	 * Create a TestCloudErrorDetails.
	 * @member {string} status Status of the operation
	 * @member {string} message Human-readable message that describes the error
	 */
	constructor() {}

	/**
	 * Defines the metadata of TestCloudErrorDetails
	 *
	 * @returns {object} metadata of TestCloudErrorDetails
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "TestCloudErrorDetails",
			type: {
				name: "Composite",
				className: "TestCloudErrorDetails",
				modelProperties: {
					status: {
						required: true,
						serializedName: "status",
						type: {
							name: "String",
						},
					},
					message: {
						required: true,
						serializedName: "message",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = TestCloudErrorDetails;
