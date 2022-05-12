const { Router } = require('express');

const home = require('./home/home');
const signup = require('./signup/signup');
const signin = require('./signin/signin');

const appRouter = new Router();

appRouter.use('/', home)
appRouter.use('/signup', signup);
appRouter.use('/signin', signin);

module.exports = appRouter;
