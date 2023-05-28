const Order = require("../models/Order");

/**
 * POST create order function
 * @access - Signin users
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns - A JSON order object
 */
const createOrder = async (req, res) => {
  try {
    // Extract order details from request body
    const { userId, products, amount, address, status } = req.body;

    // create order
    const newOrder = new Order({ userId, products, amount, address, status });

    // check save was successful
    const order = await newOrder.save();
    if (!order) {
      return res
        .status(400)
        .json({ status: "error", message: "error creating order." });
    }

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

/**
 * PATCH update order function
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns - A JSON order object
 */
const updateOrder = async (req, res) => {
  try {
    // extract order id from request params
    const { id } = req.params;

    // Extract order details from request body
    const { userId, products, amount, address, status } = req.body;

    // check order by id and update
    const order = await Order.findByIdAndUpdate(
      id,
      {
        $set: {
          userId,
          products,
          amount,
          address,
          status,
        },
      },
      { new: true }
    );

    if (!order) {
      return res.status(400).json("Error updating order");
    }

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

/**
 * DELETE a single order function
 * @access - authenticated users
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns - A JSON order object
 */

const destroyOrder = async (req, res) => {
  try {
    // Extract id request params
    const { id } = req.params;

    // find and delete by order id
    const order = await Order.findByIdAndDelete(id);

    if (!order) {
      return res.status(404).json("Error deleting order");
    }

    res.status(200).json("Order deleted");
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

/**
 * Get user orders function
 *
 * @access - authenticated user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns - An array of order object
 */

const getUserOrders = async (req, res) => {
  try {
    // Extract user from params
    const { userId } = req.params;

    const orders = await Order.find({ userId });

    if (!orders) {
      return res.status(404).json("-- Orders not found --");
    }

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

/**
 * Get a single order function
 *
 * @access - authenticated users with admin prevs
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns - A JSON order object
 */

const getOrders = async (req, res) => {
  try {
    // calling the find method on the db
    const order = await Order.find();

    if (!order) {
      return res.status(404).json("Order not found");
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = {
  getUserOrders,
  getOrders,
  createOrder,
  destroyOrder,
  updateOrder,
};
