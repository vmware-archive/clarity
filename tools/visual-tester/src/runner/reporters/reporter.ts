export abstract class Reporter {
  describe(_name: string): void {}
  fail(_test: any, _error: any): void {}
  success(_name: string): void {}
  noTestFound(): void {}
  report(): void {}
}
