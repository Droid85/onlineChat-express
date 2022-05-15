const { Router } = require('express');
const { signupValidation } = require('../../validation');

const signupRouter = new Router();

signupRouter.get('/', (req, res) => {
	res.render('signup', { error: '' });
})

signupRouter.post('/', signupValidation.appValidator, (req, res) => {
	console.log(req.body);

	const { error } = req.validation;

	if (error) {
		res.render('signup', { error });
	} else {
		req.session.auth = true;
		res.redirect('/');
	}
})

module.exports = signupRouter;
