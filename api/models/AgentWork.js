const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const hooks = {
  beforeCreate(agentWork) {
  },
};

const tableName = 'agent_work';

const AgentWork = sequelize.define('AgentWork', {
  id: {
    type: Sequelize.UUID,
    unique: true,
    primaryKey: true,
  },
  agent_id: {
    type: Sequelize.UUID,
  },
  location_id: {
    type: Sequelize.UUID,
  },
  bucket_size: {
    type: Sequelize.INTEGER,
  },
  active: {
    type: Sequelize.BOOLEAN,
  },
}, { hooks, tableName });

module.exports = AgentWork;
