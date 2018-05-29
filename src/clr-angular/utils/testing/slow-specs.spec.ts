/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

// This is a variation of a few similar utils found across the interwebs
// Saved as a spec so it gets gobbled up and just runs.

export function reportSlowSpecs(): void {
  const reportSlowerThanMs = 250;

  function now() {
    return new Date().getTime();
  }

  const slowSpecs = {
    jasmineStarted() {
      this._specTimes = [];
    },

    specStarted() {
      this._specStartedTime = now();
    },

    specDone(result: any) {
      const time = now() - this._specStartedTime;

      this._specTimes.push({ fullName: result.fullName, time: time });
      if (time >= reportSlowerThanMs) {
        console.warn(`${result.fullName} took ${time}ms`);
      }
    },
  };

  jasmine.getEnv().addReporter(slowSpecs);
}
