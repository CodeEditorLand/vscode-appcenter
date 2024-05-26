/**
 * Class representing a Failure.
 */
class Failure {
	/**
	 * Create a Failure.
	 * @member {string} message
	 */
	constructor() {}

	/**
	 * Defines the metadata of Failure
	 *
	 * @returns {object} metadata of Failure
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "Failure",
			type: {
				name: "Composite",
				className: "Failure",
				modelProperties: {
					message: {
						required: true,
						serializedName: "message",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = Failure;
