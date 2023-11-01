import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Simple from '@/app/simple/page';

describe('Simple', () => {
  it('renders a heading', () => {
    render(<Simple />)

    const heading = screen.getByRole('heading', {
      name: /Simple Page/i,
    })

    expect(heading).toBeInTheDocument()
  })
})