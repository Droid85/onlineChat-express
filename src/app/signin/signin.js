const { Router } = require('express');
const { signupValidation } = require('../../validation');

const signinRouter = new Router();

signinRouter.get('/', (req, res) => {
	res.render('signin', { error: '' });
})

signinRouter.post('/', signupValidation.appValidator, (req, res) => {
	console.log(req.body);

	const { error } = req.validation;

	if (error) {
		res.render('signin', { error });
	} else {
		req.session.auth = true;
		res.redirect('/');
	}
})

module.exports = signinRouter;
