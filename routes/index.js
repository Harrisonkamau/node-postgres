const router = require('koa-joi-router');
const homeRoute = require('./home');

const homeRouter = router();
homeRouter.prefix('');
homeRouter.route(homeRoute);

module.exports = [
  homeRouter,
];
