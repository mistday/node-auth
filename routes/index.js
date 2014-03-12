
exports.index = function(req, res) {
  	res.render('index', { title: 'Test auth',
  						page: 'Index page',
  						login: req.session.login,
  						pass: req.session.pass });
};