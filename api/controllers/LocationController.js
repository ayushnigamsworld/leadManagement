const Location = require('../models/Location');

const LocationController = () => {

  /**
   * Gets Location bases on some params.
   * TODO: Filter implementation with restrictions on the offset and count.
   * @param req
   * @param res
   * @returns {Promise.<Sequelize.json|*|Json>}
   */
  const getAll = async (req, res) => {
    const {params} = req;
    // Params can contain filters and conditions.
    // Validation of params should be done here.
    const locations = await Location.findAll(params);
    return res.status(200).json({locations});
  };

  /**
   * TODO: Create methods.
   */

  return {
    getAll,
  };
};

module.exports = LocationController;
