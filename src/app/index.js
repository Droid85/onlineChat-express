const { Router } = require('express');

const appRouter = new Router();

appRouter.use('/signup', require('./signup/signup'));

module.exports = appRouter;
