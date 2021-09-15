const OFF = 0;
const WARN = 1;
const ERROR = 2;

const bannedTSTypes = {
  Array: 'Use [] instead.',
  Object: 'Use {} instead.',
  Boolean: 'Use `boolean` instead.',
  Number: 'Use `number` instead.',
  String: 'Use `string` instead.',
};

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:lit-a11y/recommended',
    // 'prettier/@typescript-eslint',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    extraFileExtensions: ['.html'],
  },
  ignorePatterns: ['./dist'],
  plugins: ['@typescript-eslint', 'lit-a11y'],
  rules: {
    'accessor-pairs': 'error',
    curly: 'error',
    eqeqeq: 'error',
    'no-var': 'error',
    '@typescript-eslint/ban-types': [ERROR, { types: bannedTSTypes }],
    '@typescript-eslint/explicit-member-accessibility': [ERROR, { accessibility: 'no-public' }],
    '@typescript-eslint/explicit-module-boundary-types': [OFF],
    'no-restricted-imports': [
      ERROR,
      {
        paths: [],
        patterns: ['lit-element/*'],
      },
    ],
  },
};
