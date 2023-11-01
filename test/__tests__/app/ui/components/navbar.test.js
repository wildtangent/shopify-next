import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import NavBar from '@/app/ui/components/navbar';

describe('<NavBar />', () => {
  it('should render the Navbar', () => {
    render(<NavBar/>);

    const navElement = screen.getByText('Home')

    expect(navElement).toBeInTheDocument()
  });
});
