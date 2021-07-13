const scopes = ['docs'];

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 'scope-enum': [2, 'always', scopes],
    'header-max-length': [2, 'always', 100],
  },
};
