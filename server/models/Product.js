const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const Product = sequelize.define("products", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  origin: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

/**
 * Creating Table Association between the
 * User Table & Product Table
 */
User.hasMany(Product, {});
Product.belongsTo(User, {});

// export
module.exports = Product;
