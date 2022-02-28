const rollupStorybook = require('../rollup.storybook');

module.exports = {
  staticDirs: ['./public'],
  stories: ['../src/**/*.stories.{ts,mdx}', '../docs/**/*.stories.{ts,mdx}'],
  rollupConfig(config) {
    return rollupStorybook.getConfig(config);
  },
};
