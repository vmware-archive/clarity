/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CDSState, setupCDSGlobal } from '../utils/global.js';
import { LogService } from './log.service.js';

export class GlobalState {
  static get state(): Readonly<CDSState> {
    setupCDSGlobal();
    return window?.CDS?.state;
  }

  static getValue(key: string): any {
    setupCDSGlobal();
    return (window.CDS.state as any)[key];
  }

  static setValue(key: string, val: any) {
    setupCDSGlobal();
    (window.CDS.state as any)[key] = val;
  }

  static log() {
    setupCDSGlobal();
    LogService.log(JSON.stringify(window?.CDS?.state, null, 2));
  }
}
