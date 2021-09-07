const { response } = require('express');
const request = require('supertest')
const app = require('../subscriber');

describe('Sunscriber Endpoint', () => {
  it('should publish a message', async () => {
    const res = await request(app)
      .post('/test1')
      .set('Accept', 'application/json')
      .send({
        message: "Hello world"
      })
    expect(res.statusCode).toEqual(200)
  });
});