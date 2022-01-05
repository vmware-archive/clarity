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
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  ignorePatterns: ['.eslintrc.js', 'postcss.config.js', 'webpack.config.js'],
  plugins: ['@typescript-eslint', 'jasmine', 'clarity', 'unused-imports'],
  rules: {
    curly: 'error',
    eqeqeq: 'error',
    'no-var': 'error',
    '@typescript-eslint/no-explicit-any': OFF, // Would LOVE to turn this on
    '@typescript-eslint/explicit-function-return-type': OFF, // TOO MUCH WORK AT THE MOMENT
    '@typescript-eslint/explicit-module-boundary-types': OFF, // SAME AS ABOVE; Errors on the same issues
    '@typescript-eslint/no-use-before-define': OFF, // Lots of complaints in tests.
    '@typescript-eslint/no-unused-vars': ERROR, // TypeScript is catching this
    '@typescript-eslint/no-var-requires': ERROR, // Using raw-loader in Storybook
    '@typescript-eslint/ban-ts-comment': ERROR, // There are some quirks where we do want to use ts-ignore, but should be rare
    'unused-imports/no-unused-imports-ts': ERROR, // It's not covered by default checks; needs external plug-in
    'clarity/no-barrel-imports': OFF, // Custom check to ensure we only import directly from files
    'jasmine/no-focused-tests': ERROR, // Prevent focused tests
    'no-irregular-whitespace': [ERROR, { skipTemplates: true }], // Turn of whitespace checking inside of `` templates
    'no-prototype-builtins': OFF,
  },
};
