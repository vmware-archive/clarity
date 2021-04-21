declare namespace NodeJS {
  export interface Global {
    describe: any;
    fdescribe: any;
    xdescribe: any;
    expect: any;
    it: any;
    fit: any;
    xit: any;
    beforeAll: any;
    beforeEach: any;
    afterAll: any;
    afterEach: any;
    VDIFF_CONTEXT: boolean;
  }
}
