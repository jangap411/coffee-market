const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const Product = sequelize.define(
  "Products",
  {
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
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  { timestamps: false }
);

/**
 * Creating Table Association between the
 * User Table & Product Table
 */
User.hasMany(Product, { foreignKey: "Users_id" });
Product.belongsTo(User, { foreignKey: "Users_id" });

// export
module.exports = Product;
