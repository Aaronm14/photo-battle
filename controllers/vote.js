/**
 * GET /
 * Voting page.
 */

exports.vote = function(req, res) {
  res.render('vote', {
    title: 'Voting'
  });
};
