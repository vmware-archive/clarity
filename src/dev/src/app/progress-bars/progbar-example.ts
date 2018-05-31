/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

let id: number = 0;

export class ProgBarExample {
  intervalId: any;
  demoId: string = 'prog-example-toggle-' + id++;
  value: number = 0;
  intervalTimeInMs: number = 100;

  constructor(
    private label: string = 'demo',
    public title: string = 'Progress Bar',
    public isLabeled: boolean = false
  ) {}

  cssClassnames(): string {
    return ['progress', this.label].join(' ');
  }

  stop(): void {
    clearInterval(this.intervalId);
  }

  reset(): void {
    this.stop();
    this.value = 0;
    this.intervalId = -1;
  }

  start(): void {
    if (this.intervalId > -1) {
      this.reset();
    }

    this.intervalId = setInterval(() => {
      this.run();
    }, this.intervalTimeInMs);
  }

  run(): void {
    let myProgress: number = this.value;
    const maxProgressIncrement: number = 15;
    const minProgressIncrement: number = 4;

    myProgress += Math.random() * (maxProgressIncrement - minProgressIncrement) + minProgressIncrement;

    if (myProgress > 99) {
      this.value = 100;
      this.stop();
    } else if (myProgress < 1 || isNaN(myProgress)) {
      this.value = 1;
    } else {
      // typescript decides to be fun and complains if the first parameter here is not a string.
      // many good things about TS. but this one is pretty lame...
      this.value = parseInt(myProgress + '', 10);
    }
  }
}
