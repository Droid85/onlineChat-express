const { Router } = require('express');

const usersRouter = new Router();

usersRouter.get('/', (req, res) => {
	const { auth } = req.session
	res.render('users', { auth })
})

usersRouter.post('/', (req, res) => {
	res.render('users', {})
})

usersRouter.delete('/', (req, res) => {
	return res.send('DELETED')
})

usersRouter.put('/', (req, res) => {
	return res.send('PUT')
})

module.exports = usersRouter;
