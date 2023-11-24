/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

const models = require("./index");

/**
 * Class representing a OrganizationResponseInternal.
 * @extends models['OrganizationResponse']
 */
class OrganizationResponseInternal extends models["OrganizationResponse"] {
	/**
	 * Create a OrganizationResponseInternal.
	 * @member {array} [featureFlags] The feature flags that are enabled for this
	 * organization
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of OrganizationResponseInternal
	 *
	 * @returns {object} metadata of OrganizationResponseInternal
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "OrganizationResponseInternal",
			type: {
				name: "Composite",
				className: "OrganizationResponseInternal",
				modelProperties: {
					id: {
						required: true,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					displayName: {
						required: true,
						serializedName: "display_name",
						type: {
							name: "String",
						},
					},
					name: {
						required: true,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					origin: {
						required: true,
						serializedName: "origin",
						type: {
							name: "String",
						},
					},
					createdAt: {
						required: true,
						serializedName: "created_at",
						type: {
							name: "String",
						},
					},
					updatedAt: {
						required: true,
						serializedName: "updated_at",
						type: {
							name: "String",
						},
					},
					featureFlags: {
						required: false,
						serializedName: "feature_flags",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "StringElementType",
								type: {
									name: "String",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = OrganizationResponseInternal;
