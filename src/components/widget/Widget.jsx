// @flow
import * as React from 'react';
import { useLocalStorage } from 'react-use';
import { WidgetLocation } from './WidgetLocation';
import { WidgetMenu } from './WidgetMenu';
import { WidgetMenuToggler } from './WidgetMenuToggler';
import { useApi } from 'common/hooks';
import { hasLocation } from 'common/location';
import { localStorageLocationsKey } from 'common/config';
import { WidgetContainer } from './WidgetContainer';
import Alert from 'react-bootstrap/Alert';

export const Widget = (): React.Node => {
  const { getCurrentWeatherByCoords, getCurrentWeatherByCity } = useApi();
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [locations, setLocations] = useLocalStorage(
    localStorageLocationsKey,
    []
  );

  const loadLocation = React.useCallback(
    async (city) => {
      try {
        const location = await getCurrentWeatherByCity({ city });
        const newLocations = hasLocation(locations, location.id)
          ? locations.map((item) => (item.id === location.id ? location : item))
          : [...locations, location];

        setLocations(newLocations);
        setError(null);
      } catch (e) {
        setError({ message: 'Failed to load location' });
      }
    },
    [getCurrentWeatherByCity, locations, setLocations]
  );

  const removeLocation = React.useCallback(
    (id) => {
      setLocations(locations.filter((location) => location.id !== id));
    },
    [locations, setLocations]
  );

  const swapLocations = React.useCallback(
    (dragIndex, hoverIndex) => {
      const dragLocation = locations[dragIndex];
      const hoverLocation = locations[hoverIndex];
      const updatedLocations = [...locations];

      updatedLocations[dragIndex] = hoverLocation;
      updatedLocations[hoverIndex] = dragLocation;

      setLocations(updatedLocations);
    },
    [locations, setLocations]
  );

  const toggleMenu = React.useCallback(() => {
    setMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <WidgetContainer
      locations={locations}
      setLocations={setLocations}
      getCurrentWeatherByCoords={getCurrentWeatherByCoords}
      getCurrentWeatherByCity={getCurrentWeatherByCity}
      setError={setError}
    >
      <WidgetMenuToggler isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      {!!error && <Alert variant="danger">{error.message}</Alert>}
      {!locations.length && (
        <Alert variant="warning">
          There are no locations. Please select at least one
        </Alert>
      )}
      {isMenuOpen && (
        <WidgetMenu
          locations={locations}
          loadLocation={loadLocation}
          removeLocation={removeLocation}
          swapLocations={swapLocations}
        />
      )}
      {!isMenuOpen &&
        !!locations.length &&
        locations.map((location) => (
          <WidgetLocation
            key={location.id}
            location={location}
            loadLocation={loadLocation}
          />
        ))}
    </WidgetContainer>
  );
};
