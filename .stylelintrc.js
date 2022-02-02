module.exports = {
  extends: ['stylelint-config-recommended-scss'],
  defaultSeverity: 'error',
  plugins: ['stylelint-scss'],
  rules: {
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
    'no-invalid-position-at-import-rule': null,
    'scss/at-extend-no-missing-placeholder': null,
    'scss/at-import-no-partial-leading-underscore': null,
    'scss/at-import-partial-extension': null,
    'scss/comment-no-empty': null,
    'scss/no-global-function-names': null,
    'scss/operator-no-newline-after': null,
    'scss/operator-no-unspaced': null,
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['/^clr-/', '/^cds-/', '_'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['/^ng-deep/'],
      },
    ],
  },
};
