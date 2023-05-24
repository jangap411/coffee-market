const Product = require("../models/Product");

/**
 * Add new production function
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @throws {Error} - When request fails
 */

const addNewProduct = async (req, res) => {
  try {
    // Extracting product details from request body
    const { name, description, price, origin, Users_id } = req.body;

    const newProduct = await Product.create({
      name,
      description,
      price,
      origin,
      Users_id,
    });

    // check if product is create
    if (!newProduct) {
      return res
        .status(400)
        .json({ status: "error", message: "Error creating product" });
    }

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

/**
 * Update product function
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @throws {Error} - When request fails
 */
const updateProduct = async (req, res) => {
  try {
    // Extracting product id from request parameter
    const { id } = req.params;
    // Extracting product details from request body
    const { name, price, description, origin, user_id } = req.body;

    const product = await Product.findByPk(id);

    // if product id not exists
    if (!product) {
      return res
        .status(404)
        .json({ status: "error", message: "Product not found" });
    }

    //update product
    const updateProduct = await Product.update(
      { name, price, description, origin, user_id },
      {
        where: {
          id,
        },
      }
    );

    // check update
    if (!updateProduct) {
      res
        .status(400)
        .json({ status: "error", message: "error updating product" });
    }

    // send success
    res.status(200).json({ updateProduct });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

/**
 * Get All product function
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @throws {Error} - When request fails
 *
 */
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();

    if (!products) {
      return res
        .status(404)
        .json({ status: "error", message: "Products not found" });
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

/**
 * Get a single product function
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @throws {Error} - When request fails
 *
 */
const getSingleProduct = async (req, res) => {
  try {
    // Extracting product id from request parameter
    const { id } = req.params;

    const product = await Product.findByPk(id);

    // if product id not exists
    if (!product) {
      return res
        .status(404)
        .json({ status: "error", message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

/**
 * Delete a product function
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @throws {Error} - When request fails
 *
 */
const deleteProduct = async (req, res) => {
  try {
    // Extracting product id from request parameter
    const { id } = req.params;

    const product = await Product.findByPk(id);

    // if product id not exists
    if (!product) {
      return res
        .status(404)
        .json({ status: "error", message: "Product not found" });
    }

    // delete product from db
    await Product.destroy({ where: { id: id } });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = {
  addNewProduct,
  updateProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
};
