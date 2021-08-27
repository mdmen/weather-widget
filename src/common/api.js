// @flow
import ky, { HTTPError } from 'ky';
import { openWeatherApiUrl } from './config';
import { normalizeLocation } from './utils';
import type { Location, LocationSource, MeasureUnits } from './types';

type CurrentWeatherByCityType = {
  ({ appId: string, measureUnits: MeasureUnits }): {
    ({ city: string }): Promise<Location>,
  },
};
export const getCurrentWeatherByCity: CurrentWeatherByCityType =
  ({ appId, measureUnits }) =>
  async ({ city }) => {
    const response: LocationSource = await makeRequest({
      queryParams: {
        units: measureUnits,
        q: city,
        appId,
      },
    });

    return normalizeLocation(response, measureUnits);
  };

type CurrentWeatherByCoordsType = {
  ({ appId: string, measureUnits: MeasureUnits }): {
    ({ lat: number, lon: number }): Promise<Location>,
  },
};
export const getCurrentWeatherByCoords: CurrentWeatherByCoordsType =
  ({ appId, measureUnits }) =>
  async ({ lat, lon }): Promise<Location> => {
    const response: LocationSource = await makeRequest({
      queryParams: {
        units: measureUnits,
        lat,
        lon,
        appId,
      },
    });

    return normalizeLocation(response, measureUnits);
  };

const makeRequest = async ({ queryParams }) => {
  const response = await ky(openWeatherApiUrl, {
    searchParams: queryParams,
  });

  if (!response.ok) {
    throw new HTTPError(`Fetch error: ${response.statusText}`);
  }

  return await response.json();
};
