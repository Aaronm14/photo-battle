/**
 * GET /
 * Voting page.
 */
var Challenge = require('../models/Challenge');
var Photo = require('../models/Photos');

/*var photo1= new Photo({ url: "/images/bachelor-juanpablo-nikki.jpg", upVotes: 0, downVotes: 0 });
photo1.save(function (err) {
  if (err) return console.error(err);
});
var photo2 = new Photo({ url: "/images/bachelor-juanpablo-nikki.jpg", upVotes: 2, downVotes: 2 });
photo2.save(function (err) {
  if (err) return console.error(err);
});
var challenge = new Challenge({
  subject: "bachelor",
  photos: [photo1,photo2]
});*/
/*var challenge = new Challenge ({ subject:'test', photos: [Photo._id] });
challenge.save(function() {
  challenge.populate('photos').exec(function(error, challenges) {
    Photo.populate(challenges.photos, {url: '/images/bachelor-juanpablo-nikki.jpg', upVotes: 0, downVotes: 0});
    console.log(challenges[0][0].subject)
  });
});*/
/*
var photo = new Photo({ url: "/images/bachelor-juanpablo-nikki.jpg", upVotes: 0, downVotes: 0 });
photo.save(function (err) {
  if (err) return console.error(err);
});

Challenge.findOne({ subject: "bachelor" }).exec(function (err, challenge) {
   if (err) return console.error(err);

   //add photo
   challenge.photos.push({ url: "/images/bachelor-juanpablo-nikki.jpg", upVotes: 0, downVotes: 0 });
   challenge.save(callback);
});*/

exports.vote = function(req, res) {
  res.render('vote', {
    title: 'Voting'
  });
};
