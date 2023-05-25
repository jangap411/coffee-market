const Order = require("../models/Order");

/**
 * Get all orders function
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns - An array of order object
 */

const getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();

    if (!orders) {
      return res
        .status(404)
        .json({ status: "error", message: "Orders not found" });
    }

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

/**
 * Get a single order function
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns - A JSON order object
 */

const getOrder = async (req, res) => {
  try {
    // Extract id request params
    const { id } = req.params;

    const order = await Order.findByPk(id);

    if (!order) {
      return res
        .status(404)
        .json({ status: "error", message: "Order not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

/**
 * POST create order function
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns - A JSON order object
 */
const createOrder = async (req, res) => {
  try {
    // Extract order details from request body
    const { address, amount, status, products_id, user_id } = req.body;

    // create order
    const order = await Order.create({
      address,
      amount,
      status,
      products_id,
      user_id,
    });

    // check creation was successful
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
 * DELETE a single order function
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns - A JSON order object
 */

const destroyOrder = async (req, res) => {
  try {
    // Extract id request params
    const { id } = req.params;

    const order = await Order.findByPk(id);

    if (!order) {
      return res
        .status(404)
        .json({ status: "error", message: "Order not found" });
    }

    await Order.destroy({ where: { id: id } });

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = {
  getOrders,
  getOrder,
  createOrder,
};
