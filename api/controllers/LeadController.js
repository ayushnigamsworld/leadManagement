const Lead = require('../models/Leads');
const LeadScoringService = require('../services/leadScoring.service');

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

  const scoring = async (req, res) => {
    const {body} = req;
    const leadId = body.lead_id;
    const scoreObj = body.score;
    // TODO: Apply validations for LeadId.
    new LeadScoringService(leadId).scoreUpdate(scoreObj);
    const leads = await Lead.bulkCreate(leadsArr);
    return res.status(200).json({leads});
  };

  return {
    getAll,
    bulkInsert,
    scoring,
  };
};

module.exports = LeadController;
