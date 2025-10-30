import express from 'express';
import {
  register,
  login,
  googleAuth,
  getMe,
  logout,
  updatePassword,
} from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);
router.post('/google', googleAuth);

// Protected routes
router.get('/me', protect, getMe);
router.post('/logout', protect, logout);
router.put('/updatepassword', protect, updatePassword);

export default router;
