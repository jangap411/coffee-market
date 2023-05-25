const Cart = require("../models/Cart");

/**
 * Get all cart products function
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns - An array of order object
 */
const getCartProducts = async (req, res) => {
  try {
    res.status(200).json({ status: "success", message: "getCartProducts" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

/**
 * Get a cart product function
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns - An array of order object
 */
const getCartProduct = async (req, res) => {
  try {
    res.status(200).json({ status: "success", message: "getCartProduct" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = {
  getCartProduct,
  getCartProducts,
};
