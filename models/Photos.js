var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var photosSchema = new Schema({
  url: { type: String, required: true },
  upVotes: { type: Number },
  downVotes: { type: Number }
});

module.exports = mongoose.model('Photos', photosSchema);