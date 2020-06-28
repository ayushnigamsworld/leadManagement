const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const hooks = {
  beforeCreate(lead) {
  },
};

const tableName = 'location';

const Location = sequelize.define('Location', {
  id: {
    type: Sequelize.UUID,
    unique: true,
    primaryKey: true,
  },
  city: {
    type: Sequelize.STRING,
  },
  state: {
    type: Sequelize.STRING,
  },
  active: {
    type: Sequelize.BOOLEAN,
  },
  fields: {
    type: Sequelize.JSON,
  },
}, { hooks, tableName });

module.exports = Location;
