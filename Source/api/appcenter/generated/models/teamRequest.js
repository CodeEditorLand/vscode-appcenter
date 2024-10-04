/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

/**
 * Class representing a TeamRequest.
 */
class TeamRequest {
	/**
	 * Create a TeamRequest.
	 * @member {string} displayName The display name of the team
	 * @member {string} [name] The name of the team
	 * @member {string} [description] The description of the team
	 */
	constructor() {}

	/**
	 * Defines the metadata of TeamRequest
	 *
	 * @returns {object} metadata of TeamRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "TeamRequest",
			type: {
				name: "Composite",
				className: "TeamRequest",
				modelProperties: {
					displayName: {
						required: true,
						serializedName: "display_name",
						type: {
							name: "String",
						},
					},
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					description: {
						required: false,
						serializedName: "description",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = TeamRequest;
