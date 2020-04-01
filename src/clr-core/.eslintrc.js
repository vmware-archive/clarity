module.exports = {
  extends: '../../.eslintrc.js',
  // Only adding rules that override the defaults or enforce new standards
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off', // TOO MUCH WORK AT THE MOMENT
    '@typescript-eslint/no-explicit-any': 'off', // Would LOVE to turn this on

    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Array: 'Use [] instead.',
          Object: 'Use {} instead.',
          Boolean: 'Use `boolean` instead.',
          Number: 'Use `number` instead.',
          String: 'Use `string` instead.',
        },
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: ['ramda', 'rxjs', 'rxjs/operators'],
        patterns: ['lit-element/*', '@angular/*'],
      },
    ],
  },
};
