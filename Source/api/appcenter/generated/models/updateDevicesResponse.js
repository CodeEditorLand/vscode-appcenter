/**
 * URL that can be used to check the status of the update devices operation and
 * the updated profiles.
 *
 */
class UpdateDevicesResponse {
	/**
	 * Create a UpdateDevicesResponse.
	 * @member {string} profilesZipBase64 The updated provisioning profiles
	 * base64 encoded.
	 * @member {string} statusUrl URL that can be used to check the status of the
	 * update devices operation.
	 */
	constructor() {}

	/**
	 * Defines the metadata of UpdateDevicesResponse
	 *
	 * @returns {object} metadata of UpdateDevicesResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "UpdateDevicesResponse",
			type: {
				name: "Composite",
				className: "UpdateDevicesResponse",
				modelProperties: {
					profilesZipBase64: {
						required: true,
						serializedName: "profiles_zip_base64",
						type: {
							name: "String",
						},
					},
					statusUrl: {
						required: true,
						serializedName: "status_url",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = UpdateDevicesResponse;
