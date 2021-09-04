// @flow
import * as React from 'react';
import Form from 'react-bootstrap/Form';

type Props = {
  isDisabled: boolean,
  loadLocation: (city: string) => Promise<void>,
};

export const WidgetMenuInput = ({
  isDisabled,
  loadLocation,
}: Props): React.Node => {
  const [value, setValue] = React.useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    loadLocation(value);
    setValue('');
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Form onSubmit={submitHandler} name="location">
      <Form.Group>
        <Form.Label htmlFor="add-location">Add location</Form.Label>
        <Form.Control
          id="add-location"
          disabled={isDisabled}
          type="text"
          value={value}
          onChange={onChange}
        />
      </Form.Group>
    </Form>
  );
};
