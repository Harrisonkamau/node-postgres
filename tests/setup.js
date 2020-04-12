const chai = require('chai');
const chaiSubset = require('chai-subset');
const { sequelize: { models } } = require('../models');
const createApp = require('../lib/createApp');

chai.use(chaiSubset);

const { expect } = chai;
const testPort = 9002;

module.exports = {
  expect,
  models,
  testPort,
  createApp,
};
