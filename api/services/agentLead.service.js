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
  assignLeadToAgent(agentId, leadId) {

  }
}

module.exports = AgentLeadService;