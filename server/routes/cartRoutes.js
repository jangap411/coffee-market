const express = require("express");
const {
  getCartProducts,
  getCartProduct,
  createCartProducts,
} = require("../controllers/cart");
const router = express.Router();
const authHandler = require("../middlewares/authHandler");

router
  .route("/cart")
  .get(authHandler, getCartProducts)
  .post(authHandler, createCartProducts);
router.route("/cart/:id").get(authHandler, getCartProduct);

module.exports = router;
