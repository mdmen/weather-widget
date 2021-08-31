// @flow
import * as React from 'react';
import { useGeolocation } from 'react-use';
import { collectLocationsToUpdate } from '../../common/location';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import type { Location } from '../../common/types';

type Props = {
  locations: Array<Location>,
  setLocations: (Array<Location>) => void,
  getCurrentWeatherByCoords: ({
    lat: number,
    lon: number,
  }) => Promise<Location>,
  getCurrentWeatherByCity: ({ city: string }) => Promise<Location>,
  setError: ({ message: string } | null) => void,
  children: React.Node,
};

export const WidgetContainer = ({
  locations,
  getCurrentWeatherByCoords,
  getCurrentWeatherByCity,
  setLocations,
  setError,
  children,
}: Props): React.Node => {
  const geoLocation = useGeolocation();
  const isRequestByGeoComplete = React.useRef(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const shouldRequestWeatherByGeo =
    !isRequestByGeoComplete.current &&
    !locations.length &&
    !geoLocation.error &&
    geoLocation.latitude;

  React.useEffect(() => {
    if (shouldRequestWeatherByGeo) {
      setIsLoading(true);

      (async () => {
        try {
          const location = await getCurrentWeatherByCoords({
            lat: geoLocation.latitude,
            lon: geoLocation.longitude,
          });

          isRequestByGeoComplete.current = true;
          setLocations([...locations, location]);
          setError(null);
        } catch (e) {
          setError({ message: 'Failed to load location by geo' });
        }

        setIsLoading(false);
      })();
    }
  }, [
    geoLocation.latitude,
    geoLocation.longitude,
    getCurrentWeatherByCoords,
    shouldRequestWeatherByGeo,
    setLocations,
    locations,
    setError,
  ]);

  const loadSeveralLocations = React.useCallback(
    async (locations) => {
      const result = await Promise.allSettled(
        locations.map(({ city }) => getCurrentWeatherByCity({ city }))
      );

      return result.reduce(
        (acc, item) =>
          item.status === 'fulfilled'
            ? { ...acc, [item.value.id]: item.value }
            : acc,
        {}
      );
    },
    [getCurrentWeatherByCity]
  );

  const locationsToUpdate = React.useMemo(
    () => collectLocationsToUpdate(locations),
    [locations]
  );

  React.useEffect(() => {
    if (!isLoading && locationsToUpdate.length) {
      setIsLoading(true);

      (async () => {
        try {
          const updatedLocations = await loadSeveralLocations(
            locationsToUpdate
          );
          const mergedLocations = locations.map((location) =>
            updatedLocations[location.id]
              ? updatedLocations[location.id]
              : location
          );

          setLocations(mergedLocations);
          setError(null);
        } catch (e) {
          setError({ message: 'Failed to update locations' });
        }
        setIsLoading(false);
      })();
    }
  }, [
    isLoading,
    loadSeveralLocations,
    locationsToUpdate,
    locations,
    setLocations,
    setError,
  ]);

  return (
    <Container className="widget" fluid>
      <Row>
        <Col>{children}</Col>
      </Row>
    </Container>
  );
};
