module.exports = {
  extends: '../../.eslintrc.js',
  // Only adding rules that override the defaults or enforce new standards
  rules: {
    '@typescript-eslint/no-explicit-any': 'off', // Would LOVE to turn this on
    '@typescript-eslint/explicit-function-return-type': 'off', // TOO MUCH WORK AT THE MOMENT
    '@typescript-eslint/no-use-before-define': 'off', // Lots of complaints in tests.
    '@typescript-eslint/no-unused-vars': 'off', // TypeScript is catching this
    '@typescript-eslint/ban-ts-ignore': 'off', // There are some quirks where we do want to use ts-ignore, but should be rare
    'clarity/no-barrel-imports': 'error', // Custom check to ensure we only import directly from files
    'jasmine/no-focused-tests': 'error', // Prevent focused tests
    'no-irregular-whitespace': ['error', { skipTemplates: true }], // Turn of whitespace checking inside of `` templates
    'no-prototype-builtins': 'off',
  },
};
