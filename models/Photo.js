var mongoose = require('mongoose');

var photoSchema = new mongoose.Schema({
  url: { type: String, required: true },
  upVotes: { type: Number },
  downVotes: { type: Number }
});

module.exports = mongoose.model('Photo', photoSchema);