/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { supportsFlexGap, supportsResizeObserver } from './supports.js';

describe('browser support feature checks', () => {
  it('should check if browser supports ResizeObserver', () => {
    expect(supportsResizeObserver()).toBe(true);
  });
  it('should check if browser supports FlexGap', () => {
    expect(supportsFlexGap()).toBe(true);
  });
});
