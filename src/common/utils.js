// @flow
import { openWeatherStaticUrl } from './config';
import type { MeasureUnits } from './types';

export const getOpenWeatherIconUrl = (code: string): string =>
  `${openWeatherStaticUrl}${code}@2x.png`;

export const upperFirst = (str: string): string =>
  str[0].toUpperCase() + str.slice(1);

export const formatTemperature = (
  temp: number,
  measureUnits: MeasureUnits
): string => {
  const units = {
    standard: 'K',
    metric: '°C',
    imperial: '°F',
  };

  return `${Math.round(temp)}${units[measureUnits]}`;
};
