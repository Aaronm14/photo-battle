var mongoose = require('mongoose');

var challengeSchema = new mongoose.Schema({
  subject: { type: String, lowercase: true },
  photos: { type: mongoose.Schema.ObjectId, ref: 'Photo' }
});

module.exports = mongoose.model('Challenge', challengeSchema);