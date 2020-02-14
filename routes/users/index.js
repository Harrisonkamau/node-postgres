const requireDirectory = require('require-directory');
const _ = require('lodash');

const options = {
  exclude: /^index/,
  recurse: false,
};

const files = requireDirectory(module, options);
console.log(files);
module.exports = _.values(files);
