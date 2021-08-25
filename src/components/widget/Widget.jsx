// @flow
import * as React from 'react';
import { useLocalStorage } from 'react-use';
import { WidgetLocation } from './WidgetLocation';
import { WidgetMenu } from './WidgetMenu';
import { WidgetMenuToggler } from './WidgetMenuToggler';
import { useApi } from '../../common/hooks';
import { hasLocation } from '../../common/utils';
import { WidgetContainer } from './WidgetContainer';
import Alert from 'react-bootstrap/Alert';
import { localStorageLocationsKey } from '../../common/config';

export const Widget = (): React.Node => {
  const { getCurrentWeatherByCoords, getCurrentWeatherByCity } = useApi();
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [locations, setLocations] = useLocalStorage(
    localStorageLocationsKey,
    []
  );

  const loadLocation = React.useCallback(
    async (city) => {
      const location = await getCurrentWeatherByCity({ city });
      const newLocations = hasLocation(locations, location.id)
        ? locations.map((item) => (item.id === location.id ? location : item))
        : [...locations, location];

      setLocations(newLocations);
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
    >
      <WidgetMenuToggler isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      {!locations.length && (
        <Alert variant="warning" className="mt-5">
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
