/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Class representing a PerformanceReportVideoVideoMetadata.
 */
class PerformanceReportVideoVideoMetadata {
  /**
   * Create a PerformanceReportVideoVideoMetadata.
   * @member {array} [events]
   */
  constructor() {
  }

  /**
   * Defines the metadata of PerformanceReportVideoVideoMetadata
   *
   * @returns {object} metadata of PerformanceReportVideoVideoMetadata
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PerformanceReport_video_video_metadata',
      type: {
        name: 'Composite',
        className: 'PerformanceReportVideoVideoMetadata',
        modelProperties: {
          events: {
            required: false,
            serializedName: 'events',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PerformanceReportVideoVideoMetadataEventsItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'PerformanceReportVideoVideoMetadataEventsItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PerformanceReportVideoVideoMetadata;
