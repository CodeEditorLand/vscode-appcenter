/**
 * Class representing a IntuneTargetAudienceResponse.
 */
class IntuneTargetAudienceResponse {
	/**
	 * Create a IntuneTargetAudienceResponse.
	 * @member {string} [name] display name for the target audience/group
	 * @member {string} [id] ID for the target audience/group.
	 */
	constructor() {}

	/**
	 * Defines the metadata of IntuneTargetAudienceResponse
	 *
	 * @returns {object} metadata of IntuneTargetAudienceResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "IntuneTargetAudienceResponse",
			type: {
				name: "Composite",
				className: "IntuneTargetAudienceResponse",
				modelProperties: {
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					id: {
						required: false,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = IntuneTargetAudienceResponse;
