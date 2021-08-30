import { server } from './server';

global.fetch = require('node-fetch');

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
