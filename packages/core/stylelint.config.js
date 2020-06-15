const rules = {
  'sh-waqar/declaration-use-variable': [
    [
      'color',
      {
        ignoreValues: ['inherit', 'red', 'blue', 'transparent', '/^getSassButtonColor/'],
      },
    ],
  ],
  'meowtec/no-px': [
    true,
    {
      ignore: ['1px', '-1px'],
    },
  ],
  'color-no-hex': true,
  'no-descending-specificity': null,
  'no-duplicate-selectors': null,
  'at-rule-no-unknown': null,
  'scss/at-rule-no-unknown': true,
  'selector-type-no-unknown': [
    true,
    {
      ignoreTypes: ['/^cds-/', '/^_/'],
    },
  ],
  'max-nesting-depth': 3,
  'rule-empty-line-before': [
    'always-multi-line',
    {
      except: ['first-nested'],
      ignore: ['after-comment'],
    },
  ],
};

const config = {
  extends: 'stylelint-config-recommended',
  defaultSeverity: 'error',
  syntax: 'scss',
  plugins: ['stylelint-scss', 'stylelint-declaration-use-variable', 'stylelint-no-px'],
  ignoreFiles: ['./src/styles/tokens/generated/*.scss'],
  rules,
};

module.exports = config;
