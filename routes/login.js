
exports.login = function(req, res) {
	if (req.body.login && req.body.pass) {
		req.session.login = req.body.login;
		req.session.pass = req.body.pass;
	}
  	res.redirect('/');
}