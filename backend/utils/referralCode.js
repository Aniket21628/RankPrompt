import crypto from 'crypto';
import User from '../models/User.js';

/**
 * Generate a unique referral code
 * @returns {Promise<string>} Unique 8-character referral code
 */
export const generateReferralCode = async () => {
  let isUnique = false;
  let referralCode;

  while (!isUnique) {
    // Generate 8-character alphanumeric code
    referralCode = crypto.randomBytes(4).toString('hex').toUpperCase();
    
    // Check if code already exists
    const existingUser = await User.findOne({ referralCode });
    if (!existingUser) {
      isUnique = true;
    }
  }

  return referralCode;
};

/**
 * Validate referral code format
 * @param {string} code - Referral code to validate
 * @returns {boolean} True if valid format
 */
export const isValidReferralCode = (code) => {
  return /^[A-Z0-9]{8}$/.test(code);
};
