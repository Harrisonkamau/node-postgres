const requireDirectory = require('require-directory');
const _ = require('lodash');

const options = {
  exclude: /^index/,
  recurse: false,
};

module.exports = _.values(requireDirectory(module, options));
