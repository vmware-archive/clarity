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
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    curly: 'error',
    eqeqeq: 'error',
    'jasmine/no-focused-tests': 'error',
    'no-irregular-whitespace': ['error', { skipTemplates: true }],
    'no-var': 'error',
    'unused-imports/no-unused-imports-ts': 'error',
  },
};
