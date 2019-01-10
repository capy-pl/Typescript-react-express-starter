import request from 'supertest';
import app from '../../server/App';

describe('Test app setting.', () => {
  test('App root path.', (done) => {
    request(app).get('/').then(response => {
      expect(response.status).toBe(200);
      done();
    });
  });
});
