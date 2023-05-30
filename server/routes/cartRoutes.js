const express = require("express");
const {
  getCartProducts,
  getCartProduct,
  createCartProducts,
} = require("../controllers/cart");
const router = express.Router();
// const authHandler = require("../middlewares/authHandler");

router.route("/cart").get(getCartProducts).post(createCartProducts);
router.route("/cart/:id").get(getCartProduct);

module.exports = router;
