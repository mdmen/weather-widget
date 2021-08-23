// @flow
import * as React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { WidgetMenuInput } from './WidgetMenuInput';
import { WidgetMenuLocation } from './WidgetMenuLocation';
import type { Location } from '../../common/types';

type Props = {
  locations: Array<Location>,
  removeLocation: (id: string) => void,
  loadLocation: (city: string) => void,
  moveLocation: (dragIndex: number, hoverIndex: number) => void,
};

export const WidgetMenu = ({
  locations,
  loadLocation,
  removeLocation,
  moveLocation,
}: Props): React.Node => {
  return (
    <Card className="widget-menu">
      <Card.Header as="h5">Settings</Card.Header>
      <Card.Body>
        <ListGroup variant="flush" className="mb-3">
          {locations.map((location, index) => (
            <WidgetMenuLocation
              key={location.id}
              index={index}
              locations={locations}
              location={location}
              removeLocation={removeLocation}
              moveLocation={moveLocation}
            />
          ))}
        </ListGroup>
        <WidgetMenuInput loadLocation={loadLocation} />
      </Card.Body>
    </Card>
  );
};
