/**
 * CPU data for device
 *
 */
class DeviceCpu {
	/**
	 * Create a DeviceCpu.
	 * @member {string} [frequency]
	 * @member {string} [core]
	 */
	constructor() {}

	/**
	 * Defines the metadata of DeviceCpu
	 *
	 * @returns {object} metadata of DeviceCpu
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DeviceCpu",
			type: {
				name: "Composite",
				className: "DeviceCpu",
				modelProperties: {
					frequency: {
						required: false,
						serializedName: "frequency",
						type: {
							name: "String",
						},
					},
					core: {
						required: false,
						serializedName: "core",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = DeviceCpu;
