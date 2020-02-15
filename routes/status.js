const { name, version } = require('../package');

module.exports = {
  method: 'get',
  path: '/',
  meta: {
    swagger: {
      summary: 'Get App Status',
      description: 'Application status showing api name, version and current Node env',
      tags: ['status'],
    },
  },
  handler: async (ctx) => {
    ctx.body = {
      name,
      version,
      environment: process.env.NODE_ENV,
    };
    ctx.status = 200;
  },
};
