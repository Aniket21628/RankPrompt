import User from '../models/User.js';
import CreditLog from '../models/CreditLog.js';
import Survey from '../models/Survey.js';

/**
 * Add credits to user account
 * @param {ObjectId} userId - User ID
 * @param {Number} amount - Amount of credits to add
 * @param {String} type - Type of credit transaction
 * @param {String} source - Source of credits
 * @param {String} description - Description of transaction
 * @param {Object} metadata - Additional metadata
 */
export const addCredits = async (userId, amount, type, source, description, metadata = {}) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }

  user.credits += amount;
  await user.save();

  // Log the transaction
  await CreditLog.create({
    user: userId,
    amount,
    type,
    source,
    description,
    metadata,
    balanceAfter: user.credits,
  });

  return user.credits;
};

/**
 * Deduct credits from user account
 */
export const deductCredits = async (userId, amount, source, description, metadata = {}) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }

  if (user.credits < amount) {
    throw new Error('Insufficient credits');
  }

  user.credits -= amount;
  await user.save();

  // Log the transaction
  await CreditLog.create({
    user: userId,
    amount: -amount,
    type: 'spent',
    source,
    description,
    metadata,
    balanceAfter: user.credits,
  });

  return user.credits;
};

/**
 * Get credit activity log
 * @route GET /api/credits/activity
 * @access Private
 */
export const getCreditActivity = async (req, res) => {
  try {
    const userId = req.user.id;
    const { page = 1, limit = 20 } = req.query;

    const skip = (page - 1) * limit;

    const logs = await CreditLog.find({ user: userId })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await CreditLog.countDocuments({ user: userId });

    res.status(200).json({
      success: true,
      data: logs,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Get credit activity error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get credit activity',
      error: error.message,
    });
  }
};

/**
 * Get referral information
 * @route GET /api/credits/referrals
 * @access Private
 */
export const getReferralInfo = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    // Get list of referred users
    const referredUsers = await User.find({ referredBy: userId })
      .select('name email createdAt')
      .sort({ createdAt: -1 });

    // Get referral credit logs
    const referralCredits = await CreditLog.find({
      user: userId,
      source: 'referral',
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: {
        referralCode: user.referralCode,
        referralCount: user.referralCount,
        referredUsers,
        referralCredits,
        shareableLink: `${process.env.FRONTEND_URL}/register?ref=${user.referralCode}`,
      },
    });
  } catch (error) {
    console.error('Get referral info error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get referral information',
      error: error.message,
    });
  }
};

/**
 * Submit survey
 * @route POST /api/credits/survey
 * @access Private
 */
export const submitSurvey = async (req, res) => {
  try {
    const userId = req.user.id;
    const { responses } = req.body;

    // Check if user already completed survey
    const user = await User.findById(userId);
    if (user.surveyCompleted) {
      return res.status(400).json({
        success: false,
        message: 'Survey already completed',
      });
    }

    // Validate responses
    if (!responses || !responses.question1 || !responses.question2 || 
        !responses.question3 || !responses.question4 || 
        responses.question5 === undefined) {
      return res.status(400).json({
        success: false,
        message: 'All required questions must be answered',
      });
    }

    // Save survey
    const survey = await Survey.create({
      user: userId,
      responses,
      creditsAwarded: 50,
    });

    // Award credits
    const newBalance = await addCredits(
      userId,
      50,
      'earned',
      'survey',
      'Completed product feedback survey',
      { surveyId: survey._id }
    );

    // Update user
    user.surveyCompleted = true;
    user.surveyCompletedAt = new Date();
    await user.save();

    res.status(200).json({
      success: true,
      message: 'Survey submitted successfully! 50 credits added to your account.',
      data: {
        creditsAwarded: 50,
        newBalance,
      },
    });
  } catch (error) {
    console.error('Submit survey error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit survey',
      error: error.message,
    });
  }
};

/**
 * Get survey status
 * @route GET /api/credits/survey/status
 * @access Private
 */
export const getSurveyStatus = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    res.status(200).json({
      success: true,
      data: {
        completed: user.surveyCompleted,
        completedAt: user.surveyCompletedAt,
      },
    });
  } catch (error) {
    console.error('Get survey status error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get survey status',
      error: error.message,
    });
  }
};
