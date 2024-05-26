const models = require("./index");

/**
 * Class representing a PerformanceReportVideo.
 */
class PerformanceReportVideo {
	/**
	 * Create a PerformanceReportVideo.
	 * @member {object} videoMetadata
	 * @member {array} [videoMetadata.events]
	 * @member {string} videoUrl
	 */
	constructor() {}

	/**
	 * Defines the metadata of PerformanceReportVideo
	 *
	 * @returns {object} metadata of PerformanceReportVideo
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "PerformanceReport_video",
			type: {
				name: "Composite",
				className: "PerformanceReportVideo",
				modelProperties: {
					videoMetadata: {
						required: true,
						serializedName: "video_metadata",
						type: {
							name: "Composite",
							className: "PerformanceReportVideoVideoMetadata",
						},
					},
					videoUrl: {
						required: true,
						serializedName: "video_url",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = PerformanceReportVideo;
