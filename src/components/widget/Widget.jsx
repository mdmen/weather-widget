// @flow

import React, { useState, useEffect, useCallback } from 'react';
import { useGeolocation, useLocalStorage } from 'react-use';
import { WidgetSpinner, WidgetContainer } from './layout';
import { WidgetLocation } from './WidgetLocation';
import { WidgetMenu } from './WidgetMenu';
import { useApi } from '../../common/api';
import isEmpty from 'lodash/isEmpty';
import { localStorageLocationsKey } from '../../common/config';

export const Widget = () => {
  const geoLocation = useGeolocation();
  const { getCurrentWeatherByCoords, getCurrentWeatherByCity } = useApi();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [locations, setLocation] = useLocalStorage(
    localStorageLocationsKey,
    []
  );

  const shouldRequestLocation =
    isEmpty(locations) &&
    !geoLocation.loading &&
    !geoLocation.error &&
    geoLocation.latitude;

  useEffect(() => {
    if (shouldRequestLocation) {
      (async () => {
        const location = await getCurrentWeatherByCoords({
          lat: geoLocation.latitude,
          lon: geoLocation.longitude,
        });

        setLocation([...locations, location]);
      })();
    }
  }, [
    geoLocation.error,
    geoLocation.latitude,
    geoLocation.loading,
    geoLocation.longitude,
    locations,
    setLocation,
    shouldRequestLocation,
    getCurrentWeatherByCoords,
  ]);

  const shouldOpenMenu =
    !isMenuOpen &&
    isEmpty(locations) &&
    !geoLocation.loading &&
    geoLocation.error;

  useEffect(() => {
    if (shouldOpenMenu) {
      setMenuOpen(true);
    }
  }, [
    geoLocation.error,
    geoLocation.loading,
    isMenuOpen,
    locations,
    shouldOpenMenu,
  ]);

  const addLocation = useCallback(
    (city) => {
      (async () => {
        const location = await getCurrentWeatherByCity({ city });

        setLocation([...locations, location]);
      })();
    },
    [getCurrentWeatherByCity, locations, setLocation]
  );

  const removeLocation = useCallback(
    (id) => {
      setLocation(locations.filter((location) => location.id !== id));
    },
    [locations, setLocation]
  );

  return (
    <WidgetContainer>
      {geoLocation.loading && isEmpty(locations) && <WidgetSpinner />}
      {isMenuOpen && (
        <WidgetMenu
          locations={locations}
          addLocation={addLocation}
          removeLocation={removeLocation}
        />
      )}
      {!isMenuOpen &&
        !isEmpty(locations) &&
        locations.map((location) => (
          <WidgetLocation key={location.id} location={location} />
        ))}
    </WidgetContainer>
  );
};
