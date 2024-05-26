/**
 * Class representing a TeamAppUpdateRequest.
 */
class TeamAppUpdateRequest {
	/**
	 * Create a TeamAppUpdateRequest.
	 * @member {array} permissions The permissions all members of the team have
	 * on the app
	 */
	constructor() {}

	/**
	 * Defines the metadata of TeamAppUpdateRequest
	 *
	 * @returns {object} metadata of TeamAppUpdateRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "TeamAppUpdateRequest",
			type: {
				name: "Composite",
				className: "TeamAppUpdateRequest",
				modelProperties: {
					permissions: {
						required: true,
						serializedName: "permissions",
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

module.exports = TeamAppUpdateRequest;
