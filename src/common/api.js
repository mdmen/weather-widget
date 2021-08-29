// @flow
import { openWeatherApiUrl } from './config';
import { normalizeLocation } from './location';
import type { Location, LocationSource, MeasureUnits } from './types';
import type { SettingsContextType } from '../components/context/SettingsContext';

type CurrentWeatherByCity = {
  (settings: SettingsContextType): {
    ({ city: string }): Promise<Location>,
  },
};
export const getCurrentWeatherByCity: CurrentWeatherByCity =
  ({ appId, measureUnits }) =>
  async ({ city }) => {
    const response = await makeRequest<LocationSource>({
      queryParams: {
        units: measureUnits,
        q: city,
        appId,
      },
    });

    return normalizeLocation(response, measureUnits);
  };

type CurrentWeatherByCoords = {
  (settings: SettingsContextType): {
    ({ lat: number, lon: number }): Promise<Location>,
  },
};
export const getCurrentWeatherByCoords: CurrentWeatherByCoords =
  ({ appId, measureUnits }) =>
  async ({ lat, lon }) => {
    const response = await makeRequest<LocationSource>({
      queryParams: {
        units: measureUnits,
        lat,
        lon,
        appId,
      },
    });

    return normalizeLocation(response, measureUnits);
  };

type MakeRequestParams = {
  queryParams: $Exact<{
    appId: string,
    units: MeasureUnits,
    lat?: number,
    lon?: number,
    q?: string,
  }>,
};
const makeRequest = async <Response>({
  queryParams,
}: MakeRequestParams): Promise<Response> => {
  const queryString = Object.keys(queryParams)
    .map((key: string) => `${key}=${queryParams[key]}`)
    .join('&');
  const url = `${openWeatherApiUrl}?${queryString}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Fetch error');
  }

  return response.json();
};
