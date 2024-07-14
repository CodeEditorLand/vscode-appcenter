/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @summary Subscription
  *
 * Subscription information
 *
 */
class Subscription {
  /**
   * Create a Subscription.
   * @member {string} [startsAt] The date the subscription began
   * @member {string} [endsAt] The date the subscription will end or ended
   * @member {number} [daysLeft] The number of days left in the subscription
   * @member {object} [tier]
   * @member {string} [tier.name] The name of the tier
   * @member {boolean} [active] Is the subscription currently active?
   * @member {uuid} [id] Id of the subscription
   */
  constructor() {
  }

  /**
   * Defines the metadata of Subscription
   *
   * @returns {object} metadata of Subscription
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Subscription',
      type: {
        name: 'Composite',
        className: 'Subscription',
        modelProperties: {
          startsAt: {
            required: false,
            serializedName: 'startsAt',
            type: {
              name: 'String'
            }
          },
          endsAt: {
            required: false,
            serializedName: 'endsAt',
            type: {
              name: 'String'
            }
          },
          daysLeft: {
            required: false,
            serializedName: 'daysLeft',
            type: {
              name: 'Number'
            }
          },
          tier: {
            required: false,
            serializedName: 'tier',
            type: {
              name: 'Composite',
              className: 'Tier'
            }
          },
          active: {
            required: false,
            serializedName: 'active',
            type: {
              name: 'Boolean'
            }
          },
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Subscription;
