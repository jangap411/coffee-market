const Cart = require("../models/Cart");

/**
 * Get all cart products function
 * @access - authenticate users
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
 * @access - authenticate users
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns - An array of order object
 */
const getCartProduct = async (req, res) => {
  try {
    const { user_id } = req.params;
    const cart = await Cart.findAll({ where: { user_id } });

    if (!cart) {
      return res
        .status(400)
        .json({ status: "error", message: "Error getting cart" });
    }

    res.status(200).json({ cart });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

/**
 * POST create cart products function
 * @access - authenticate users
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns - An array of order object
 */
const createCartProducts = async (req, res) => {
  try {
    // Extract details from the request object
    const { product_id, user_id } = req.body;

    const cart = await Cart.create({ product_id, user_id });

    // check if cart is created
    if (!cart) {
      return res
        .status(400)
        .json({ status: "error", message: "Error creating cart" });
    }

    // send success
    res.status(201).json();
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = {
  getCartProduct,
  getCartProducts,
  createCartProducts,
};
