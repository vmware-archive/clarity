const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './index.js'),
  resolve: {
    extensions: ['.js'],
    alias: {
      '@clr/core': path.resolve(__dirname, '../../../dist/clr-core'),
    },
  },
  output: {
    filename: 'webpack.bundle.js',
    path: path.resolve(__dirname, '../../../dist/test-bundles'),
  },
};
