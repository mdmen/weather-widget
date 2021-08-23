// @flow
import * as React from 'react';
import upperFirst from 'lodash/upperFirst';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { shouldUpdateLocation } from '../../common/utils';
import { WithIcon } from '../icons/WithIcon';
import type { Location } from '../../common/types';

type Props = {
  location: Location,
  loadLocation: (city: string) => void,
};

export const WidgetLocation = ({
  location,
  loadLocation,
}: Props): React.Node => {
  const { city, country, temp, image, tempFeelsLike, description } = location;

  React.useEffect(() => {
    if (shouldUpdateLocation(location)) {
      loadLocation(city);
    }
  }, [city, loadLocation, location]);

  return (
    <Card className="mb-3">
      <Card.Header as="h5" className="pe-5">
        {city}, <small>{country}</small>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <Image src={image} alt={description} />
          </Col>
          <Col>{temp}</Col>
        </Row>
        <Row>
          <Col>
            Feels like {tempFeelsLike}. {upperFirst(description)}
          </Col>
        </Row>
        <Row>
          <Col>
            <WithIcon name="wind">wind</WithIcon>
          </Col>
          <Col>
            <WithIcon name="speedometer2">Pressure</WithIcon>
          </Col>
        </Row>
        <Row>
          <Col>
            <WithIcon name="moisture">Humidity</WithIcon>
          </Col>
          <Col>
            <WithIcon name="water">Dew point</WithIcon>
          </Col>
        </Row>
        <Row>
          <Col>
            <WithIcon name="eye">Visibility</WithIcon>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
