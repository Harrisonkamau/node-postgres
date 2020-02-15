const faker = require('faker'); // eslint-disable-line

const createUsers = () => ([
  {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]);

module.exports = {
  up(queryInterface, Sequelize) { // eslint-disable-line
    return queryInterface.bulkInsert('users', createUsers());
  },

  down(queryInterface, Sequelize) { // eslint-disable-line
    return queryInterface.bulkDelete('users', null, {});
  },
};
