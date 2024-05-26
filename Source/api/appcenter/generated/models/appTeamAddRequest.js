/**
 * Class representing a AppTeamAddRequest.
 */
class AppTeamAddRequest {
	/**
	 * Create a AppTeamAddRequest.
	 * @member {string} name The name of the app to be added to the team
	 */
	constructor() {}

	/**
	 * Defines the metadata of AppTeamAddRequest
	 *
	 * @returns {object} metadata of AppTeamAddRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AppTeamAddRequest",
			type: {
				name: "Composite",
				className: "AppTeamAddRequest",
				modelProperties: {
					name: {
						required: true,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = AppTeamAddRequest;
