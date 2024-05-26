/**
 * Queue configured in build definition
 *
 */
class BuildAgentQueueResponse {
	/**
	 * Create a BuildAgentQueueResponse.
	 * @member {string} [buildDefinition] Name of the build definition
	 * @member {string} [name] Name of the queue
	 */
	constructor() {}

	/**
	 * Defines the metadata of BuildAgentQueueResponse
	 *
	 * @returns {object} metadata of BuildAgentQueueResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "BuildAgentQueueResponse",
			type: {
				name: "Composite",
				className: "BuildAgentQueueResponse",
				modelProperties: {
					buildDefinition: {
						required: false,
						serializedName: "buildDefinition",
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
				},
			},
		};
	}
}

module.exports = BuildAgentQueueResponse;
