const chai = require('chai');
const chaiSubset = require('chai-subset');
const db = require('../models');
const createApp = require('../lib/createApp');

const { sequelize: { models } } = db;

chai.use(chaiSubset);

const { expect } = chai;
const testPort = 9002;

module.exports = {
  expect,
  models,
  testPort,
  createApp,
  db,
};
