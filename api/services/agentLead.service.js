const cacheService = require('../services/cache.service');
const AgentLeads = require('../models/AgentLeads');

class AgentLeadService {
  constructor() {

  }

  /**
   * Algorithm:
   * Step 1. Get agentLeadCount from Redis with key agentId.
   * Step 2. Insert entry into agent_lead table.
   * Step 3. Put (agentLeadCount + 1) to Redis with key agentId.
   * @param agentId
   * @param leadId
   */
  async assignLeadToAgent(agentId, leadId) {
    let agentCurrentCapacity = await cacheService.getIORedisInstance().get(`capacity_${agentId}`) || 0;
    await AgentLeads.create({
      leadId,
      agentId,
    });
    agentCurrentCapacity += 1;
    await cacheService.getIORedisInstance().set(`capacity_${agentId}`, agentCurrentCapacity);
  }

  async findLiveCountAgentLead(agentId) {
    let currentLeadCountForAgent = await cacheService.getIORedisInstance().get(`agentLeadCount_${agentId}`);
    if (currentLeadCountForAgent === null) {
      currentLeadCountForAgent = await AgentLeads.count({
        where: {
          agentId,
        }
      });
      await cacheService.getIORedisInstance().set(`agentLeadCount_${agentId}`, currentLeadCountForAgent);
    }
    return currentLeadCountForAgent;
  }
}

module.exports = AgentLeadService;