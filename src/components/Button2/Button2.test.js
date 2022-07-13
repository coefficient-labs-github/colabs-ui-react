import React, { useState } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Button2';

const ButtonTest = () => {
  const [value, setValue] = useState('none clicked');
  return (
    <>
      <span>{value}</span>
      <Button text="ENABLED" onClick={() => setValue('enabled clicked')} />
      <Button
        text="DISABLED"
        disabled
        onClick={() => setValue('disabled clicked')}
      />
    </>
  );
};

describe('With props', () => {
  test('renders', async () => {
    render(<ButtonTest />);
    fireEvent.click(screen.getByText('ENABLED'));
    fireEvent.click(screen.getByText('DISABLED'));
    expect(screen.getByText('enabled clicked')).toBeInTheDocument();
  });
});
