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
  '@typescript-eslint/no-explicit-any': OFF, // would LOVE to turn this on
  // cause slow analysis on TS files with Storybook, see
  // https://github.com/typescript-eslint/typescript-eslint/issues/1856
  '@typescript-eslint/no-use-before-define': OFF,
  '@typescript-eslint/ban-types': [ERROR, { types: bannedTSTypes }],
  '@typescript-eslint/explicit-member-accessibility': [ERROR, { accessibility: 'no-public' }],
  'import/extensions': [ERROR, 'ignorePackages'],
  'no-restricted-imports': [
    ERROR,
    {
      paths: [
        'ramda',
        'rxjs',
        'rxjs/operators',
        {
          name: '@cds/core/icon',
          message:
            'Please import icon service and icons directly https://clarity.design/storybook/core/?path=/story/internal-documentation-using-icons--page',
        },
      ],
      patterns: ['lit-element', 'lit-element/*', 'lit-html', 'lit-html/*', '@angular/*'],
    },
  ],
  'lit-a11y/img-redundant-alt': [OFF],
  'lit-a11y/anchor-is-valid': [OFF],
  'lit-a11y/alt-text': [OFF],
  'lit-a11y/click-events-have-key-events': [OFF],
};

const parserOptions = {
  project: 'tsconfig.eslint.json',
  tsconfigRootDir: __dirname,
  sourceType: 'module',
};

const plugins = ['lit-a11y', 'lit', 'eslint-plugin-wc'];

const overrides = [
  {
    files: ['build/**/*'],
    rules: {
      'import/extensions': OFF,
    },
  },
];

const config = {
  extends: ['../../.eslintrc.js', 'plugin:lit-a11y/recommended', 'plugin:lit/recommended', 'plugin:wc/recommended'],
  parserOptions,
  rules,
  plugins,
  overrides,
};

module.exports = config;
