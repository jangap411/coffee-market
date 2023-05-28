const express = require("express");
const {
  updateCart,
  createCart,
  deleteCart,
  getUserCart,
  getAllUserCart,
} = require("../controllers/cart");
const router = express.Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");

router
  .route("/cart")
  .get(getAllUserCart)
  .post(verifyToken, createCart)
  .get(verifyTokenAndAdmin, getAllUserCart);
router
  .route("/cart/:id")
  .patch(verifyTokenAndAuthorization, updateCart)
  .delete(verifyTokenAndAuthorization, deleteCart);
router.route("/find/:userId").get(verifyTokenAndAuthorization, getUserCart);

// .get(getCartProduct)

module.exports = router;
