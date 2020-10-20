import express from 'express';
import {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
} from '../controllers/productController.js';
import { isAuth, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getProducts).post(isAuth, isAdmin, createProduct);
router
  .route('/:id')
  .get(getProductById)
  .delete(isAuth, isAdmin, deleteProduct)
  .put(isAuth, isAdmin, updateProduct);

export default router;
