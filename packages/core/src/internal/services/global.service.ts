/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { EventSubject } from '../utils/event-subject.js';
import { CDSState, setupCDSGlobal } from '../utils/global.js';
import { LogService } from './log.service.js';

const stateUpdates = new EventSubject<any>();
(stateUpdates as any).listener = document.addEventListener('CDS_STATE_UPDATE', (e: any) => stateUpdates.emit(e.detail));

export class GlobalStateService {
  static stateUpdates = stateUpdates.toEventObservable();

  static get state(): CDSState {
    setupCDSGlobal();
    return window.CDS._state as CDSState;
  }

  static getValue(key: keyof CDSState) {
    return GlobalStateService.state[key];
  }

  static setValue(key: keyof CDSState, val: CDSState[keyof CDSState]) {
    GlobalStateService.state[key] = val as any;
  }

  static log() {
    LogService.log(JSON.stringify(GlobalStateService.state, null, 2));
  }
}
