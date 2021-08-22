// @flow
import * as React from 'react';
import Alert from 'react-bootstrap/Alert';

type Props = {
  children: React.Node,
};

type State = {
  hasError: boolean,
};

export class ErrorWrapper extends React.Component<Props, State> {
  constructor(props?: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: mixed) {
    console.error(error, errorInfo);
  }

  render(): React.Node {
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
