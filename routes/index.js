const router = require('koa-joi-router');
const homeRoute = require('./home');
const userRoutes = require('./users');
const statusRoute = require('./status');

const homeRouter = router();
homeRouter.prefix('');
homeRouter.route(homeRoute);

const statusRouter = router();
statusRouter.prefix('/status');
statusRouter.route(statusRoute);

const userRouter = router();
userRouter.prefix('/users');
userRouter.route(userRoutes);

module.exports = [
  homeRouter,
  userRouter,
  statusRouter,
];
