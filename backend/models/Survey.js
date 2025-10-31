import mongoose from 'mongoose';

const surveySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  responses: {
    question1: {
      type: String,
      required: true,
    },
    question2: {
      type: String,
      required: true,
    },
    question3: {
      type: [String],
      required: true,
    },
    question4: {
      type: String,
      required: true,
    },
    question5: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
    },
    question6: {
      type: String,
      default: '',
    },
  },
  creditsAwarded: {
    type: Number,
    default: 50,
  },
  completedAt: {
    type: Date,
    default: Date.now,
  },
});

const Survey = mongoose.model('Survey', surveySchema);

export default Survey;
