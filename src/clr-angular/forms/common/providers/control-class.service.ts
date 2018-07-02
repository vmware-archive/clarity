/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';

@Injectable()
export class ControlClassService {
  className = '';

  controlClass(invalid = false, grid = false) {
    const controlClasses = [];
    if (invalid) {
      controlClasses.push('clr-error');
    }
    if (grid && this.className.indexOf('clr-col') === -1) {
      controlClasses.push('clr-col-md-10 clr-col-xs-12');
    }
    return controlClasses.join(' ');
  }
}
