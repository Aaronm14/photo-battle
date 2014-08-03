/**
 * GET /
 * Voting page.
 */
var Challenge = require('../models/Challenge');
var Photo = require('../models/Photo');

/*var challenge = new Challenge({ subject: "bachelor" });
challenge.save(function (err) {
  if (err) return console.error(err);
});

var photo = new Photo({ url: "/images/bachelor-juanpablo-nikki.jpg", upvotes: 0, downVotes: 0 });
photo.save(function (err) {
  if (err) return console.error(err);
});

Challenge.findOne({ subject: "bachelor" }).exec(function (err, challenge) {
   if (err) return console.error(err);

   //add photo
   challenge.photos.push({ url: "/images/bachelor-juanpablo-nikki.jpg", upvotes: 0, downVotes: 0 });
   challenge.save(callback);
});*/

exports.vote = function(req, res) {
  res.render('vote', {
    title: 'Voting'
  });
};
