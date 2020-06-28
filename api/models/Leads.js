const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const hooks = {
  beforeCreate(lead) {
  },
};

const tableName = 'leads';

const Lead = sequelize.define('Lead', {
  id: {
    type: Sequelize.UUID,
    unique: true,
    primaryKey: true,
  },
  category: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.STRING,
  },
  active: {
    type: Sequelize.BOOLEAN,
  },
  fields: {
    type: Sequelize.JSON,
  },
}, { hooks, tableName });

module.exports = Lead;
