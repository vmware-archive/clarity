import { Reporter } from './reporter';

const DOT_COUNTER = 20;

export class DotReporter implements Reporter {
  counter: number = 0;

  private countLines() {
    this.counter++;
    if (this.counter >= DOT_COUNTER) {
      console.log('\n');
      this.counter = 0;
    }
  }

  describe(_name: string) {}

  fail(_test: any, _error: any) {
    process.stdout.write('X');
    this.countLines();
  }

  success(_name: string) {
    process.stdout.write('.');
    this.countLines();
  }

  noTestFound() {
    console.log('No tests found.');
  }

  report() {
    // need to implement report
  }
}
