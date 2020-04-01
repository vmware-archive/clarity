/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
export class ProgBarExample {
  intervalId: any;
  value = 0;
  intervalTimeInMs = 450;
  running = false;
  complete = false;

  constructor(
    public label: string = 'demo',
    public title: string = 'Progress Bar',
    public isLabeled: boolean = false
  ) {}

  cssClassnames(): string {
    return ['progress', this.label].join(' ');
  }

  stop(): void {
    this.complete = true;
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

  isRunning(): boolean {
    return this.running;
  }

  isFinished(): boolean {
    return this.complete;
  }

  run(): void {
    let myProgress: number = this.value;
    const maxProgressIncrement = 15;
    const minProgressIncrement = 4;
    this.running = true;
    this.complete = false;

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
