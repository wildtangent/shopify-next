import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/test/__mocks__/prismaMock.js'],
  clearMocks: true,
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    '!src/**/*.cy.{js,jsx}',
    'src/**/*.{js,jsx}',

  ],
  coveragePathIgnorePatterns: [

  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
}

export default createJestConfig(config)