/**
 * Class representing a ErrorGroupModel.
 */
class ErrorGroupModel {
	/**
	 * Create a ErrorGroupModel.
	 * @member {string} [modelName] model name
	 * @member {string} [modelCode] model code
	 * @member {number} [errorCount] count of errors in a model
	 */
	constructor() {}

	/**
	 * Defines the metadata of ErrorGroupModel
	 *
	 * @returns {object} metadata of ErrorGroupModel
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ErrorGroupModel",
			type: {
				name: "Composite",
				className: "ErrorGroupModel",
				modelProperties: {
					modelName: {
						required: false,
						serializedName: "modelName",
						type: {
							name: "String",
						},
					},
					modelCode: {
						required: false,
						serializedName: "modelCode",
						type: {
							name: "String",
						},
					},
					errorCount: {
						required: false,
						serializedName: "errorCount",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = ErrorGroupModel;
