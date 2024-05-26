/**
 * Class representing a CreateStoreSecretResponse.
 */
class CreateStoreSecretResponse {
	/**
	 * Create a CreateStoreSecretResponse.
	 * @member {string} [secretId] the secret id for store secret
	 */
	constructor() {}

	/**
	 * Defines the metadata of CreateStoreSecretResponse
	 *
	 * @returns {object} metadata of CreateStoreSecretResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CreateStoreSecretResponse",
			type: {
				name: "Composite",
				className: "CreateStoreSecretResponse",
				modelProperties: {
					secretId: {
						required: false,
						serializedName: "secret_id",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = CreateStoreSecretResponse;
