/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a SuccessResponse.
 */
class SuccessResponse {
  /**
   * Create a SuccessResponse.
   * @member {string} message
   */
  constructor() {
  }

  /**
   * Defines the metadata of SuccessResponse
   *
   * @returns {object} metadata of SuccessResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SuccessResponse',
      type: {
        name: 'Composite',
        className: 'SuccessResponse',
        modelProperties: {
          message: {
            required: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SuccessResponse;
