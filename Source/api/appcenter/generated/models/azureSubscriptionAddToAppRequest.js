/**
 * Class representing a AzureSubscriptionAddToAppRequest.
 */
class AzureSubscriptionAddToAppRequest {
	/**
	 * Create a AzureSubscriptionAddToAppRequest.
	 * @member {string} subscriptionId The azure subscription id
	 */
	constructor() {}

	/**
	 * Defines the metadata of AzureSubscriptionAddToAppRequest
	 *
	 * @returns {object} metadata of AzureSubscriptionAddToAppRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AzureSubscriptionAddToAppRequest",
			type: {
				name: "Composite",
				className: "AzureSubscriptionAddToAppRequest",
				modelProperties: {
					subscriptionId: {
						required: true,
						serializedName: "subscription_id",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = AzureSubscriptionAddToAppRequest;
