import {
  formatTemperature,
  hasLocation,
  collectLocationsToUpdate,
  normalizeLocation,
} from '../utils';

describe('Utils functions', () => {
  it('Return formatted temperature', () => {
    let temperature = formatTemperature(10, 'standard');
    expect(temperature).toEqual('10 K');
    temperature = formatTemperature(10, 'metric');
    expect(temperature).toEqual('10°C');
    temperature = formatTemperature(10, 'imperial');
    expect(temperature).toEqual('10°F');
  });

  it('Check if location is in a collection', () => {
    let expectedLocationId = 'a3';
    const locations = new Array(5)
      .fill(null)
      .map((_, index) => ({ id: `a${index}` }));
    expect(hasLocation(locations, expectedLocationId)).toBeTruthy();
    expectedLocationId = 'a10';
    expect(hasLocation(locations, expectedLocationId)).toBeFalsy();
  });

  it('Collect locations to update', () => {
    const locations = new Array(5).fill(null).map((_, index) => ({
      lastUpdate: index >= 3 ? Date.now() - 1000 * 60 * 60 * 24 : Date.now(),
    }));
    expect(collectLocationsToUpdate(locations)).toHaveLength(2);
  });

  it('Return normalized location', () => {
    const locationSource = {
      id: 10,
      name: 'Moscow',
      visibility: 1000,
      main: {
        temp: 10,
        feels_like: 10,
        pressure: 10,
        humidity: 10,
      },
      sys: {
        country: 'RU',
      },
      weather: [{ icon: 'code', description: 'clear sky' }],
      wind: {
        speed: 10,
      },
    };
    const location = normalizeLocation(locationSource, 'metric');

    expect(location).toHaveProperty('id', 10);
    expect(location).toHaveProperty('city', 'Moscow');
    expect(location).toHaveProperty('country', 'RU');
    expect(location).toHaveProperty('temp', '10°C');
    expect(location).toHaveProperty('tempFeelsLike', '10°C');
    expect(location).toHaveProperty('description', 'clear sky');
    expect(location).toHaveProperty('wind', 10);
    expect(location).toHaveProperty('pressure', 10);
    expect(location).toHaveProperty('humidity', 10);
    expect(location).toHaveProperty('visibility', 1);
    expect(location.image).toMatch(/\.png/);
    expect(location.lastUpdate).toBeGreaterThan(Date.now() - 1000);
  });
});
