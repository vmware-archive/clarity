module.exports = ctx => ({
  parser: '',
  plugins: [
    require('autoprefixer')({
      browsers: ['last 2 versions', 'ie 11', '> 5%', 'Firefox > 35', 'Chrome > 35'],
      cascade: false,
    }),
    require('postcss-prefix-selector')({
      prefix: '.clr-',
      transform: function(prefix, selector, prefixedSelector) {
        const regex = /\.((?!clr-)[a-zA-Z0-9_\-]*)/g;
        const result = regex.exec(selector);
        let updated = selector;
        if (result) {
          updated = updated.replace(regex, prefix + '$1');

          if (ctx.env === 'deprecated') {
            return selector + ', ' + updated;
          }
        }
        return updated;
      },
    }),
  ],
});
