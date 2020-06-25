// used by our jest test suite; not used for running the dev app
module.exports = {
  presets: [['@babel/preset-env', { targets: { esmodules: true } }]],
};
