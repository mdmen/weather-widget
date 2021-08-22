import ky, { HTTPError } from 'ky';
import { useContext, useMemo } from 'react';
import { ParamsContext } from '../components/context/ParamsContext';
import { openWeatherApiUrl, openWeatherUnits } from './config';
import { normalizeLocation } from './utils';

const getCurrentWeatherByCity =
  (appId) =>
  async ({ city }) => {
    const response = await makeRequest({
      queryParams: {
        name: city,
        units: openWeatherUnits,
        appId,
      },
    });

    return normalizeLocation(response);
  };

const getCurrentWeatherByCoords =
  (appId) =>
  async ({ lat, lon }) => {
    const response = await makeRequest({
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

export const useApi = () => {
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
