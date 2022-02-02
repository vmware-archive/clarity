const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jasmine: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  ignorePatterns: ['.eslintrc.js', 'postcss.config.js', 'webpack.config.js'],
  plugins: ['@typescript-eslint', 'jasmine', 'unused-imports'],
  rules: {
    '@typescript-eslint/no-explicit-any': OFF,
    '@typescript-eslint/no-unused-vars': ERROR,
    '@typescript-eslint/no-var-requires': ERROR,
    curly: 'error',
    eqeqeq: 'error',
    'jasmine/no-focused-tests': ERROR,
    'no-irregular-whitespace': [ERROR, { skipTemplates: true }],
    'no-var': 'error',
    'unused-imports/no-unused-imports-ts': ERROR,
  },
};
