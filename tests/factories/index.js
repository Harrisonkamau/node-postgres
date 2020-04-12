const { factory } = require('factory-girl');
const { logger } = require('loggery');
const { models } = require('../setup');
const { users } = require('../seedData');


const { User } = models;
const [fakeUser] = users;

// define all relevant factories here
factory.define('user', User, fakeUser);

/**
 * Generate seed data for a specific model.
 *  - Pass the number of records you'd like to generate
 * how to call this function for instance: `generateFactories('user', 10)`
 * @param {String} model
 * @param {Number} size
 */
async function generateFactories(model, size) {
  try {
    const dbRecord = await factory.buildMany(model, size);
    logger().debug(`[Test Factories] Generating ${size} test DB records`);
    return dbRecord;
  } catch (error) {
    logger().log(`Error building a factory for Model: ${model}`);
    logger().error(error);
  }
}
module.exports = generateFactories;
