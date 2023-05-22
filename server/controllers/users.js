const jwt = require("jsonwebtoken");
const User = require("../models/User");

const SECRET = process.env.SECRET || "secret-123@2023";

const signin = async (req, res) => {
  try {
    // const { email, password } = req.body;

    // const existingUser = await User.findOne({});

    res.status(200).json({ data: "user sign in route" });
  } catch (error) {
    console.error(error.message);
  }
};

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { signin, signup };
