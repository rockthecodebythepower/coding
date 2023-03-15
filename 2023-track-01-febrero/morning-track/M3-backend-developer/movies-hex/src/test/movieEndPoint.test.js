const request = require('supertest');
const app = require('../server');

describe('Post Movie', () => {
  it('should create a new movie', async () => {
    const res = await request(app).post('/api/v1/movies/').send({
      Title: 'Back to the Future',
      Poster: 'backtothefuture.jpg',
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.status).toEqual('Success');
  });
});
