import React, { useState } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Textfield from './Textfield';

const TextfieldTest = () => {
  const [value, setValue] = useState('');
  return (
    <Textfield
      placeholder="Test Placeholder"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      icon={<span />}
      type="text"
      iconPos="right"
      label="Text Label"
      required
      minLength={10}
      maxLength={20}
      rows={5}
      aria-label="test-input"
      autoComplete
    />
  );
};

describe('With props', () => {
  test('renders', async () => {
    render(<TextfieldTest />);
    fireEvent.change(screen.getByLabelText('Text Label'), {
      target: { value: 'newTextInInput' },
    });
    expect(screen.getByLabelText('test-input').value).toBe('newTextInInput');
  });
});
