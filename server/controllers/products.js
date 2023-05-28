const Product = require("../models/Product");

/**
 * Add new production function
 * @access - authenticated user with admin prevlge
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @throws {Error} - When request fails
 */

const addNewProduct = async (req, res) => {
  try {
    // Extracting product details from request body
    const { title, desc, img, categories, size, price, inStock } = req.body;

    const newProduct = new Product({
      title,
      desc,
      img,
      categories,
      size,
      price,
      inStock,
    });

    // check if product is create
    const savedProduct = await newProduct.save();
    if (!savedProduct) {
      return res.status(400).json("Error creating product");
    }

    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

/**
 * PATCH Update product function
 *
 * @access - authenticated admin user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @throws {Error} - When request fails
 */
const updateProduct = async (req, res) => {
  try {
    // Extracting product id from request parameter
    const { id } = req.params;
    // Extracting product details from request body
    const { title, desc, img, categories, size, price, inStock } = req.body;

    const product = await Product.findByIdAndUpdate(
      id,
      {
        $set: { title, desc, img, categories, size, price, inStock },
      },
      { new: true }
    );

    // check update
    if (!product) {
      res.status(400).json("error updating product");
    }

    // send success
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

/**
 * DELETE a product function
 *
 * @access - authenticated admin user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @throws {Error} - When request fails
 *
 */
const deleteProduct = async (req, res) => {
  try {
    // Extracting product id from request parameter
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    // if product id not exists
    if (!product) {
      return res.status(400).json("Error deleting product");
    }

    // send success
    res.status(200).json("Product Deleted");
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

/**
 * GET a single product function
 * /find/:id
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @throws {Error} - When request fails
 *
 */
const getSingleProduct = async (req, res) => {
  try {
    // Extracting product id from request parameter
    const { id } = req.params;

    const product = await Product.findById(id);

    // if product id not exists
    if (!product) {
      return res.status(404).json("Product not found");
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

/**
 * GET All product function
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @throws {Error} - When request fails
 *
 */
const getAllProducts = async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  addNewProduct,
  updateProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
};
