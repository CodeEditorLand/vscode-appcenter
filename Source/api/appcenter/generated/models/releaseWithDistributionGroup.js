const models = require("./index");

/**
 * Class representing a ReleaseWithDistributionGroup.
 * @extends models['Release']
 */
class ReleaseWithDistributionGroup extends models["Release"] {
	/**
	 * Create a ReleaseWithDistributionGroup.
	 * @member {string} [distributionGroup] Distribution group Id.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of ReleaseWithDistributionGroup
	 *
	 * @returns {object} metadata of ReleaseWithDistributionGroup
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ReleaseWithDistributionGroup",
			type: {
				name: "Composite",
				className: "ReleaseWithDistributionGroup",
				modelProperties: {
					release: {
						required: true,
						serializedName: "release",
						type: {
							name: "String",
						},
					},
					distributionGroup: {
						required: false,
						serializedName: "distribution_group",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = ReleaseWithDistributionGroup;
