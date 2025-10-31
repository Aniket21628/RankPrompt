import mongoose from 'mongoose';

const creditLogSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ['earned', 'spent', 'purchased', 'bonus', 'referral', 'survey'],
    required: true,
  },
  source: {
    type: String,
    enum: ['referral', 'survey', 'purchase', 'report_analysis', 'subscription', 'admin', 'trial'],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  metadata: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },
  balanceAfter: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Index for faster queries
creditLogSchema.index({ user: 1, createdAt: -1 });

const CreditLog = mongoose.model('CreditLog', creditLogSchema);

export default CreditLog;
