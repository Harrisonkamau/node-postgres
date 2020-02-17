const faker = require('faker');

const createUser = () => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

module.exports = {
  users: Array(10).fill(createUser()),
};
