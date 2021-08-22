// @flow
import * as React from 'react';
import { useGeolocation, useLocalStorage } from 'react-use';
import { WidgetLocation } from './WidgetLocation';
import { WidgetMenu } from './WidgetMenu';
import { WidgetMenuToggler } from './WidgetMenuToggler';
import { useApi } from '../../common/api';
import { hasLocation } from '../../common/utils';
import isEmpty from 'lodash/isEmpty';
import update from 'immutability-helper';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { localStorageLocationsKey } from '../../common/config';

export const Widget = (): React.Node => {
  const geoLocation = useGeolocation();
  const { getCurrentWeatherByCoords, getCurrentWeatherByCity } = useApi();
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [locations, setLocations] = useLocalStorage(
    localStorageLocationsKey,
    []
  );

  const shouldRequestLocationByGeo =
    isEmpty(locations) &&
    !geoLocation.loading &&
    !geoLocation.error &&
    geoLocation.latitude;

  React.useEffect(() => {
    if (shouldRequestLocationByGeo) {
      (async () => {
        const location = await getCurrentWeatherByCoords({
          lat: geoLocation.latitude,
          lon: geoLocation.longitude,
        });
        setLocations([...locations, location]);
      })();
    }
  }, [
    geoLocation.error,
    geoLocation.latitude,
    geoLocation.loading,
    geoLocation.longitude,
    locations,
    setLocations,
    shouldRequestLocationByGeo,
    getCurrentWeatherByCoords,
  ]);

  const shouldOpenMenuFirst =
    !isMenuOpen &&
    isEmpty(locations) &&
    !geoLocation.loading &&
    geoLocation.error;

  React.useEffect(() => {
    if (shouldOpenMenuFirst) {
      setMenuOpen(true);
    }
  }, [
    geoLocation.error,
    geoLocation.loading,
    isMenuOpen,
    locations,
    shouldOpenMenuFirst,
  ]);

  const addLocation = React.useCallback(
    (city) => {
      (async () => {
        const location = await getCurrentWeatherByCity({ city });

        if (!hasLocation(locations, location.id)) {
          setLocations([...locations, location]);
        }
      })();
    },
    [getCurrentWeatherByCity, locations, setLocations]
  );

  const removeLocation = React.useCallback(
    (id) => {
      setLocations(locations.filter((location) => location.id !== id));
    },
    [locations, setLocations]
  );

  const moveLocation = React.useCallback(
    (dragIndex, hoverIndex) => {
      const dragLocation = locations[dragIndex];
      setLocations(
        update(locations, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragLocation],
          ],
        })
      );
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
          {isMenuOpen && (
            <WidgetMenu
              locations={locations}
              addLocation={addLocation}
              removeLocation={removeLocation}
              moveLocation={moveLocation}
            />
          )}
          {!isMenuOpen &&
            !isEmpty(locations) &&
            locations.map((location) => (
              <WidgetLocation key={location.id} location={location} />
            ))}
          {isEmpty(locations) && !isMenuOpen && (
            <Alert variant="warning" className="mt-5">
              There are no locations. Please select one or more
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};
