import {
  hasLocation,
  collectLocationsToUpdate,
  normalizeLocation,
} from '../../src/common/location';
import { getLocationResponse } from '../mocks/responses';

describe('Locations helper functions', () => {
  test('Check if location is in a collection', () => {
    const locations = new Array(5)
      .fill(null)
      .map((_, index) => ({ id: `a${index}` }));
    expect(hasLocation(locations, 'a3')).toBeTruthy();
    expect(hasLocation(locations, 'a10')).toBeFalsy();
  });

  test('Collect locations to update', () => {
    const locations = new Array(5).fill(null).map((_, index) => ({
      lastUpdate: index >= 3 ? Date.now() - 1000 * 60 * 60 * 24 : Date.now(),
    }));
    expect(collectLocationsToUpdate(locations)).toHaveLength(2);
  });

  test('Return normalized location', () => {
    const location = normalizeLocation(getLocationResponse(), 'metric');
    expect(location).toMatchObject({
      id: 'test',
      city: 'Moscow',
      country: 'RU',
      temp: '25°C',
      tempFeelsLike: '20°C',
      description: 'clear sky',
      wind: 10,
      pressure: 50,
      humidity: 40,
      visibility: 1,
    });
    expect(location.image).toMatch(/.+\.png/);
    expect(location.lastUpdate).toBeGreaterThan(Date.now() - 1000);
  });
});
