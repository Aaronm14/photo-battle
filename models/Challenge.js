var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var photoSchema = new Schema ({
    url: { type: String },
    upVotes: { type: Number },
    downVotes: { type: Number }
})

var challengeSchema = new Schema({
  subject: { type: String },
  photos: [photoSchema]
  /*photos: {
    url: { type: String },
    upVotes: { tpe: Number },
    downVotes: { tpe: Number }
   }*/
});

module.exports = mongoose.model('Challenge', challengeSchema);