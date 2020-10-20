import express from 'express';
import {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js';
import { isAuth, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getProducts).post(isAuth, isAdmin, createProduct);
router.get('/top', getTopProducts);
router
  .route('/:id')
  .get(getProductById)
  .delete(isAuth, isAdmin, deleteProduct)
  .put(isAuth, isAdmin, updateProduct);

router.route('/:id/reviews').post(isAuth, createProductReview);

export default router;
