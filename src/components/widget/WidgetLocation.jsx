// @flow
import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { shouldUpdateLocation, upperFirst } from '../../common/utils';
import { Icon } from '../icons/Icon';
import type { Location } from '../../common/types';

type Props = {
  location: Location,
  loadLocation: (city: string) => Promise<void>,
};

export const WidgetLocation = ({
  location,
  loadLocation,
}: Props): React.Node => {
  const {
    city,
    wind,
    humidity,
    pressure,
    country,
    temp,
    image,
    tempFeelsLike,
    description,
    visibility,
  } = location;

  React.useEffect(() => {
    if (shouldUpdateLocation(location)) {
      loadLocation(city);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Card className="mb-3">
      <Card.Header as="h5" className="pe-5">
        {city}, <small>{country}</small>
      </Card.Header>
      <Card.Body>
        <Row className="justify-content-center">
          <Col className="d-flex justify-content-end">
            <Image width="100" height="100" src={image} alt={description} />
          </Col>
          <Col className="align-self-center display-6">
            <b>{temp}</b>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            Feels like {tempFeelsLike}. {upperFirst(description)}
          </Col>
        </Row>
        <Row className="mb-1">
          <Col>
            <Icon name="wind" className="me-1" />
            <span className="align-middle">wind: {wind}m/s</span>
          </Col>
          <Col>
            <Icon name="speedometer2" className="me-1" />
            <span className="align-middle">Pressure: {pressure}</span>
          </Col>
        </Row>
        <Row className="mb-1">
          <Col>
            <Icon name="moisture" className="me-1" />
            <span className="align-middle">Humidity: {humidity}%</span>
          </Col>
          <Col>
            <Icon name="eye" className="me-1" />
            <span className="align-middle">Visibility: {visibility}km</span>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
