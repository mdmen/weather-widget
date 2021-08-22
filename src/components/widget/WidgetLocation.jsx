import React from 'react';
import PropTypes from 'prop-types';
import upperFirst from 'lodash/upperFirst';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { WithIcon } from '../icons/Icon';

export const WidgetLocation = ({ location }) => {
  const { city, country, temp, image, tempFeelsLike, description } = location;
  return (
    <Card>
      <Card.Header as="h5">
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

WidgetLocation.propTypes = {
  location: PropTypes.object,
};
