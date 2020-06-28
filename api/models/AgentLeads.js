const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const hooks = {
  beforeCreate(lead) {
  },
};
const tableName = 'agent_lead';

const AgentLead = sequelize.define('AgentLead', {
  id: {
    type: Sequelize.UUID,
    unique: true,
    primaryKey: true,
  },
  agent_id: {
    type: Sequelize.UUID,
  },
  lead_id: {
    type: Sequelize.UUID,
  },
  active: {
    type: Sequelize.BOOLEAN,
  },
}, { hooks, tableName });
/**
 * TODO: Association: An agent can have many leads.
 * A lead belong to an agent.
 */

module.exports = AgentLead;
