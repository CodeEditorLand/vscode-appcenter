/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Class representing a LogContainer.
 */
class LogContainer {
  /**
   * Create a LogContainer.
   * @member {boolean} [exceededMaxLimit] indicates if the number of available
   * logs are more than the max allowed return limit(100).
   * @member {date} [lastReceivedLogTimestamp] the timestamp of the last log
   * received. This value can be used as the start time parameter in the
   * consecutive API call.
   * @member {array} logs the list of logs
   */
  constructor() {
  }

  /**
   * Defines the metadata of LogContainer
   *
   * @returns {object} metadata of LogContainer
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LogContainer',
      type: {
        name: 'Composite',
        className: 'LogContainer',
        modelProperties: {
          exceededMaxLimit: {
            required: false,
            serializedName: 'exceeded_max_limit',
            type: {
              name: 'Boolean'
            }
          },
          lastReceivedLogTimestamp: {
            required: false,
            serializedName: 'last_received_log_timestamp',
            type: {
              name: 'DateTime'
            }
          },
          logs: {
            required: true,
            serializedName: 'logs',
            constraints: {
              MinItems: 0
            },
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'LogElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: 'type',
                      clientName: 'type'
                    },
                    uberParent: 'Log',
                    className: 'Log'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = LogContainer;
