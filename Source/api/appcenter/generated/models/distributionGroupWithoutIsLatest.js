/**
 * Class representing a DistributionGroupWithoutIsLatest.
 */
class DistributionGroupWithoutIsLatest {
	/**
	 * Create a DistributionGroupWithoutIsLatest.
	 * @member {string} [id] ID identifying a unique distribution group.
	 * @member {string} [name] A name identifying a unique distribution group.
	 */
	constructor() {}

	/**
	 * Defines the metadata of DistributionGroupWithoutIsLatest
	 *
	 * @returns {object} metadata of DistributionGroupWithoutIsLatest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DistributionGroupWithoutIsLatest",
			type: {
				name: "Composite",
				className: "DistributionGroupWithoutIsLatest",
				modelProperties: {
					id: {
						required: false,
						serializedName: "id",
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

module.exports = DistributionGroupWithoutIsLatest;
