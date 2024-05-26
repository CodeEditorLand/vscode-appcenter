const models = require("./index");

/**
 * Class representing a EventCountPerSession.
 */
class EventCountPerSession {
	/**
	 * Create a EventCountPerSession.
	 * @member {number} [avgCountPerSession]
	 * @member {number} [previousAvgCountPerSession]
	 * @member {array} [countPerSession]
	 */
	constructor() {}

	/**
	 * Defines the metadata of EventCountPerSession
	 *
	 * @returns {object} metadata of EventCountPerSession
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "EventCountPerSession",
			type: {
				name: "Composite",
				className: "EventCountPerSession",
				modelProperties: {
					avgCountPerSession: {
						required: false,
						serializedName: "avg_count_per_session",
						type: {
							name: "Number",
						},
					},
					previousAvgCountPerSession: {
						required: false,
						serializedName: "previous_avg_count_per_session",
						type: {
							name: "Number",
						},
					},
					countPerSession: {
						required: false,
						serializedName: "count_per_session",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"DateTimeDecimalCountsElementType",
								type: {
									name: "Composite",
									className: "DateTimeDecimalCounts",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = EventCountPerSession;
