const { Router } = require('express');
const { signupValidation } = require('../../validation');

const loginRouter = new Router();

loginRouter.get('/', (req, res) => {
	res.render('login', { error: '' });
})

loginRouter.post('/', signupValidation.appValidator, (req, res) => {
	console.log(req.body);

	const { error } = req.validation;

	if (error) {
		res.render('login', { error });
	} else {
		req.session.auth = true;
		res.redirect('/');
	}
})

module.exports = loginRouter;
