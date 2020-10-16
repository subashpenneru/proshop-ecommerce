import express from 'express';
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
} from '../controllers/userController.js';
import { isAdmin, isAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser).get(isAuth, isAdmin, getUsers);
router.post('/login', authUser);
router
  .route('/profile')
  .get(isAuth, getUserProfile)
  .put(isAuth, updateUserProfile);

export default router;
