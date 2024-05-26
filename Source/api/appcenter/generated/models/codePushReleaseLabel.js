/**
 * Class representing a CodePushReleaseLabel.
 */
class CodePushReleaseLabel {
	/**
	 * Create a CodePushReleaseLabel.
	 * @member {string} [label]
	 */
	constructor() {}

	/**
	 * Defines the metadata of CodePushReleaseLabel
	 *
	 * @returns {object} metadata of CodePushReleaseLabel
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CodePushReleaseLabel",
			type: {
				name: "Composite",
				className: "CodePushReleaseLabel",
				modelProperties: {
					label: {
						required: false,
						serializedName: "label",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = CodePushReleaseLabel;
