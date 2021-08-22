// @flow
import { openWeatherStaticUrl, openWeatherUnits } from './config';
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
});

export const hasLocation = (locations: Array<Location>, id: string): boolean =>
  !!locations.find((location) => location.id === id);
