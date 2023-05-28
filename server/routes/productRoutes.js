const express = require("express");
const {
  getAllProducts,
  addNewProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");
const router = express.Router();
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");

router
  .route("/products")
  .get(getAllProducts)
  .post(verifyTokenAndAdmin, addNewProduct);
router
  .route("/products/:id")
  .get(getSingleProduct)
  .patch(verifyTokenAndAdmin, updateProduct)
  .delete(verifyTokenAndAdmin, deleteProduct);

module.exports = router;
