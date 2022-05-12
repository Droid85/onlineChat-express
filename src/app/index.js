const { Router } = require('express');

const home = require('./home/home');
const signup = require('./signup/signup');
const login = require('./login/login');
const chat = require('./chat/chat');
const users = require('./users/users');

const appRouter = new Router();

appRouter.use('/', home)
appRouter.use('/signup', signup);
appRouter.use('/login', login);
appRouter.use('/chat', chat);
appRouter.use('/users', users);

module.exports = appRouter;
