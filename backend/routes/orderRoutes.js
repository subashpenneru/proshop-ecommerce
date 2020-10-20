import express from 'express';
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateOrderToDelivered,
} from '../controllers/orderController.js';
import { isAuth, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(isAuth, addOrderItems).get(isAuth, isAdmin, getOrders);
router.route('/myorders').get(isAuth, getMyOrders);
router.route('/:id').get(isAuth, getOrderById);
router.route('/:id/pay').put(isAuth, updateOrderToPaid);
router.route('/:id/deliver').put(isAuth, isAdmin, updateOrderToDelivered);

export default router;
