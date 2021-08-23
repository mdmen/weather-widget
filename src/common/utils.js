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

export const normalizeLocation = ({
  id,
  main,
  name,
  sys,
  weather,
}: LocationSource): Location => ({
  id,
  city: name,
  country: sys.country,
  temp: formatTemperature(main.temp),
  tempFeelsLike: formatTemperature(main.feels_like),
  image: getOpenWeatherIconUrl(weather[0].icon),
  description: weather[0].description,
  lastUpdate: Date.now(),
});

export const hasLocation = (locations: Array<Location>, id: string): boolean =>
  !!locations.find((location) => location.id === id);

export const shouldUpdateLocation = (location: Location): boolean =>
  location.lastUpdate + locationUpdateDelay < Date.now();

export const updateLocation = (
  locations: Array<Location>,
  location: Location
): Array<Location> => {
  const result = [...locations];
  const index = result.findIndex((item) => item.id === location.id);

  result.splice(index, 1, location);

  return result;
};
