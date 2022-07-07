import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../defaultTheme';

type WrapperProps = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Wrapper({ children }: WrapperProps) {
  return (
    // <ThemeProvider theme={theme}>
    <div
      style={{
        background: '#ffffff',
        padding: '1rem',
        margin: 'auto',
      }}
    >
      {children}
    </div>
    // </ThemeProvider>
  );
}
