import app from "../src";
import request from "supertest"


jest.setTimeout(20000)
describe('GET /', () => {
    it('should responds with data', async () => {
        const response = await request(app)
            .get('/')
            .set('Accept', 'application/json')

        expect(response.status).toBe(200)
        expect(response.body.message).toBe("ok")
    });
});

describe('GET /test', () => {
    it('should responds with data', async () => {
        const response = await request(app)
            .get('/test')
            .set('Accept', 'application/json')

        expect(response.status).toBe(200)
        expect(response.body.message).toBe("module ok!")
    });
});