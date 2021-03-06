const Lead = require('../models/Leads');
const LeadScoringService = require('../services/leadScoring.service');
const LeadDistributionService = require('../services/leadDistribution.service');

const LeadController = () => {

  /**
   * Gets Leads bases on some params.
   * TODO: Filter implementation with restrictions on the offset and count.
   * @param req
   * @param res
   * @returns {Promise.<Sequelize.json|*|Json>}
   */
  const getAll = async (req, res) => {
    const {params} = req;
    // Params can contain filters and conditions.
    // Validation of params should be done here.
    const leads = await Lead.findAll(params);
    return res.status(200).json({leads});
  };

  /**
   * BulkInsert
   * Inserts an array of Leads in single hit to DB.
   * Client can directly consume this api for simple use-cases of around 1000 leads at once.
   * @param req
   * @param res
   * @returns {Promise.<Sequelize.json|*|Json>}
   */
  const bulkInsert = async (req, res) => {
    const {body} = req;
    const leadsArr = body;
    const leads = await Lead.bulkCreate(leadsArr);
    return res.status(200).json({leads});
  };

  /**
   * Lead Scoring updation.
   * @param req
   * @param res
   * @returns {Promise.<Sequelize.json|Json|*>}
   */
  const scoring = async (req, res) => {
    const {body} = req;
    const leadId = body.lead_id;
    const scoreObj = body.score;
    // TODO: Apply validations for LeadId.
    const updatedLeadObj = new LeadScoringService(leadId).scoreUpdate(scoreObj);
    const leads = await Lead.update(updatedLeadObj);
    return res.status(200).json({leads});
  };

  /**
   * Lead Distribution/Allocation.
   * Main solution for given assignment.
   * @param req
   * @param res
   * @returns {Promise.<Sequelize.json|Json|*>}
   */
  const distribute = async (req, res) => {
    const {body} = req;
    const {leadId, locationId} = body;
    // Apply validations.
    const result = await new LeadDistributionService(leadId).distributeLead(locationId);
    return res.status(200).json({result});
  };

  return {
    getAll,
    bulkInsert,
    scoring,
    distribute
  };
};

module.exports = LeadController;
