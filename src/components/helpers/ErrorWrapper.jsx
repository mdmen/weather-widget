import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';

export class ErrorWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    return (
      <>
        {this.state.hasError && (
          <Alert variant="danger">
            Error has occurred. May be shown incorrect data.
          </Alert>
        )}
        {this.props.children}
      </>
    );
  }
}

ErrorWrapper.propTypes = {
  children: PropTypes.node,
};
