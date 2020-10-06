const path = require('path');
const BaseReporter = require('./base-reporter');

module.exports = class ConsoleReporter extends BaseReporter {
  constructor(props) {
    super(props);
  }
  pass(test) {
    console.log(`${test} passed.`);
  }
  fail(test, options) {
    console.error(`${test} faild. ${options.mismatch}`);
  }
  retry(test, times) {
    console.warn(`${test} retries ${times} times`);
  }
  info(text) {
    console.info(text);
  }
  error(text, error) {
    console.error(`\n${text}\n`);
    if (error) console.error(error);
  }
  report(errors, info) {
    if (errors.length) {
      errors.forEach(error => {
        if (error.type === 'fail-to-match') {
          console.log(`\n${error.test} fail:`);
          console.log(`\t base    : ${path.join(this.config.basePath, error.filename)}`);
          console.log(`\t current : ${path.join(this.config.currentPath, error.filename)}`);
          console.log(`\t diff    : ${path.join(this.config.diffPath, error.filename)}`);
        }
      });
      console.log(`\n\t${errors.length} faild tests\n`);
    }
    console.log(`\n everything is OK no failing tests`);
  }
};
