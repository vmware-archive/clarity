module.exports = {
  parser: '',
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: ['last 2 versions', 'ie 11', '> 5%', 'Firefox > 35', 'Chrome > 35'],
      cascade: false,
    }),
  ],
};
