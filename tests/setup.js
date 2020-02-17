const chai = require('chai');
const chaiSubset = require('chai-subset');

const { sequelize: { models } } = require('../models');

chai.use(chaiSubset);

const { expect } = chai;

module.exports = {
  expect,
  models,
};
