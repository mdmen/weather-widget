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
