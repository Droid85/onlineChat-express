const { Router } = require('express');

const usersRouter = new Router();

usersRouter.get('/', (req, res) => {
	const { auth } = req.session
	res.render('users', { auth })
})

usersRouter.post('/', (req, res) => {
	res.render('users', {})
})

module.exports = usersRouter;
