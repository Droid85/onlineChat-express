const { Router } = require('express');

const signupRouter = new Router();

signupRouter.get('/', (req, res) => {
	res.render('signup', {});
})

signupRouter.post('/', (req, res) => {
	console.log(req.body);
	req.session.auth = true;
	res.redirect('/');
	// res.render('signup', {});
})

module.exports = signupRouter;
