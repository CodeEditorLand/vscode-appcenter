/**
 * Class representing a AzureSubscriptionUpdateBillableRequest.
 */
class AzureSubscriptionUpdateBillableRequest {
	/**
	 * Create a AzureSubscriptionUpdateBillableRequest.
	 * @member {boolean} isBillable Billable status of the subscription
	 */
	constructor() {}

	/**
	 * Defines the metadata of AzureSubscriptionUpdateBillableRequest
	 *
	 * @returns {object} metadata of AzureSubscriptionUpdateBillableRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AzureSubscriptionUpdateBillableRequest",
			type: {
				name: "Composite",
				className: "AzureSubscriptionUpdateBillableRequest",
				modelProperties: {
					isBillable: {
						required: true,
						serializedName: "is_billable",
						type: {
							name: "Boolean",
						},
					},
				},
			},
		};
	}
}

module.exports = AzureSubscriptionUpdateBillableRequest;
