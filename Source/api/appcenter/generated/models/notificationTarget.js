/**
 * Generic notification target.
 *
 */
class NotificationTarget {
	/**
	 * Create a NotificationTarget.
	 * @member {string} type Polymorphic Discriminator
	 */
	constructor() {}

	/**
	 * Defines the metadata of NotificationTarget
	 *
	 * @returns {object} metadata of NotificationTarget
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "NotificationTarget",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "NotificationTarget",
				className: "NotificationTarget",
				modelProperties: {
					type: {
						required: true,
						serializedName: "type",
						isPolymorphicDiscriminator: true,
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = NotificationTarget;
