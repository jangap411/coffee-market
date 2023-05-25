const express = require("express");
const {
  getOrders,
  createOrder,
  getOrder,
  destroyOrder,
  updateOrder,
} = require("../controllers/orders");
const router = express.Router();

// routes
router.route("/orders").get(getOrders).post(createOrder);
router
  .route("/orders/:id")
  .get(getOrder)
  .delete(destroyOrder)
  .patch(updateOrder);

module.exports = router;
