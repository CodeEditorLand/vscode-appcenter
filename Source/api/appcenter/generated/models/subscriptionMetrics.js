/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

/**
 * Class representing a SubscriptionMetrics.
 */
class SubscriptionMetrics {
	/**
	 * Create a SubscriptionMetrics.
	 * @member {string} name The name of the subsciption (prefixed with the topic
	 * name)
	 * @member {number} messageCount The number of messages in the subscription
	 */
	constructor() {}

	/**
	 * Defines the metadata of SubscriptionMetrics
	 *
	 * @returns {object} metadata of SubscriptionMetrics
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "SubscriptionMetrics",
			type: {
				name: "Composite",
				className: "SubscriptionMetrics",
				modelProperties: {
					name: {
						required: true,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					messageCount: {
						required: true,
						serializedName: "message_count",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = SubscriptionMetrics;
