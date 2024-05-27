/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a PerformanceReportVideoVideoMetadataEventsItem.
 */
class PerformanceReportVideoVideoMetadataEventsItem {
  /**
   * Create a PerformanceReportVideoVideoMetadataEventsItem.
   * @member {string} [id]
   * @member {number} [millis]
   * @member {string} [name]
   * @member {string} [type]
   */
  constructor() {
  }

  /**
   * Defines the metadata of PerformanceReportVideoVideoMetadataEventsItem
   *
   * @returns {object} metadata of PerformanceReportVideoVideoMetadataEventsItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PerformanceReport_video_video_metadata_eventsItem',
      type: {
        name: 'Composite',
        className: 'PerformanceReportVideoVideoMetadataEventsItem',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          millis: {
            required: false,
            serializedName: 'millis',
            type: {
              name: 'Number'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PerformanceReportVideoVideoMetadataEventsItem;
