module.exports = {
  baseUrl: '',
  retries: 2,
  reporter: 'dot',
  resembleOptions: {
    output: {
      errorColor: {
        red: 255,
        green: 0,
        blue: 255,
      },
      errorType: 'flat',
      transparency: 0.3,
      outputDiff: true,
    },
    scaleToSameSize: false,
  },
  puppeteerConfig: {
    defaultViewport: {
      width: 1240,
      height: 1600,
    },
  },
  basePath: '',
  currentPath: '',
  diffPath: '',
};
