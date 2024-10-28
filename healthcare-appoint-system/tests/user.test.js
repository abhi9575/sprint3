const request = require('supertest');
const app = require('../app'); // Import your app

describe('User Authentication', () => {
    it('should register a user', async () => {
        const res = await request(app)
            .post('/api/users/register')
            .send({ username: 'testuser', password: 'password123' });
        expect(res.statusCode).toEqual(201);
        expect(res.body.message).toBe('User registered');
    });

    it('should log in a user', async () => {
        const res = await request(app)
            .post('/api/users/login')
            .send({ username: 'testuser', password: 'password123' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
    });
});
