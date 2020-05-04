const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = {
  stories: ['../**/*.stories.(ts|mdx)'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    'storybook-addon-designs',
    '@storybook/addon-a11y',
    '@storybook/addon-cssresources',
    '@storybook/addon-storysource',
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts)$/,
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
          options: {
            configFileName: 'src/clr-core/.storybook/tsconfig.json',
          },
        },
      ],
    });

    config.resolve.extensions.push('.ts');
    config.resolve.plugins = [new TsConfigPathsPlugin({ configFileName: 'src/clr-core/.storybook/tsconfig.json' })];

    // https://github.com/storybookjs/storybook/blob/next/app/web-components/README.md
    const webComponentsRule = config.module.rules.find(
      rule => rule.use && rule.use.options && rule.use.options.babelrc === false
    );
    // disable dependency compilation
    webComponentsRule.test = [];

    return config;
  },
};
