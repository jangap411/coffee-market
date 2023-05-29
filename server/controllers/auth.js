const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// GLOBAL VARS
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * POST Register user  function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns - A JSON user object
 */

const registerUser = async (req, res) => {
  try {
    // Extract user details from request body
    const { name, username, email, password, isAdmin } = req.body;

    // creating password hash
    const salt = await bcrypt.genSalt(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    // creating new user object
    const newUser = new User({
      name,
      username,
      email,
      password: hashPassword,
      isAdmin,
    });

    // saving user to db
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

/**
 * POST Login user  function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns - A JSON user object
 */
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    console.log(user);
    if (!user) {
      return res.status(401).json("User not found");
    }
    // compare and verify password
    const verifyPassword = await bcrypt.compare(password, user.password);

    if (!verifyPassword) {
      return res.status(401).json("Invalid Credetials");
    }

    // create access token
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    const { password: userPassword, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

module.exports = {
  registerUser,
  loginUser,
};
