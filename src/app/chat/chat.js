const { Router } = require('express');

const chatRouter = new Router();

chatRouter.get('/', (req, res) => {
	const { auth } = req.session
	res.render('chat', { auth })
})

chatRouter.post('/', (req, res) => {
	res.render('chat', {})
})

module.exports = chatRouter;
