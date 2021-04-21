export class VisualExpectError extends Error {
  details: any;

  constructor(message: string, details: any, ...params: any[]) {
    super(...params);

    // Having stacktrace could help later on
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, VisualExpectError);
    }

    this.name = 'VisualExpectError';
    this.message = message;
    this.details = details;
  }
}
