'use strict';
const models = require('../src/models');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await models.sequelize.sync({force: true});
  },

  down: async (queryInterface, Sequelize) => {
    await models.sequelize.truncate();
  }
};
