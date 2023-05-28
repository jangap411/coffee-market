const express = require("express");
const router = express.Router();
const {
  getUserOrders,
  getOrders,
  createOrder,
  destroyOrder,
  updateOrder,
} = require("../controllers/orders");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");

// routes
router
  .route("/order")
  .post(verifyToken, createOrder)
  .get(verifyTokenAndAdmin, getOrders);

router
  .route("/order/:id")
  .patch(verifyTokenAndAdmin, updateOrder)
  .delete(verifyTokenAndAdmin, destroyOrder);
router.route("/order/:userId").get(verifyTokenAndAuthorization, getUserOrders);
module.exports = router;
