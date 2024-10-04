/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

/**
 * Class representing a GrantAdminRoleRequest.
 */
class GrantAdminRoleRequest {
	/**
	 * Create a GrantAdminRoleRequest.
	 * @member {string} adminRole The new admin_role. Possible values include:
	 * 'superAdmin', 'admin', 'devOps', 'customerSupport', 'notAdmin'
	 */
	constructor() {}

	/**
	 * Defines the metadata of GrantAdminRoleRequest
	 *
	 * @returns {object} metadata of GrantAdminRoleRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "GrantAdminRoleRequest",
			type: {
				name: "Composite",
				className: "GrantAdminRoleRequest",
				modelProperties: {
					adminRole: {
						required: true,
						serializedName: "admin_role",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = GrantAdminRoleRequest;
