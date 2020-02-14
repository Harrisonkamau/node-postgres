const Koa = require('koa');
const db = require('../models');
const routes = require('../routes');

const { sequelize: { models } } = db;

async function connectToDB() {
  try {
    await db.sequelize.authenticate();
    console.log('Successfully connected to PostgreSQL');
  } catch (error) {
    console.log('There was an error while connecting to PostgreSQL');
  }
}

async function createApp() {
  try {
    const app = new Koa();

    // connect to DB
    await connectToDB();

    // add all models to the context - makes it easy to retrieve across the app
    app.use(async (ctx, next) => {
      ctx.models = models;
      await next();
    });

    // register all routes
    routes.forEach((r) => app.use(r.middleware()));

    return app;
  } catch (error) {
    console.log('There was an error creating the main APP');
    console.error(error);
  }
}

module.exports = createApp;
