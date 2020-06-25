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

// only adding rules that override the defaults or enforce new standards
const rules = {
  '@typescript-eslint/explicit-function-return-type': OFF, // too much work at the moment
  '@typescript-eslint/no-explicit-any': OFF, // we have custom events whose type is any; revisit if needed
  '@typescript-eslint/no-use-before-define': OFF,
  '@typescript-eslint/ban-types': [ERROR, { types: bannedTSTypes }],
  '@typescript-eslint/explicit-member-accessibility': [ERROR, { accessibility: 'no-public' }],
  '@typescript-eslint/no-unused-vars': [
    ERROR,
    {
      varsIgnorePattern: 'React|Cds',
    },
  ],
};

const parserOptions = {
  project: 'tsconfig.eslint.json',
  tsconfigRootDir: __dirname,
  sourceType: 'module',
};

const config = {
  extends: '../../.eslintrc.js',
  parserOptions,
  rules,
};

module.exports = config;
