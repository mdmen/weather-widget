// @flow
import * as React from 'react';
import { ParamsContext } from '../components/context/ParamsContext';
import { getCurrentWeatherByCity, getCurrentWeatherByCoords } from './api';

type ApiReturnType = {
  [string]: (...args: Array<any>) => Promise<any>,
};

export const useApi = (): ApiReturnType => {
  const { appId } = React.useContext(ParamsContext);
  return {
    getCurrentWeatherByCity: React.useMemo(
      () => getCurrentWeatherByCity(appId),
      [appId]
    ),
    getCurrentWeatherByCoords: React.useMemo(
      () => getCurrentWeatherByCoords(appId),
      [appId]
    ),
  };
};
