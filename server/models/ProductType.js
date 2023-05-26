const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ProductType = sequelize.define(
  "productType",
  {
    id: {
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
);

module.exports = ProductType;
