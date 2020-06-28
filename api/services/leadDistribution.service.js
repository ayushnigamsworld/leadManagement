/**
 * Supposedly the main class for Business Logic for the assignment specifically.
 */
const cacheService = require('../services/cache.service');
const AgentLeadService = require('../services/agentLead.service');

class LeadDistribution {
  constructor(leadId) {
    this.leadId = leadId;
  }

  /**
   *
   * @param locationId
   * @returns {Promise.<void>}
   */
  async distributeLead(locationId) {
    const locationSuitedAgents = await this.findLocationSuitableAgents(locationId);
    const capacitySuitableAgents = await this.findCapacitySuitableAgents(locationSuitedAgents);
    if (capacitySuitableAgents.length > 0) {
      await new AgentLeadService().assignLeadToAgent(capacitySuitableAgents, this.leadId);
    } else {
      await this.assignToCentralTeam(this.leadId);
    }
  }

  /**
   * Finds out all agents Suitable according to current Lead Location and Agent Location.
   * @param locationId
   * @returns {Promise.<void>}
   */
  async findLocationSuitableAgents(locationId) {
    const agentBucketArrStringfied = await cacheService.getIORedisInstance().get(`location_${locationId}`);
    const agentBucketArr = JSON.parse(agentBucketArrStringfied);
    return agentBucketArr;
  }

  /**
   *
   * @param agentBucketArr
   * @returns {Promise.<Array>}
   */
  async findCapacitySuitableAgents(agentBucketArr) {

    const agentWithAvailableCapacity = [];
    for (const agentBucketObj of agentBucketArr) {
      const currentLeadCountForAgent = await cacheService.getIORedisInstance().get(`agentLeadCount_${agentBucketArr.agentId}`);
      if (currentLeadCountForAgent < agentBucketObj.bucketSize) {
        agentWithAvailableCapacity.push(agentBucketObj.agentId);
      }
    }
    return agentWithAvailableCapacity;
  }

  async assignToCentralTeam(leadId) {
    /**
     * Write your business Logic here for the central Team
     *
     * I suggest ingesting the message to SQS for central Team.
     * Design a separate data flow for that.
     *
     * Or
     *
     * Simply insert into table lead_central_team for now.
     */
  }
}

module.exports = LeadDistribution;