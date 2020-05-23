const OFF = 0;
const WARN = 1;
const ERROR = 2;

// some temporary relaxation for spec and story files
const overrideRules = {
  '@typescript-eslint/explicit-function-return-type': 0, // TOO MUCH WORK AT THE MOMENT ;)
};

const overrides = [
  {
    files: ['*.stories.ts', '*.spec.ts'],
    rules: overrideRules,
  },
];

const bannedTSTypes = {
  Array: 'Use [] instead.',
  Object: 'Use {} instead.',
  Boolean: 'Use `boolean` instead.',
  Number: 'Use `number` instead.',
  String: 'Use `string` instead.',
};

// only adding rules that override the defaults or enforce new standards
const rules = {
  '@typescript-eslint/explicit-function-return-type': [ERROR, { allowExpressions: true }],
  '@typescript-eslint/no-explicit-any': OFF, // would LOVE to turn this on
  // cause slow analysis on TS files with Storybook, see
  // https://github.com/typescript-eslint/typescript-eslint/issues/1856
  '@typescript-eslint/no-use-before-define': OFF,
  '@typescript-eslint/ban-types': [ERROR, { types: bannedTSTypes }],
  '@typescript-eslint/explicit-member-accessibility': [ERROR, { accessibility: 'no-public' }],
  'no-restricted-imports': [
    ERROR,
    {
      paths: ['ramda', 'rxjs', 'rxjs/operators'],
      patterns: ['lit-element/*', '@angular/*'],
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
  overrides,
};

module.exports = config;
