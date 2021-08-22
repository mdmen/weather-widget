import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

export const WidgetContainer = ({ children }) => (
  <Container fluid>
    <Row>
      <Col>{children}</Col>
    </Row>
  </Container>
);
WidgetContainer.propTypes = {
  children: PropTypes.node,
};

export const WidgetSpinner = () => (
  <Spinner animation="border" variant="primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
);
