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
    curly: 'error',
    eqeqeq: 'error',
    'no-var': 'error',
    '@typescript-eslint/no-explicit-any': OFF, // Would LOVE to turn this on
    '@typescript-eslint/no-unused-vars': ERROR, // TypeScript is catching this
    '@typescript-eslint/no-var-requires': ERROR, // Using raw-loader in Storybook
    'unused-imports/no-unused-imports-ts': ERROR, // It's not covered by default checks; needs external plug-in
    'jasmine/no-focused-tests': ERROR, // Prevent focused tests
    'no-irregular-whitespace': [ERROR, { skipTemplates: true }], // Turn of whitespace checking inside of `` templates
  },
};
