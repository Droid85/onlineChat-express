const { Router } = require('express');

const chatRouter = new Router();

chatRouter.get('/', (req, res) => {
	const { auth } = req.session
	res.render('chat', { auth })
})

chatRouter.post('/', (req, res) => {
	res.render('chat', {})
})

chatRouter.delete('/', (req, res) => {
	return res.send('DELETED')
})

chatRouter.put('/', (req, res) => {
	return res.send('PUT')
})

module.exports = chatRouter;
