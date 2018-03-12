const request = require('supertest');
const app = require('../src/server');

describe('Test the root path', () => {
  test('It should respond to the GET method', async (done) => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Demo Api entrypoint');
    done();
  });
});