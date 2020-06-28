const cacheService = require('../services/cache.service');
const AgentWork = require('../models/AgentWork');

class AgentLocationService {

  async findAgentsBasedOnLocation(locationId) {

    let agentLocationArr = null;
    const agentBucketArrStringfied = await cacheService.getIORedisInstance().get(`location_${locationId}`);
    if (agentBucketArrStringfied === null) {
      agentLocationArr = await AgentWork.findAll({
        where: {
          locationId,
        }
      });
      const stringifiedObj = JSON.stringify(agentLocationArr);
      await cacheService.getIORedisInstance().set(`location_${locationId}`, stringifiedObj);
    }
    return agentLocationArr;
  }
}

module.exports = AgentLocationService;