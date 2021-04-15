import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('With props', () => {
  test('renders', async () => {
    render(<Text>Test Text</Text>);
    expect(screen.getByText('Test Text')).toBeInTheDocument();
  });
});
