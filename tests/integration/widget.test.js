import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Widget } from '../../src/components/widget/Widget';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { mockGeolocation } from '../mocks/geolocation';

describe('Widget', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('After first mount should show alert with no locations message', async () => {
    mockGeolocation().withErrorResponse();
    render(<Widget />);

    const alert = await screen.findByRole(/alert/i);
    expect(alert).toHaveTextContent(
      /There are no locations. Please select at least one/i
    );
  });

  test('Click on toggler should open/close settings', async () => {
    render(<Widget />);
    let button = await screen.findByLabelText(/Open settings/i);
    expect(screen.queryByText('Settings')).not.toBeInTheDocument();

    userEvent.click(button);

    button = screen.getByLabelText(/Close settings/i);
    expect(screen.getByRole('heading')).toHaveTextContent(/Settings/i);

    userEvent.click(button);

    expect(screen.queryByText('Settings')).not.toBeInTheDocument();
  });

  test('Should add/remove location', async () => {
    mockGeolocation().withErrorResponse();
    render(
      <DndProvider backend={HTML5Backend}>
        <Widget />
      </DndProvider>
    );

    let button = await screen.findByLabelText(/Open settings/i);
    userEvent.click(button);

    // add locations

    const input = screen.getByLabelText(/Add location/i);
    const form = screen.getByRole('form');
    fireEvent.change(input, { target: { value: 'Moscow' } });
    fireEvent.submit(form);

    const location = await screen.findByRole('listitem');
    expect(location).toHaveTextContent(/Moscow/i);

    fireEvent.change(input, { target: { value: 'Dublin' } });
    fireEvent.submit(form);

    await screen.findByText(/Dublin/i);
    const locations = screen.getAllByRole('listitem');
    expect(locations[0]).toHaveTextContent(/Moscow/i);
    expect(locations[1]).toHaveTextContent(/Dublin/i);

    // TODO remove locations
  });
});
