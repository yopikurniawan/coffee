'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Order.init({
    coffee_menu: DataTypes.INTEGER,
    count_order: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    CoffeeId: DataTypes.INTEGER
    
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};