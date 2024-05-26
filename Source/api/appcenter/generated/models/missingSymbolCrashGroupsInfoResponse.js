/**
 * missing symbol groups
 *
 */
class MissingSymbolCrashGroupsInfoResponse {
	/**
	 * Create a MissingSymbolCrashGroupsInfoResponse.
	 * @member {number} totalCrashCount total number of crashes for all missing
	 * symbol groups
	 */
	constructor() {}

	/**
	 * Defines the metadata of MissingSymbolCrashGroupsInfoResponse
	 *
	 * @returns {object} metadata of MissingSymbolCrashGroupsInfoResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "MissingSymbolCrashGroupsInfoResponse",
			type: {
				name: "Composite",
				className: "MissingSymbolCrashGroupsInfoResponse",
				modelProperties: {
					totalCrashCount: {
						required: true,
						serializedName: "total_crash_count",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = MissingSymbolCrashGroupsInfoResponse;
