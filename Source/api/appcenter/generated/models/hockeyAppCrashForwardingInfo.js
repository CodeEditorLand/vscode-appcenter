/**
 * Class representing a HockeyAppCrashForwardingInfo.
 */
class HockeyAppCrashForwardingInfo {
	/**
	 * Create a HockeyAppCrashForwardingInfo.
	 * @member {boolean} forwardingEnabled
	 */
	constructor() {}

	/**
	 * Defines the metadata of HockeyAppCrashForwardingInfo
	 *
	 * @returns {object} metadata of HockeyAppCrashForwardingInfo
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "HockeyAppCrashForwardingInfo",
			type: {
				name: "Composite",
				className: "HockeyAppCrashForwardingInfo",
				modelProperties: {
					forwardingEnabled: {
						required: true,
						serializedName: "forwarding_enabled",
						type: {
							name: "Boolean",
						},
					},
				},
			},
		};
	}
}

module.exports = HockeyAppCrashForwardingInfo;
