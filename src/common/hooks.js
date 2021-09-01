// @flow
import * as React from 'react';
import { SettingsContext } from 'components/context/SettingsContext';
import { getCurrentWeatherByCity, getCurrentWeatherByCoords } from './api';
import type { Location } from './types';

type ApiReturnType = {
  [string]: (...args: Array<any>) => Promise<Location>,
};

export const useApi = (): ApiReturnType => {
  const { appId, measureUnits } = React.useContext(SettingsContext);
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
