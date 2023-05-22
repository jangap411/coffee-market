const Sequelize = require("sequelize");

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWD = process.env.DB_PASSWD;
const DB_HOST = process.env.DB_HOST;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWD, {
  host: DB_HOST,
  dialect: "mysql",
});

console.log("\nTesting database connection...\n");

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection successful");
  } catch (error) {
    console.error("\nError connecting to the database: \n", error);
  }
};

// invoke db connect
connect();

module.exports = sequelize;
