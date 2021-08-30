export const getLocationResponse = (location = {}) => ({
  id: 'test',
  name: 'Moscow',
  visibility: 1000,
  main: {
    temp: 25,
    feels_like: 20,
    pressure: 50,
    humidity: 40,
  },
  sys: {
    country: 'RU',
  },
  weather: [
    {
      icon: 'code',
      description: 'clear sky',
    },
  ],
  wind: {
    speed: 10,
  },
  ...location,
});
