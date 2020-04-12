const request = require('supertest');
const { expect, createApp, testPort } = require('../setup');

let server;

const BASE_URL = '/status';

describe('Status', () => {
  beforeEach(async () => {
    const app = await createApp();
    server = app.listen(testPort);
  });

  afterEach(async () => {
    await server.close();
  });

  describe('#get', () => {
    it('returns a 200 status code', async () => {
      const res = await request(server)
        .get(`${BASE_URL}`)
        .set('Accept', 'application/json');

      expect(res.status).to.eq(200);
    });

    it('returns app version', async () => {
      const res = await request(server)
        .get(`${BASE_URL}`)
        .set('Accept', 'application/json');

      expect(res.body.version).to.eq('1.0.0');
    });

    it('returns app name', async () => {
      const res = await request(server)
        .get(`${BASE_URL}`)
        .set('Accept', 'application/json');

      expect(res.body.name).to.eq('node-sequelize');
    });
  });
});
