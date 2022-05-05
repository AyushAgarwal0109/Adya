const mongoose = require('mongoose');

const ShgjoinSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  shg_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'shgroups',
  },
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'accepted', 'dismissed'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('shgjoin', ShgjoinSchema);
