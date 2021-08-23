// @flow
import * as React from 'react';
import upperFirst from 'lodash/upperFirst';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useSafeInvoke } from '../../common/hooks';
import { shouldUpdateLocation } from '../../common/utils';
import { WithIcon } from '../icons/WithIcon';
import type { Location } from '../../common/types';

type Props = {
  location: Location,
  loadLocation: (city: string) => Promise<void>,
};

export const WidgetLocation = ({
  location,
  loadLocation,
}: Props): React.Node => {
  const [isLoading, setIsLoading] = React.useState(false);
  const safeInvoke = useSafeInvoke();
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
    (async () => {
      if (!isLoading && shouldUpdateLocation(location)) {
        setIsLoading(true);
        await loadLocation(city);
        safeInvoke(setIsLoading, false);
      }
    })();
  }, [city, isLoading, loadLocation, location, safeInvoke]);

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
            <WithIcon name="wind">wind: {wind}m/s</WithIcon>
          </Col>
          <Col>
            <WithIcon name="speedometer2">Pressure: {pressure}</WithIcon>
          </Col>
        </Row>
        <Row className="mb-1">
          <Col>
            <WithIcon name="moisture">Humidity: {humidity}%</WithIcon>
          </Col>
          <Col>
            <WithIcon name="eye">Visibility: {visibility}km</WithIcon>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
