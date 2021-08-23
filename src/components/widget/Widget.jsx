// @flow
import * as React from 'react';
import { useGeolocation, useLocalStorage } from 'react-use';
import { WidgetLocation } from './WidgetLocation';
import { WidgetMenu } from './WidgetMenu';
import { WidgetMenuToggler } from './WidgetMenuToggler';
import { useApi } from '../../common/hooks';
import { hasLocation, updateLocation } from '../../common/utils';
import isEmpty from 'lodash/isEmpty';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { localStorageLocationsKey } from '../../common/config';

export const Widget = (): React.Node => {
  const geoLocation = useGeolocation();
  const { getCurrentWeatherByCoords, getCurrentWeatherByCity } = useApi();
  const isRequestByCoordsComplete = React.useRef(false);
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [locations, setLocations] = useLocalStorage(
    localStorageLocationsKey,
    []
  );

  React.useEffect(() => {
    if (
      !isRequestByCoordsComplete.current &&
      isEmpty(locations) &&
      !geoLocation.error &&
      geoLocation.latitude
    ) {
      (async () => {
        const location = await getCurrentWeatherByCoords({
          lat: geoLocation.latitude,
          lon: geoLocation.longitude,
        });

        isRequestByCoordsComplete.current = true;
        setLocations([...locations, location]);
      })();
    }
  }, [
    geoLocation.error,
    geoLocation.latitude,
    geoLocation.longitude,
    getCurrentWeatherByCoords,
    locations,
    setLocations,
  ]);

  const loadLocation = React.useCallback(
    async (city) => {
      const location = await getCurrentWeatherByCity({ city });

      if (!hasLocation(locations, location.id)) {
        setLocations([...locations, location]);
      } else {
        setLocations(updateLocation(locations, location));
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
    <Container fluid>
      <Row>
        <Col>
          <WidgetMenuToggler isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          {isEmpty(locations) && (
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
            !isEmpty(locations) &&
            locations.map((location) => (
              <WidgetLocation
                key={location.id}
                location={location}
                loadLocation={loadLocation}
              />
            ))}
        </Col>
      </Row>
    </Container>
  );
};
