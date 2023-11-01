const prisma = jest.requireActual('../../../src/db/client');

describe('prisma', () => {
  it('should be a prisma object', () => {
    expect(prisma).toBeDefined();
  });
});