/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { getAngularVersion, getReactVersion, getVueVersion } from './framework.js';

describe('framework utils for logging and debugging', () => {
  it('should getAngularVersion', () => {
    document.body.setAttribute('ng-version', 'test-version');
    expect(getAngularVersion(false)).toBe('test-version');
  });

  it('should getReactVersion', () => {
    expect(getReactVersion()).toBe(undefined);
    document.body.setAttribute('data-reactroot', '');
    expect(getReactVersion(false)).toBe('unknown version');
    document.body.removeAttribute('data-reactroot');
  });

  it('should getVueVersion', () => {
    expect(getVueVersion()).toBe(undefined);
    (document.body as any).__vue__ = {};
    expect(getVueVersion(false)).toBe('unknown version');
    (document.body as any).__vue__ = undefined;
  });
});
