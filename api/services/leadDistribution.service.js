/**
 * Supposedly the main class for Business Logic for the assignment specifically.
 */
const cacheService = require('../services/cache.service');
const AgentLeadService = require('../services/agentLead.service');
const AgentLocationService = require('../services/agentLocation.service');

class LeadDistribution {
  constructor(leadId) {
    this.leadId = leadId;
  }

  /**
   * Algorithm:
   * Step 1. Find agents suitable to incoming locationId.
   *        - Find array of agents from Redis based on locationId.
   *        - If not found from Redis, hit DB and find from AgentLocation Table, and set to Redis.
   * Step 2. Find capacity suitable agents based on array of arrayLocation objects from Step 1.
   * Step 3. If array obtained from Step 2 has length > 0
   *            Then
   *            - Assign Lead to Agent
   *              -- Insert into AgentLead Table.
   *              -- Update Lead count of agent on Redis.
   *         Else
   *            - Assign current Lead to Central Team.
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
    const agentBucketArrStringfied = await new AgentLocationService().findAgentsBasedOnLocation(locationId);
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
      const currentLeadCountForAgent = await new AgentLeadService().findLiveCountAgentLead(agentBucketObj.agentId);
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