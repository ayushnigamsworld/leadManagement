const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const hooks = {
  beforeCreate(lead) {
  },
};

const tableName = 'agents';

const Agent = sequelize.define('Agent', {
  id: {
    type: Sequelize.UUID,
    unique: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  contact: {
    type: Sequelize.STRING,
  },
  active: {
    type: Sequelize.BOOLEAN,
  },
  details: {
    type: Sequelize.JSON,
  },
}, { hooks, tableName });

module.exports = Agent;
