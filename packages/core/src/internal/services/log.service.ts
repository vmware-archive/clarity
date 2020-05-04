/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { existsInWindow } from '../utils/exists.js';

export class LogService {
  static log(...args: any) {
    if (notTestingEnvironment()) {
      console.log(...args);
    }
  }

  static warn(...args: any) {
    if (notTestingEnvironment()) {
      console.warn(...args);
    }
  }

  static error(...args: any) {
    if (notTestingEnvironment()) {
      console.error(...args);
    }
  }
}

function notTestingEnvironment() {
  return !existsInWindow(['jasmine']);
}
