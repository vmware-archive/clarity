/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { GlobalState } from './global.service.js';
import { setupCDSGlobal } from '../utils/global.js';
import { LogService } from './log.service.js';

function resetGlobalState() {
  window.CDS.state = {};
}

describe('Global State Service', () => {
  beforeAll(() => {
    setupCDSGlobal();
  });

  afterEach(() => {
    resetGlobalState();
  });

  it('.state should return all global state', () => {
    window.CDS.state.focusTraps = ['ohai'];
    const current = GlobalState.state;
    expect(current.focusTraps[0]).toBe('ohai');
    window.CDS.state = {};
  });

  it('getValue should return value of state key', () => {
    (window.CDS.state as any).focusTraps = ['yolo', 'howdy'];
    const testme = GlobalState.getValue('focusTraps');
    expect(testme).toEqual(['yolo', 'howdy']);
  });

  it('setValue should assign value to key', () => {
    (window.CDS.state as any).focusTraps = ['yolo', 'howdy'];
    GlobalState.setValue('focusTraps', ['ohai']);
    expect(GlobalState.getValue('focusTraps')).toEqual(['ohai']);
  });

  it('.log() should log state to the console', () => {
    const spy = spyOn(LogService, 'log');
    GlobalState.log();
    expect(spy).toHaveBeenCalled();
  });
});
