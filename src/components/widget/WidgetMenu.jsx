// @flow
import * as React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { WidgetMenuInput } from './WidgetMenuInput';
import { WidgetMenuLocation } from './WidgetMenuLocation';
import { maxLocationsCount } from '../../common/config';
import type { Location } from '../../common/types';

type Props = {
  locations: Array<Location>,
  removeLocation: (id: number) => void,
  loadLocation: (city: string) => Promise<void>,
  swapLocations: (dragIndex: number, hoverIndex: number) => void,
};

export const WidgetMenu = ({
  locations,
  loadLocation,
  removeLocation,
  swapLocations,
}: Props): React.Node => (
  <Card className="widget-menu">
    <Card.Header as="h5">Settings</Card.Header>
    <Card.Body>
      <ListGroup variant="flush" className="mb-3" role="list">
        {locations.map((location, index) => (
          <WidgetMenuLocation
            key={location.id}
            index={index}
            location={location}
            removeLocation={removeLocation}
            swapLocations={swapLocations}
          />
        ))}
      </ListGroup>
      <WidgetMenuInput
        loadLocation={loadLocation}
        isDisabled={locations.length >= maxLocationsCount}
      />
    </Card.Body>
  </Card>
);
