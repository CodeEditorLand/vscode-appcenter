/**
 * List of notification Ids
 *
 */
class NotificationIdList {
	/**
	 * Create a NotificationIdList.
	 * @member {array} values List of notification Ids.
	 */
	constructor() {}

	/**
	 * Defines the metadata of NotificationIdList
	 *
	 * @returns {object} metadata of NotificationIdList
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "NotificationIdList",
			type: {
				name: "Composite",
				className: "NotificationIdList",
				modelProperties: {
					values: {
						required: true,
						serializedName: "values",
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

module.exports = NotificationIdList;
