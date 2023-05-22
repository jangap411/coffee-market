const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const UserType = sequelize.define("userType", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  timestamps: false,
});

module.exports = UserType;
