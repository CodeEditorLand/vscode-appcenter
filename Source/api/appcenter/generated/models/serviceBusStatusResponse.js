const models = require("./index");

/**
 * Class representing a ServiceBusStatusResponse.
 */
class ServiceBusStatusResponse {
	/**
	 * Create a ServiceBusStatusResponse.
	 * @member {string} status
	 * @member {array} [subscriptions]
	 */
	constructor() {}

	/**
	 * Defines the metadata of ServiceBusStatusResponse
	 *
	 * @returns {object} metadata of ServiceBusStatusResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ServiceBusStatusResponse",
			type: {
				name: "Composite",
				className: "ServiceBusStatusResponse",
				modelProperties: {
					status: {
						required: true,
						serializedName: "status",
						type: {
							name: "String",
						},
					},
					subscriptions: {
						required: false,
						serializedName: "subscriptions",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"SubscriptionMetricsElementType",
								type: {
									name: "Composite",
									className: "SubscriptionMetrics",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = ServiceBusStatusResponse;
