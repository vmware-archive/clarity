/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { GlobalStateService } from './global.service.js';
import { setupCDSGlobal } from '../utils/global.js';
import { LogService } from './log.service.js';

function resetGlobalState() {
  (window.CDS._state as any) = {
    focusTrapItems: [],
    i18nRegistry: {},
    elementRegistry: {},
    iconRegistry: {},
    motionRegistry: {},
  };
}

describe('Global State Service', () => {
  beforeAll(() => {
    setupCDSGlobal();
  });

  afterEach(() => {
    resetGlobalState();
  });

  it('.state should return all global state', () => {
    expect(GlobalStateService.state.focusTrapItems.length).toBe(0);
    GlobalStateService.state.focusTrapItems = [{ focusTrapId: 'ohai' }];
    expect(GlobalStateService.state.focusTrapItems[0].focusTrapId).toBe('ohai');
  });

  it('getValue should return value of state key', () => {
    GlobalStateService.state.focusTrapItems = [{ focusTrapId: 'yolo' }, { focusTrapId: 'howdy' }];
    expect(
      (GlobalStateService.getValue('focusTrapItems') as { focusTrapId: string }[]).map(i => i.focusTrapId)
    ).toEqual(['yolo', 'howdy']);
    expect(GlobalStateService.state.focusTrapItems.map(i => i.focusTrapId)).toEqual(['yolo', 'howdy']);
  });

  it('setValue should assign value to key', () => {
    GlobalStateService.setValue('focusTrapItems', [{ focusTrapId: 'ohai' }]);
    expect(GlobalStateService.state.focusTrapItems).toEqual([{ focusTrapId: 'ohai' }]);

    GlobalStateService.state.focusTrapItems = [...GlobalStateService.state.focusTrapItems, { focusTrapId: 'howdy' }];
    expect(GlobalStateService.state.focusTrapItems.map(i => i.focusTrapId)).toEqual(['ohai', 'howdy']);
  });

  it('.log() should log state to the console', () => {
    const spy = spyOn(LogService, 'log');
    GlobalStateService.log();
    expect(spy).toHaveBeenCalled();
  });
});
