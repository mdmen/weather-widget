// @flow
import type { MeasureUnits } from './types';

export const openWeatherApiUrl =
  'https://api.openweathermap.org/data/2.5/weather';
export const openWeatherStaticUrl = 'https://openweathermap.org/img/wn/';
export const localStorageLocationsKey = 'weatherWidgetLocations';
export const measureUnitsDefault: MeasureUnits = 'metric';
export const locationUpdateDelay = 60 * 60 * 1000; // 1 hour
export const maxLocationsCount = 7;
