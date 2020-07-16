/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { getAngularVersion, getReactVersion, getVueVersion, isStorybook, getAngularJSVersion } from './framework.js';

describe('framework utils for logging and debugging', () => {
  it('should getAngularVersion', () => {
    document.body.setAttribute('ng-version', 'test-version');
    expect(getAngularVersion(false)).toBe('test-version');
  });

  it('should getAngularJSVersion', () => {
    expect(getAngularJSVersion(false)).toBe(undefined);
    (window as any).angular = { version: { full: '0.0.0' } };
    expect(getAngularJSVersion(false)).toBe('0.0.0');
    expect(getAngularJSVersion()).toBe('0.0.0');
    (window as any).angular = undefined;
  });

  it('should getReactVersion', () => {
    expect(getReactVersion()).toBe(undefined);
    document.body.setAttribute('data-reactroot', '');
    expect(getReactVersion(false)).toBe('unknown version');
    document.body.removeAttribute('data-reactroot');
    window.CDS._react.version = '0.0.0';
    expect(getReactVersion(false)).toBe('0.0.0');
    window.CDS._react.version = undefined;
    const temp = window.CDS;
    window.CDS = undefined;
    expect(getReactVersion(false)).toBe(undefined);
    window.CDS = temp;
  });

  it('should getVueVersion', () => {
    expect(getVueVersion()).toBe(undefined);
    (document.body as any).__vue__ = {};
    expect(getVueVersion(false)).toBe('unknown version');
    (document.body as any).__vue__ = undefined;
  });

  it('should determine if running localhost for storybook', () => {
    expect(isStorybook()).toBe(false);
  });
});
