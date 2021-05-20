const rollupStorybook = require('../rollup.storybook');

module.exports = {
  stories: ['../src/**/*.stories.{ts,mdx}', '../docs/**/*.stories.{ts,mdx}'],
  rollupConfig(config) {
    return rollupStorybook.getConfig(config);
  },
};
