const { Router } = require('express');

const signup = require('./signup/signup');
const home = require('./home/home')

const appRouter = new Router();

appRouter.use('/', home)
appRouter.use('/signup', signup);

module.exports = appRouter;
