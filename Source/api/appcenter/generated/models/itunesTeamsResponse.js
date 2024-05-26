/**
 * Itunes teams details .
 *
 */
class ItunesTeamsResponse {
	/**
	 * Create a ItunesTeamsResponse.
	 * @member {string} [teamId] Itunes team id.
	 * @member {string} [teamName] Itunes Team Name
	 */
	constructor() {}

	/**
	 * Defines the metadata of ItunesTeamsResponse
	 *
	 * @returns {object} metadata of ItunesTeamsResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ItunesTeamsResponse",
			type: {
				name: "Composite",
				className: "ItunesTeamsResponse",
				modelProperties: {
					teamId: {
						required: false,
						serializedName: "teamId",
						type: {
							name: "String",
						},
					},
					teamName: {
						required: false,
						serializedName: "teamName",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = ItunesTeamsResponse;
