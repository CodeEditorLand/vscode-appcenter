/**
 * A websocket reference
 *
 */
class WebSocketContainer {
	/**
	 * Create a WebSocketContainer.
	 * @member {string} url WebSocket URL
	 */
	constructor() {}

	/**
	 * Defines the metadata of WebSocketContainer
	 *
	 * @returns {object} metadata of WebSocketContainer
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "WebSocketContainer",
			type: {
				name: "Composite",
				className: "WebSocketContainer",
				modelProperties: {
					url: {
						required: true,
						serializedName: "url",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = WebSocketContainer;
