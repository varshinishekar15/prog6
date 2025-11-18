const request = require('supertest');
const app = require('./app');

describe('GET Routes Test Suite', () => {

  it('GET / should return Hello From DSCE', async () => {
    const res = await request(app).get('/');
    if (res.text !== '{ "response": "Hello From DSCE" }') {
      throw new Error('GET / failed');
    }
  });

  it('GET /will should return Hello World', async () => {
    const res = await request(app).get('/will');
    if (res.text !== '{ "response": "Hello World" }') {
      throw new Error('GET /will failed');
    }
  });

  it('GET /ready should return Great!, It works!', async () => {
    const res = await request(app).get('/ready');
    if (res.text !== '{ "response": "Great!, It works!" }') {
      throw new Error('GET /ready failed');
    }
  });

});
