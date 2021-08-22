import { openWeatherStaticUrl, openWeatherUnits } from './config';

const getOpenWeatherIconUrl = (code) =>
  code ? `${openWeatherStaticUrl}${code}@2x.png` : '';

const formatTemperature = (temp) => {
  const fixedTemp = Math.round(temp);
  const units = {
    metric: '°C',
    imperial: 'F',
  };

  if (!units[openWeatherUnits]) {
    return fixedTemp;
  }

  return `${fixedTemp} ${units[openWeatherUnits]}`;
};

export const normalizeLocation = ({ id, main, name, sys, weather }) => ({
  id,
  city: name,
  country: sys.country,
  temp: formatTemperature(main.temp),
  tempFeelsLike: formatTemperature(main.feels_like),
  image: getOpenWeatherIconUrl(weather[0].icon),
  description: weather[0].description,
});
