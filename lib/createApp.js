const Koa = require('koa');
const { logger } = require('loggery');
const bodyParser = require('koa-bodyparser');
const koaQS = require('koa-qs');
const requestLogger = require('koa-logger');
const db = require('../models');
const routes = require('../routes');
const { typeCastBoolean } = require('../utils');

const { LOGGING_ENABLED } = process.env;
const { NODE_ENV } = process.env;

const allowRequestLogging = NODE_ENV === 'development' ? typeCastBoolean(LOGGING_ENABLED) : false;
const { sequelize: { models } } = db;

async function connectToDB() {
  try {
    await db.sequelize.authenticate();
    logger().info('Successfully connected to PostgreSQL');
  } catch (error) {
    logger().info('There was an error while connecting to PostgreSQL');
  }
}

async function createApp() {
  try {
    const app = new Koa();
    koaQS(app);

    app.use(bodyParser());

    if (allowRequestLogging) {
      app.use(requestLogger());
    }

    // add all models to the context - makes it easy to retrieve across the app
    app.use(async (ctx, next) => {
      ctx.models = models;
      await next();
    });

    // register all routes
    routes.forEach((r) => app.use(r.middleware()));

    // connect to DB
    await connectToDB();

    return app;
  } catch (error) {
    logger().info('There was an error creating the main APP');
    logger().error(error);
  }
}

module.exports = createApp;
