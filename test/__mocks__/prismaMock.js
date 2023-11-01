import { mockDeep, mockReset } from 'jest-mock-extended'

import prisma from '../../src/db/client';

jest.mock('../../src/db/client', () => ({
  __esModule: true,
  default: mockDeep(),
}))

beforeEach(() => {
  mockReset(prismaMock);
});

export const prismaMock = prisma