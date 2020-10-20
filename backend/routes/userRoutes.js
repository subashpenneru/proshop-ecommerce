import express from 'express';
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js';
import { isAdmin, isAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser).get(isAuth, isAdmin, getUsers);
router.post('/login', authUser);
router
  .route('/profile')
  .get(isAuth, getUserProfile)
  .put(isAuth, updateUserProfile);
router
  .route('/:id')
  .delete(isAuth, isAdmin, deleteUser)
  .get(isAuth, isAdmin, getUserById)
  .put(isAuth, isAdmin, updateUser);

export default router;
