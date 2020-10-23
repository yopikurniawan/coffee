'use strict';

const json = require('../data/coffee.json')

json.forEach(item => {
  item.createdAt = new Date()
  item.updatedAt = new Date()
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Coffees', json, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Coffees', null)
  }
};
