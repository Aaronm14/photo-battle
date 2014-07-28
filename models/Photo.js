var mongoose = require('mongoose');

var photoSchema = new mongoose.Schema({
  url: { type: String, required: true },
  upVotes: { type: Integer },
  downVotes: { type: Integer }
});

module.exports = mongoose.model('Photo', photoSchema);