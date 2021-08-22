// @flow
import ky, { HTTPError } from 'ky';
import { useContext, useMemo } from 'react';
import { ParamsContext } from '../components/context/ParamsContext';
import { openWeatherApiUrl, openWeatherUnits } from './config';
import { normalizeLocation } from './utils';
import type { Location, LocationSource } from './types';

const getCurrentWeatherByCity =
  (appId) =>
  async ({ city }): Promise<Location> => {
    const response: LocationSource = await makeRequest({
      queryParams: {
        q: city,
        units: openWeatherUnits,
        appId,
      },
    });

    return normalizeLocation(response);
  };

const getCurrentWeatherByCoords =
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

const makeRequest = async ({ queryParams, method = 'get' }) => {
  const response = await ky(openWeatherApiUrl, {
    method,
    searchParams: queryParams,
  });

  if (!response.ok) {
    throw new HTTPError(`Fetch error: ${response.statusText}`);
  }

  return await response.json();
};

type useApiReturnType = {
  [string]: (...args: Array<any>) => any,
};
export const useApi = (): useApiReturnType => {
  const { appId } = useContext(ParamsContext);
  return {
    getCurrentWeatherByCity: useMemo(
      () => getCurrentWeatherByCity(appId),
      [appId]
    ),
    getCurrentWeatherByCoords: useMemo(
      () => getCurrentWeatherByCoords(appId),
      [appId]
    ),
  };
};
