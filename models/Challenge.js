var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var challengeSchema = new Schema({
  subject: { type: String, lowercase: true },
  photos: {
    url: { type: String },
    upVotes: { tpe: Number },
    downVotes: { tpe: Number }
   }
});

module.exports = mongoose.model('Challenge', challengeSchema);