// @flow
import * as React from 'react';
import Form from 'react-bootstrap/Form';

type Props = {
  loadLocation: (city: string) => void,
};

export const WidgetMenuInput = ({ loadLocation }: Props): React.Node => {
  const [value, setValue] = React.useState('');

  const submitHandler = React.useCallback(
    (event) => {
      event.preventDefault();

      loadLocation(value);
      setValue('');
    },
    [loadLocation, value]
  );

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group>
        <Form.Label>Add location</Form.Label>
        <Form.Control type="text" value={value} onChange={onChange} />
      </Form.Group>
    </Form>
  );
};
