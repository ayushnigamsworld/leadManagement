const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const hooks = {
  beforeCreate(lead) {
  },
};
const tableName = 'agent_lead';

/**
 * Sequelize will convert camelCase to snakeCase for db columns automatically with a setting.
 */

const AgentLead = sequelize.define('AgentLead', {
  id: {
    type: Sequelize.UUID,
    unique: true,
    primaryKey: true,
  },
  agentId: {
    type: Sequelize.UUID,
  },
  leadId: {
    type: Sequelize.UUID,
  },
  active: {
    type: Sequelize.BOOLEAN,
    default: true,
  },
}, { hooks, tableName });

/**
 * TODO: Association: An agent can have many leads.
 * A lead belong to an agent.
 */

module.exports = AgentLead;
