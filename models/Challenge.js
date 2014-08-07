var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var challengeSchema = new Schema({
  subject: { type: String, lowercase: true },
  photos: { type: mongoose.Schema.ObjectId, ref: 'Photos' }
});

module.exports = mongoose.model('Challenge', challengeSchema);