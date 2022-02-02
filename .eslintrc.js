/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jasmine: true,
  },
  extends: ['eslint:recommended', 'plugin:json/recommended-with-comments', 'prettier'],
  plugins: ['license-header'],
  rules: {
    curly: 'error',
    eqeqeq: 'error',
    'no-var': 'error',
    'no-irregular-whitespace': ['error', { skipTemplates: true }],
    'license-header/header': ['error', './.license-header.js'],
  },
  overrides: [
    {
      files: ['**/*.ts'],
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
      plugins: ['license-header', '@typescript-eslint', 'jasmine', 'unused-imports'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        curly: 'error',
        eqeqeq: 'error',
        'jasmine/no-focused-tests': 'error',
        'no-irregular-whitespace': ['error', { skipTemplates: true }],
        'unused-imports/no-unused-imports-ts': 'error',
      },
    },
    {
      files: ['**/*.json'],
      rules: {
        'license-header/header': 'off',
      },
    },
  ],
};
