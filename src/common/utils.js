// @flow
import {
  openWeatherStaticUrl,
  openWeatherUnits,
  locationUpdateDelay,
} from './config';
import type { LocationSource, Location } from './types';

const getOpenWeatherIconUrl = (code: string): string =>
  code ? `${openWeatherStaticUrl}${code}@2x.png` : '';

const formatTemperature = (temp: number): string => {
  const fixedTemp = Math.round(temp);
  const units = {
    metric: '°C',
    imperial: 'F',
  };

  if (!units[openWeatherUnits]) {
    return fixedTemp.toString();
  }

  return `${fixedTemp} ${units[openWeatherUnits]}`;
};

export const normalizeLocation = (location: LocationSource): Location => ({
  id: location.id,
  city: location.name,
  country: location.sys.country,
  temp: formatTemperature(location.main.temp),
  tempFeelsLike: formatTemperature(location.main.feels_like),
  image: getOpenWeatherIconUrl(location.weather[0].icon),
  description: location.weather[0].description,
  lastUpdate: Date.now(),
  wind: location.wind.speed,
  pressure: location.main.pressure,
  humidity: location.main.humidity,
  visibility: Math.round(location.visibility / 1000),
});

export const hasLocation = (locations: Array<Location>, id: string): boolean =>
  !!locations.find((location) => location.id === id);

export const shouldUpdateLocation = (location: Location): boolean =>
  location.lastUpdate + locationUpdateDelay < Date.now();

export const upperFirst = (str: string): string =>
  str[0].toUpperCase() + str.slice(1);
