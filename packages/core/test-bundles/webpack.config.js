const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './index.js'),
  resolve: {
    extensions: ['.js'],
    alias: {
      '@cds/core': path.resolve(__dirname, '../dist/core'),
    },
  },
  output: {
    filename: 'webpack.bundle.js',
    path: path.resolve(__dirname, '../dist/test-bundles'),
    sourceMapFilename: 'webpack.bundle.js.map',
  },
  devtool: 'source-map',
};
