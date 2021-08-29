import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Widget } from '../../src/components/widget/Widget';
import { mockGeolocation } from '../mocks/geolocation';
import { mockFetch } from '../mocks/fetch';
import locationResponse from '../mocks/response/location.json';

describe('Widget menu', () => {
  beforeAll(() => {
    mockFetch().withSuccessResponse(locationResponse);
    mockGeolocation().withErrorResponse();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test('Click on toggler should open/close settings', async () => {
    render(<Widget />);
    let button = await screen.findByLabelText(/Open settings/i);
    expect(screen.queryByText('Settings')).not.toBeInTheDocument();

    userEvent.click(button);

    button = screen.getByLabelText(/Close settings/i);
    expect(button).toHaveFocus();
    expect(screen.getByText('Settings')).toBeInTheDocument();

    userEvent.click(button);

    button = screen.getByLabelText(/Open settings/i);
    expect(button).toHaveFocus();
  });
});
