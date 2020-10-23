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

const rules = {
  '@typescript-eslint/no-explicit-any': OFF, // Would LOVE to turn this on
  '@typescript-eslint/explicit-function-return-type': OFF, // TOO MUCH WORK AT THE MOMENT
  '@typescript-eslint/no-use-before-define': OFF, // Lots of complaints in tests.
  '@typescript-eslint/no-unused-vars': OFF, // TypeScript is catching this
  '@typescript-eslint/no-var-requires': OFF, // Using raw-loader in Storybook
  '@typescript-eslint/ban-ts-ignore': OFF, // There are some quirks where we do want to use ts-ignore, but should be rare
  'unused-imports/no-unused-imports-ts': ERROR, // It's not covered by default checks; needs external plug-in
  'clarity/no-barrel-imports': ERROR, // Custom check to ensure we only import directly from files
  'jasmine/no-focused-tests': ERROR, // Prevent focused tests
  'no-irregular-whitespace': [ERROR, { skipTemplates: true }], // Turn of whitespace checking inside of `` templates
  'no-prototype-builtins': OFF,
};
const overrides = [
  {
    files: ['*.stories.ts'],
    rules: {
      '@typescript-eslint/no-var-requires': 1,
    },
    plugins: ['unused-imports'],
  },
];

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
