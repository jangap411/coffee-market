const Cart = require("../models/Cart");
const { verifyToken } = require("../middlewares/verifyToken");

/**
 * POOST create cart products function
 * @access - authenticated users
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns - An array of order object
 */
const createCart = async (req, res) => {
  try {
    const newCart = new Cart(req.body);
    const saveCart = await newCart.save();

    if (!saveCart) {
      res.status(400).json("Error saving cart");
    }

    res.status(201).json(saveCart);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

/**
 * PATCH update cart  function
 * @access - authenticated users
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns - An array of order object
 */
const updateCart = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

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
 * DELETE destroy cart  function
 * @access - authenticated users
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns - An array of order object
 */
const deleteCart = async (req, res) => {
  try {
    // Extract details from the request object
    const { id } = req.body;

    const cart = await Cart.findByIdAndDelete(id);

    // check if cart is delete
    if (!cart) {
      return res
        .status(400)
        .json({ status: "error", message: "Error destroying cart" });
    }

    // send success
    res.status(201).json("Cart has been deleted");
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

/**
 * GET user cart  function
 * @access - authenticated users
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns - An array of order object
 */
const getUserCart = async (req, res) => {
  try {
    // Extract details from the request object
    const { userId } = req.body;

    const cart = await Cart.findOne({ userId });

    // check if cart is available
    if (!cart) {
      return res
        .status(400)
        .json({ status: "error", message: "Error getting cart" });
    }

    // send success
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

/**
 * GET all cart function
 * @access - authenticated admin users
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns - An array of order object
 */
const getAllUserCart = async (req, res) => {
  try {
    // Extract details from the request object
    const { userId } = req.body;

    const cart = await Cart.find();

    // check if cart is available
    if (!cart) {
      return res
        .status(400)
        .json({ status: "error", message: "Error getting cart" });
    }

    // send success
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = {
  updateCart,
  createCart,
  deleteCart,
  getUserCart,
  getAllUserCart,
};
