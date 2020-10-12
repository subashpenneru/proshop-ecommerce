import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const getProducts = asyncHandler(async (req, res, next) => {
  try {
    const products = await Product.find({});

    res.json(products);
  } catch (error) {
    next(error);
  }
});

const getProductById = asyncHandler(async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  } catch (error) {
    next(error);
  }
});

export { getProducts, getProductById };
