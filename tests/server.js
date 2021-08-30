import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { openWeatherApiUrl } from '../src/common/config';
import { getLocationResponse } from './mocks/responses';

const handlers = [
  rest.get(openWeatherApiUrl, (req, res, ctx) => {
    const lat = req.url.searchParams.get('lat');
    if (lat) {
      const response = getLocationResponse();
      return res(ctx.json(response));
    }

    const name = req.url.searchParams.get('q');
    if (name && name !== 'not found') {
      const response = getLocationResponse({
        id: `id_${name}`,
        name,
      });
      return res(ctx.json(response));
    }

    return res(
      ctx.status(404),
      ctx.json({
        errorMessage: 'Location not found',
      })
    );
  }),
];

const server = setupServer(...handlers);
export { server };
