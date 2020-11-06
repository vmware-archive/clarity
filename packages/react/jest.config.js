module.exports = {
  roots: ['./'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    },
  },
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  moduleNameMapper: {
    '@cds/(.*)': '<rootDir>/../core/dist/$1',
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!@cds/core|lit-element|lit-html|ramda)'],
};
