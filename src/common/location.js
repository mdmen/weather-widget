// @flow
import type { Location, LocationSource, MeasureUnits } from './types';
import { locationUpdateDelay } from './config';
import { formatTemperature, getOpenWeatherIconUrl } from './utils';

export const normalizeLocation = (
  location: LocationSource,
  measureUnits: MeasureUnits
): Location => ({
  id: location.id,
  city: location.name,
  country: location.sys.country,
  temp: formatTemperature(location.main.temp, measureUnits),
  tempFeelsLike: formatTemperature(location.main.feels_like, measureUnits),
  image: getOpenWeatherIconUrl(location.weather[0].icon),
  description: location.weather[0].description,
  lastUpdate: Date.now(),
  wind: location.wind.speed,
  pressure: location.main.pressure,
  humidity: location.main.humidity,
  visibility: Math.round(location.visibility / 1000),
});

export const hasLocation = (locations: Array<Location>, id: number): boolean =>
  !!locations.find((location) => location.id === id);

export const shouldUpdateLocation = (location: Location): boolean =>
  location.lastUpdate + locationUpdateDelay < Date.now();

export const collectLocationsToUpdate = (
  locations: Array<Location>
): Array<{ id: number, city: string }> =>
  locations.reduce(
    (acc, location) =>
      shouldUpdateLocation(location)
        ? [...acc, { id: location.id, city: location.city }]
        : acc,
    []
  );
