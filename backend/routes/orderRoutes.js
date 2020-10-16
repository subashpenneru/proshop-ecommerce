import express from 'express';
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
} from '../controllers/orderController.js';
import { isAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(isAuth, addOrderItems);
router.route('/myorders').get(isAuth, getMyOrders);
router.route('/:id').get(isAuth, getOrderById);
router.route('/:id/pay').put(isAuth, updateOrderToPaid);

export default router;
