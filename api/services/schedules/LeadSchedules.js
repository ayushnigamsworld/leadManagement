import * as LeadSqsService from "../queue/sqs/LeadSqsService";
const LeadsQualified = require('../../models/LeadsQualified');

class LeadSchedules {
  constructor() {
  }

  async fetchAndIngestLeads(params) {
    /**
     * Perform Lead filter on basis of current time and other factors.
     * TODO: ---- Custom Business Logic --- .
     * @type {Model[]}
     */
    const filterdFetchedLeads = await LeadsQualified.findAll(params);
    /**
     * Ingesting Leads to SQS.
     */
    for (const leadObj of filterdFetchedLeads) {
      await new LeadSqsService().ingestToSqs(leadObj);
    }
  }
}

module.exports = LeadSchedules;