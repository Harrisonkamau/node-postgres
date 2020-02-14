const router = require('koa-joi-router');
const homeRoute = require('./home');
const userRoutes = require('./users');

const homeRouter = router();
homeRouter.prefix('');
homeRouter.route(homeRoute);

const userRouter = router();
userRouter.prefix('/users/');
userRouter.route(userRoutes);

module.exports = [
  homeRouter,
  userRouter,
];
