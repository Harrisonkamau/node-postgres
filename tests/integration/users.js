const request = require('supertest');
const {
  expect,
  models: { User },
  createApp,
  testPort,
  db,
} = require('../setup');
const { users: fakeUsers } = require('../seedData');
const generateFactories = require('../factories');
const DB = require('../databaseCleaner');

const BASE_USER_URL = '/users';

let server;
describe('User', () => {
  beforeEach(async () => {
    const app = await createApp();
    server = await app.listen(testPort);
  });

  afterEach(async () => {
    await server.close();
  });

  describe('#create', () => {
    beforeEach(async () => {
      // clean DB
      await DB.clean(db);
      generateFactories('user', 10);
    });

    it('adds a new user to DB', async () => {
      const [newUser] = fakeUsers;
      const users = await User.findAll({});
      const { length: numOfDbUsers } = users;
      const res = await request(server)
        .post(`${BASE_USER_URL}/`)
        .set('Accept', 'application/json')
        .send({ ...newUser });

      const { length: newNumOfUsers } = await User.findAll({});
      expect(res.status).to.eq(201);
      expect(numOfDbUsers + 1).to.eq(newNumOfUsers);
    });
  });
});
