import express from 'express';
import { addOrderItems } from '../controllers/orderController.js';
import { isAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(isAuth, addOrderItems);

export default router;
