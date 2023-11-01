import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import About from '@/app/about/page';

describe('About', () => {
  it('renders a heading', () => {
    render(<About />)

    const heading = screen.getByRole('heading', {
      name: /About Page/i,
    })

    expect(heading).toBeInTheDocument()
  })
})