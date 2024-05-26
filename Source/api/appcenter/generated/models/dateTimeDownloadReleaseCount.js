/**
 * Class representing a DateTimeDownloadReleaseCount.
 */
class DateTimeDownloadReleaseCount {
	/**
	 * Create a DateTimeDownloadReleaseCount.
	 * @member {string} [datetime] the ISO 8601 datetime
	 * @member {number} [total]
	 * @member {number} [unique]
	 */
	constructor() {}

	/**
	 * Defines the metadata of DateTimeDownloadReleaseCount
	 *
	 * @returns {object} metadata of DateTimeDownloadReleaseCount
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DateTimeDownloadReleaseCount",
			type: {
				name: "Composite",
				className: "DateTimeDownloadReleaseCount",
				modelProperties: {
					datetime: {
						required: false,
						serializedName: "datetime",
						type: {
							name: "String",
						},
					},
					total: {
						required: false,
						serializedName: "total",
						type: {
							name: "Number",
						},
					},
					unique: {
						required: false,
						serializedName: "unique",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = DateTimeDownloadReleaseCount;
