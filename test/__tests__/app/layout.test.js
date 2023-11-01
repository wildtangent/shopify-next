import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import RootLayout from '@/app/layout';

describe('RootLayout', () => {
  it.skip('renders the root layout', () => {
    render(
      <RootLayout>
        <h1>Hello World!</h1>
      </RootLayout>
    );
  });
});