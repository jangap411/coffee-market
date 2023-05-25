const express = require("express");
const { getCartProducts, getCartProduct } = require("../controllers/cart");
const router = express.Router();

router.route("/cart").get(getCartProducts);
router.route("/cart/:id").get(getCartProduct);

module.exports = router;
