const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const SECRET = process.env.SECRET;
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * User sigin function
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns
 */
const signin = async (req, res) => {
  try {
    // Extracting email, password from the request body
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res
        .status(400)
        .json({ status: "error", message: "User does not exist" });
    }

    // compare passwords
    const verifyPassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!verifyPassword) {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid login credentials" });
    }

    // create jwt token
    const TOKEN = jwt.sign(
      {
        name: existingUser.name,
        email: existingUser.email,
      },
      JWT_SECRET,
      {
        expiresIn: "1hr",
      }
    );

    // create cookie
    res.cookie("access-token", TOKEN, { maxAge: 60 * 60, httpOnly: true });

    return res.status(200).json({
      TOKEN,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: "error", message: error.message });
  }
};

/**
 * User signup function
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const signup = async (req, res) => {
  try {
    // Extracting name, email, and password from the request body
    const { name, email, password } = req.body;

    // TODO: Perform validation and further processing of signup data

    // TODO: Save user data to the database
    const newUser = await User.create({ name, email, password });

    if (!newUser) {
      return res
        .status(400)
        .json({ status: "error", message: "Error signing up user" });
    }

    // response with success message
    res.status(201).json({ status: "success", message: "user created" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = { signin, signup };
