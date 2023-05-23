const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Order = sequelize.define("", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  product: {},
});

module.exports = Order;
