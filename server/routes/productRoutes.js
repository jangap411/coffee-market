const express = require("express");
const {
  getAllProducts,
  addNewProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");
const router = express.Router();

router.route("/").get(getAllProducts).post(addNewProduct);
router
  .route("/:id")
  .get(getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = router;
