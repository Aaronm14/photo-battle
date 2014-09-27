var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var photoSchema = new Schema ({
    url: { type: String },
    title: { type: String },
    upVotes: { type: Number },
    score: { type: Number }
})

var challengeSchema = new Schema({
  subject: { type: String },
  source: { type: String },
  photos: [photoSchema]
  /*photos: {
    url: { type: String },
    upVotes: { tpe: Number },
    downVotes: { tpe: Number }
   }*/
});

module.exports = mongoose.model('Challenge', challengeSchema);