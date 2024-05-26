/**
 * Class representing a Status.
 */
class Status {
	/**
	 * Create a Status.
	 * @member {string} status
	 */
	constructor() {}

	/**
	 * Defines the metadata of Status
	 *
	 * @returns {object} metadata of Status
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "Status",
			type: {
				name: "Composite",
				className: "Status",
				modelProperties: {
					status: {
						required: true,
						serializedName: "status",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = Status;
