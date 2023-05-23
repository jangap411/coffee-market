const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Cart = sequelize.define("", {
  user_id: {
    type: DataTypes.INTEGER,
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Cart;
