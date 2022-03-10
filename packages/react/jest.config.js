module.exports = {
  roots: ['./'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  moduleNameMapper: {
    '@cds/(.*)': '<rootDir>/../core/dist/$1',
    '../converter/react-wrapper.js': '<rootDir>/dist/react/converter/react-wrapper.js',
    '.*(utils/index.js)$': '<rootDir>/dist/react/utils/index.js',
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!@cds/core|lit|@lit|@lit-labs|ramda)'],
};
