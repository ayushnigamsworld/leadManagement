/**
 * Changes done such as assigning agents to projects, location, and bucket-size settings.
 * General setting between agents and their leads can be done here.
 */
const AgentWork = require('../models/AgentWork');

const AgentController = () => {

  /**
   * Gets Agents bases on some params.
   * TODO: Filter implementation with restrictions on the offset and count.
   * @param req
   * @param res
   * @returns {Promise.<Sequelize.json|*|Json>}
   */
  const getAll = async (req, res) => {
    const {params} = req;
    // Params can contain filters and conditions.
    // Validation of params should be done here.
    const agents = await AgentWork.findAll(params);
    return res.status(200).json({agents});
  };

  const updateBucketSize = async (req, res) => {
    const {params} = req;
    // Validations of the fields to be done here.
    const agents = await AgentWork.update({where: {id: params.lead_id}}, params);
    return res.status(200).json({agents});
  };

  /**
   * POST for creating
   */

  return {
    getAll,
    updateBucketSize,
  };
};

module.exports = AgentController;
