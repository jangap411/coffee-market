const express = require("express");
const {
  getAllProducts,
  addNewProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");
const router = express.Router();

router.route("/products").get(getAllProducts).post(addNewProduct);
router
  .route("/products/:id")
  .get(getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = router;
