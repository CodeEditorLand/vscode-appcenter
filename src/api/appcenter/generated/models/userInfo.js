/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a UserInfo.
 */
class UserInfo {
  /**
   * Create a UserInfo.
   * @member {string} [odatacontext] context
   * @member {string} [id] the display name for the category
   * @member {string} [displayName] the display name for the category
   * @member {string} [givenName] the display name for the category
   * @member {string} [jobTitle] the display name for the category
   * @member {string} [mail] the display name for the category
   * @member {string} [userPrincipalName] modified date for category
   */
  constructor() {
  }

  /**
   * Defines the metadata of UserInfo
   *
   * @returns {object} metadata of UserInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UserInfo',
      type: {
        name: 'Composite',
        className: 'UserInfo',
        modelProperties: {
          odatacontext: {
            required: false,
            serializedName: 'odata\\.context',
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          givenName: {
            required: false,
            serializedName: 'givenName',
            type: {
              name: 'String'
            }
          },
          jobTitle: {
            required: false,
            serializedName: 'jobTitle',
            type: {
              name: 'String'
            }
          },
          mail: {
            required: false,
            serializedName: 'mail',
            type: {
              name: 'String'
            }
          },
          userPrincipalName: {
            required: false,
            serializedName: 'userPrincipalName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UserInfo;
