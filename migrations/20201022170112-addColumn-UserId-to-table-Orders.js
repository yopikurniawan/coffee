'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Orders', 'CoffeeId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Coffees',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Orders', 'CoffeeId')
  }
};
