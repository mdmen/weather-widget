// @flow
import { useContext, useMemo } from 'react';
import { ParamsContext } from '../components/context/ParamsContext';
import { getCurrentWeatherByCity, getCurrentWeatherByCoords } from './api';
import React from 'react';

type ApiReturnType = {
  [string]: (...args: Array<any>) => Promise<any>,
};
export const useApi = (): ApiReturnType => {
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

type SafeInvokeType = {
  (() => void, ...args: Array<mixed>): void,
};
export const useSafeInvoke = (): SafeInvokeType => {
  const mounted = React.useRef(true);
  React.useEffect(
    () => () => {
      mounted.current = false;
    },
    []
  );

  return React.useCallback((stateSetter, ...args) => {
    if (mounted.current) {
      stateSetter.call(null, ...args);
    }
  }, []);
};
