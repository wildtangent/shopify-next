import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { prismaMock } from '../../../__mocks__/prismaMock';
import renderAsync from '../../../__support__/renderAsync';

import UsersIndex from '@/app/users/page';

describe('UsersIndex', () => {
  it('renders the Users heading', async () => {
    const users = [{
      id: 1,
      email: 'rich@prisma.io',
      name: 'Rich Haines',
    }];

    prismaMock.user.findMany.mockResolvedValue(users)

    await renderAsync(<UsersIndex id="bar" />);

    const heading = screen.getByRole('heading', {
      name: /Users/i,
    })

    expect(heading).toBeInTheDocument();
  });

  it('renders a list of users', async () => {
    const users = [{
      id: 1,
      email: 'rich@prisma.io',
      name: 'Rich Haines',
    }, {
      id: 2,
      email: 'bob@prisma.io',
      name: 'Bobs',
    }];

    prismaMock.user.findMany.mockResolvedValue(users)

    await renderAsync(<UsersIndex id="bar" />);

    const usernames = ['Rich Haines', 'Bobs'];

    usernames.forEach((username) => {
      const user = screen.getByText(username);
      expect(user).toBeInTheDocument();
    });
  });
});