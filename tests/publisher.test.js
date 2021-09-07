const { response } = require('express');
const request = require('supertest')
const app = require('../publisher');

describe('Topic Endpoint', () => {
  it('should not create an empty topic', async () => {
    const res = await request(app)
      .post('/topic')
      .set('Accept', 'application/json')
      .send({
        topic: null
      })
    expect(res.statusCode).toEqual(500)
    expect(res.body).toHaveProperty('errors')
  })

  it('should create a new topic', async () => {
    const res = await request(app)
      .post('/topic')
      .set('Accept', 'application/json')
      .send({
        topic: 'topic2'
      })
    expect(res.statusCode).toEqual(200)
  })
})

describe('subscription Endpoint', () => {
  it('should not create an empty subscription', async () => {
    const res = await request(app)
      .post('/subscribe/topic2')
      .set('Accept', 'application/json')
      .send({
        url: null
      })
    expect(res.statusCode).toEqual(500)
    expect(res.body).toHaveProperty('errors')
  });

  it('should not create a subscription if url is invalid', async () => {
    const res = await request(app)
      .post('/subscribe/topic2')
      .set('Accept', 'application/json')
      .send({
        url: 'urrrr'
      })
    expect(res.statusCode).toEqual(500)
    expect(res.body).toHaveProperty('errors')
  });

  it('should not create a subscription', async () => {
    const res = await request(app)
      .post('/subscribe/topic2')
      .set('Accept', 'application/json')
      .send({
        url: 'http://localhost:9000/test1'
      })
    expect(res.statusCode).toEqual(200)
  });

});

describe('Publish Endpoint', () => {
  it('should publish a message', async () => {
    const res = await request(app)
      .post('/publish/topic2')
      .set('Accept', 'application/json')
      .send({
        message: "Hello world"
      })
    expect(res.statusCode).toEqual(200)
});

});