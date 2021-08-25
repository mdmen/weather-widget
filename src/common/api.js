// @flow
import ky, { HTTPError } from 'ky';
import { openWeatherApiUrl, openWeatherUnits } from './config';
import { normalizeLocation } from './utils';
import type { Location, LocationSource } from './types';

type CurrentWeatherByCityType = {
  (appId: string): { ({ city: string }): Promise<Location> },
};
export const getCurrentWeatherByCity: CurrentWeatherByCityType =
  (appId) =>
  async ({ city }) => {
    const response: LocationSource = await makeRequest({
      queryParams: {
        q: city,
        units: openWeatherUnits,
        appId,
      },
    });

    return normalizeLocation(response);
  };

type CurrentWeatherByCoordsType = {
  (appId: string): { ({ lat: number, lon: number }): Promise<Location> },
};
export const getCurrentWeatherByCoords: CurrentWeatherByCoordsType =
  (appId) =>
  async ({ lat, lon }): Promise<Location> => {
    const response: LocationSource = await makeRequest({
      queryParams: {
        units: openWeatherUnits,
        lat,
        lon,
        appId,
      },
    });

    return normalizeLocation(response);
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
