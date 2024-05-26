/**
 * Class representing a DistributionGroupUserRequest.
 */
class DistributionGroupUserRequest {
	/**
	 * Create a DistributionGroupUserRequest.
	 * @member {array} [userEmails] The list of emails of the users
	 */
	constructor() {}

	/**
	 * Defines the metadata of DistributionGroupUserRequest
	 *
	 * @returns {object} metadata of DistributionGroupUserRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DistributionGroupUserRequest",
			type: {
				name: "Composite",
				className: "DistributionGroupUserRequest",
				modelProperties: {
					userEmails: {
						required: false,
						serializedName: "user_emails",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "StringElementType",
								type: {
									name: "String",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = DistributionGroupUserRequest;
