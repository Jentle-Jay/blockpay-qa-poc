import request from 'supertest';
import { describe, test, expect } from 'vitest';
import app from '../app.js';

describe('Health API', () => {
  test('returns a healthy status', async () => {
    const response = await request(app).get('/health');

    expect(response.status).toBe(200);
    expect(response.body.status).toBe('ok');
    expect(response.body.service).toBe('blockpay-qa-poc');
  });
});