/**
 * Changes done such as assigning agents to projects, location, and bucket-size settings.
 * General setting between agents and their leads can be done here.
 */
const AgentWork = require('../models/AgentWork');
const AgentLeads = require('../models/AgentLeads');

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

  const updateProp = async (req, res) => {
    const {params} = req;
    // TODO: Validations of the fields to be done here.
    const agents = await AgentWork.update({where: {id: params.lead_id}}, params);
    return res.status(200).json({agents});
  };

  const assignAgentLead = async (req, res) => {
    const {body} = req;
    const {leadId, agentId} = body;

    const result = await AgentLeads.create({
      leadId,
      agentId,
    });
    return res.status(200).json({result});
  };

  const bulkAssignAgentLead = async (req, res) => {
    const {body} = req;
    const {leadId, agentId} = body;
    // TODO: Basic transformation for buk op.
    const result = await AgentLeads.bulkCreate([{
      leadId,
      agentId,
    }]);
    return res.status(200).json({result});
  };

  /**
   * POST for creating
   */

  return {
    getAll,
    updateProp,
    assignAgentLead,
    bulkAssignAgentLead,
  };
};

module.exports = AgentController;
