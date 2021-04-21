import { Reporter } from './reporter';
import chalk from 'chalk';

export class SpecReporter implements Reporter {
  stats = {
    success: 0,
    fail: 0,
    ignore: 0,
  };

  failList: any[] = [];

  describe(name: string) {
    console.log(chalk.bold.green(`# ${name}`));
  }

  fail(test: any, options: any = {}) {
    let time = '';
    if (options.startTime) {
      time = ` (${new Date().getTime() - options.startTime} ms)`;
    }
    console.log(chalk.red(`\t${test.name}${time}`));
    this.stats.fail++;
    this.failList.push({ test, error: options.error });
  }

  success(name: string, options: any = {}) {
    let time = '';
    if (options.startTime) {
      time = ` (${new Date().getTime() - options.startTime} ms)`;
    }
    console.log(chalk.green(`\t${name}${time}`));
    this.stats.success++;
  }

  report() {
    console.log(`${this.stats.success + this.stats.fail} test found`);

    if (this.stats.fail > 0) {
      this.failList.forEach((report: any) => {
        const { error, test } = report;

        console.log(chalk.red(test.name + ':'));
        console.error(chalk.red(error));

        if (error && error.name && error.name === 'VisualExpectError') {
          const { basePath, currentPath, diffImage } = error.details;
          console.log(chalk.yellow(`Base    : ${basePath}`));
          console.log(chalk.yellow(`Current : ${currentPath}`));
          console.log(chalk.yellow(`Diff    : ${diffImage}`));
        }

        console.log('');
      });

      console.log(chalk.red(`${this.stats.fail} test fail`));
    }
  }

  noTestFound() {
    console.log('No tests found.');
  }
}
