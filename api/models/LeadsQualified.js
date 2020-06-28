const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const hooks = {
  beforeCreate(lead) {
  },
};

const tableName = 'lead_qualified';

const LeadsQualified = sequelize.define('LeadsQualified', {
  id: {
    type: Sequelize.UUID,
    unique: true,
    primaryKey: true,
  },
  lead_id: {
    type: Sequelize.UUID,
  },
  target_id: {
    type: Sequelize.UUID,
  },
  active: {
    type: Sequelize.BOOLEAN,
    default: true,
  },
}, { hooks, tableName });

module.exports = LeadsQualified;
