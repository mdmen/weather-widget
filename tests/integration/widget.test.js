import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Widget } from '../../src/components/widget/Widget';
import { mockGeolocation } from '../mocks/geolocation';

describe('Widget', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test('After first mount should show alert with no locations text', async () => {
    mockGeolocation().withErrorResponse();
    render(<Widget />);

    const alert = await screen.findByRole(/alert/i);
    expect(alert).toHaveTextContent(
      /There are no locations. Please select at least one/i
    );
  });
});
