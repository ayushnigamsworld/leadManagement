const LeadsQualified = require('../models/LeadsQualified');

const LeadsQualifiedController = () => {

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
    const leads = await LeadsQualified.findAll(params);
    return res.status(200).json({leads});
  };

  return {
    getAll,
  };
};

module.exports = LeadsQualifiedController;
