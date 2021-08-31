import locationDefault from './location.json';

const locations = ['Moscow', 'Prague', 'London', 'Paris', 'Madrid'].reduce(
  (acc, name, index) => {
    acc[name] = {
      ...locationDefault,
      id: `id${index}`,
      name,
    };
    return acc;
  },
  {}
);

export const getLocationResponse = ({ name = 'Moscow' } = {}) =>
  locations[name];
