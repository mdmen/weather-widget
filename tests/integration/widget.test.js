import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Widget } from 'components/widget/Widget';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { mockGeolocation } from '../mocks/geolocation';

describe('Widget', () => {
  beforeEach(() => {
    mockGeolocation().withErrorResponse();
  });

  afterEach(() => {
    jest.clearAllMocks();
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

  test('Should add/move/delete locations', async () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <Widget />
      </DndProvider>
    );

    let button = await screen.findByLabelText(/Open settings/i);
    userEvent.click(button);

    // add locations

    const input = screen.getByLabelText(/Add location/i);
    userEvent.type(input, 'Moscow{Enter}');

    let location = await screen.findByRole('listitem');
    expect(location).toHaveTextContent(/Moscow/i);

    userEvent.type(input, 'London{Enter}');
    await screen.findByText(/London/i);

    let [firstLocation, secondLocation] = screen.getAllByRole('listitem');
    expect(firstLocation).toHaveTextContent(/Moscow/i);
    expect(secondLocation).toHaveTextContent(/London/i);

    // move locations

    const [firstDragBtn] = screen.getAllByLabelText(/Drag location/i);
    fireEvent.dragStart(firstDragBtn);
    fireEvent.drop(secondLocation);

    [firstLocation, secondLocation] = screen.getAllByRole('listitem');
    expect(firstLocation).toHaveTextContent(/London/i);
    expect(secondLocation).toHaveTextContent(/Moscow/i);

    // delete locations

    const deleteButtons = screen.getAllByLabelText(/Delete location/i);
    deleteButtons.forEach((button) => {
      userEvent.click(button);
    });
    location = screen.queryByRole('listitem');
    expect(location).not.toBeInTheDocument();
  });

  test('Should show an alert', async () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <Widget />
      </DndProvider>
    );

    // if no locations

    let alert = await screen.findByRole(/alert/i);
    expect(alert).toHaveTextContent(
      /There are no locations\. Please select at least one/i
    );

    // if failed to load location

    let button = await screen.findByLabelText(/Open settings/i);
    userEvent.click(button);

    const input = screen.getByLabelText(/Add location/i);
    userEvent.type(input, 'Moscow{Enter}');
    await screen.findByRole(/listitem/i);
    userEvent.type(input, 'Wrong input{Enter}');

    alert = await screen.findByRole(/alert/i);
    expect(alert).toHaveTextContent(/Failed to load location/i);
  });
});
