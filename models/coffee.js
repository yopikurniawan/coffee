'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coffee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Coffee.belongsToMany(models.User, {
        through: models.Order,
        foreignKey: 'CoffeeId'
      })
    }
  };
  Coffee.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Coffee',
  });

  Coffee.addHook('beforeCreate', (instance, option) => {
    instance.count_order += 1
  })


  return Coffee;
};