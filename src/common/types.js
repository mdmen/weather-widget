// @flow
export type LocationSource = {
  id: string,
  name: string,
  visibility: number,
  main: {
    temp: number,
    feels_like: number,
    pressure: number,
    humidity: number,
  },
  sys: {
    country: string,
  },
  weather: Array<{
    icon: string,
    description: string,
  }>,
  wind: {
    speed: number,
  },
};

export type Location = {
  id: string,
  city: string,
  country: string,
  temp: string,
  tempFeelsLike: string,
  image: string,
  description: string,
  lastUpdate: number,
  wind: number,
  pressure: number,
  humidity: number,
  visibility: number,
};

export type Icons =
  | 'wind'
  | 'water'
  | 'speedometer2'
  | 'moisture'
  | 'eye'
  | 'gear'
  | 'close'
  | 'trash'
  | 'dots';
