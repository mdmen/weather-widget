// @flow
import * as React from 'react';
import { ParamsContext } from '../components/context/ParamsContext';
import { getCurrentWeatherByCity, getCurrentWeatherByCoords } from './api';
import type { Location } from './types';

type ApiReturnType = {
  [string]: (...args: Array<any>) => Promise<Location>,
};

export const useApi = (): ApiReturnType => {
  const { appId, measureUnits } = React.useContext(ParamsContext);
  return {
    getCurrentWeatherByCity: React.useMemo(
      () => getCurrentWeatherByCity({ appId, measureUnits }),
      [appId, measureUnits]
    ),
    getCurrentWeatherByCoords: React.useMemo(
      () => getCurrentWeatherByCoords({ appId, measureUnits }),
      [appId, measureUnits]
    ),
  };
};
