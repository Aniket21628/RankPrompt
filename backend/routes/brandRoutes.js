import express from 'express';
import { getFavicon } from '../controllers/brandController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Get favicon for a website URL
router.get('/favicon', protect, getFavicon);

export default router;
