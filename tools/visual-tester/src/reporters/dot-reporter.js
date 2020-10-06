const path = require('path');
const BaseReporter = require('./base-reporter');

module.exports = class DotReporter extends BaseReporter {
  lineCount = 50;
  current = 0;
  total = 0;

  mascot = '🦊';

  constructor(props) {
    super(props);
  }
  pass() {
    this._writeOutput('.');
  }
  fail() {
    this._writeOutput('F');
  }
  retry() {
    this._writeOutput('R');
  }
  info(text) {
    process.stdout.write(`\n${this.mascot} ${text}`);
  }

  error(text, error) {
    process.stdout.write(text + '\n');
    if (error) console.error(error);
  }

  report(errors, info) {
    process.stdout.write('\n\t ---  END TESTING  ---\n\n');
    if (errors.length) {
      errors.forEach(test => {
        if (test.type === 'fail-to-match') {
          process.stdout.write(
            `❌ ${test.test} is not comparable with base image (${round(test.mismatch, 4)}% mismatch)\n`
          );
          process.stdout.write(`\t base    : ${path.join(this.config.basePath, test.filename)}\n`);
          process.stdout.write(`\t current : ${path.join(this.config.currentPath, test.filename)}\n`);
          process.stdout.write(`\t diff    : ${path.join(this.config.diffPath, test.filename)}\n`);
          process.stdout.write('\n');
        }
      });

      process.stdout.write(`\n\t${errors.length} faild tests\n`);

      return;
    }
    process.stdout.write(`\n${this.mascot} everything is OK no failing tests`);
  }

  // Internal
  _writeOutput(result) {
    if (this.total === 0) {
      process.stdout.write('\n\n\t --- BEGIN TESTING --- \n');
    }
    process.stdout.write(result);
    this.current++;
    this.total++;
    if (this.current === this.lineCount) {
      process.stdout.write(` - ${this.total}\n`);
      this.current = 0;
    }
  }
};

function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
