import express from 'express';
import {
  getCreditActivity,
  getReferralInfo,
  submitSurvey,
  getSurveyStatus,
} from '../controllers/creditController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// All routes are protected
router.use(protect);

// Credit activity log
router.get('/activity', getCreditActivity);

// Referral information
router.get('/referrals', getReferralInfo);

// Survey
router.post('/survey', submitSurvey);
router.get('/survey/status', getSurveyStatus);

export default router;
