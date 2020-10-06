module.exports = class BaseReporter {
  config = {};
  constructor(props) {
    this.config = Object.assign(this.config, props);
  }

  pass(test) {}
  fail(test) {}
  retry(test) {}
  info(text) {}
  error(text, error) {}
  report() {}
};
