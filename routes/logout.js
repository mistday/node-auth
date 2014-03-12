
exports.logout = function(req, res) {
	req.session = null;
	res.redirect('/');
};