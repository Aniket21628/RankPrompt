import express from 'express';
import { analyzeBrand, generateCategories, generatePrompts } from '../controllers/openaiController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// All routes are protected
router.post('/analyze-brand', protect, analyzeBrand);
router.post('/generate-categories', protect, generateCategories);
router.post('/generate-prompts', protect, generatePrompts);

export default router;
