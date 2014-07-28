var mongoose = require('mongoose');

var challengeSchema = new mongoose.Schema({
  subject: { type: String, lowercase: true },
  photos: [PhotoSchema]
});

module.exports = mongoose.model('Challenge', challengeSchema);