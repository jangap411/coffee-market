const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const SECRET = process.env.SECRET;
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * PATCH update user function
 *
 * @access - authenticated and authorized users
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns
 */

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

/**
 * DELETE destroy user function
 *
 * @access - authenticated and authorized users
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns
 */

const destroyUser = async (req, res) => {
  try {
    const { id } = req.params;
    const dropUser = await User.findByIdAndDelete(id);

    if (!dropUser) {
      return res.status(400).json("Error Deleting user");
    }

    res.status(200).json("User deleted");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

/**
 * GET single user function
 *
 * @access - authenticated users with admin access
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @access - public
 * @returns
 */
const getUser = async (req, res) => {
  try {
    // extract id from params
    const { id } = req.params;

    const existingUser = await User.findById(id);

    if (!existingUser) {
      return res.status(400).json("User does not exist");
    }

    const { password, ...others } = existingUser._doc;

    res.status(200).json(others);
  } catch (error) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
};

/**
 * GET User all function
 * @access - authenticated users with admin
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getAllUsers = async (req, res) => {
  const query = req.query.new;

  console.log(query);

  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

/**
 * GET User stats function
 * @access - authenticated users with admin
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getUsersStats = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getUser,
  getAllUsers,
  updateUser,
  destroyUser,
  getUsersStats,
};
