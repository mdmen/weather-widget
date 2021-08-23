// @flow
export type LocationSource = {
  id: string,
  name: string,
  main: {
    temp: number,
    feels_like: number,
  },
  sys: {
    country: string,
  },
  weather: Array<{
    icon: string,
    description: string,
  }>,
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
