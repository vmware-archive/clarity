/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { cssVarsPolyfillHasRun, runCssVarsPolyfill } from './css-vars';
import IWindow from '../../interfaces/window.interface';

declare var window: IWindow;

describe('CssVarsPolyfill', () => {
  describe('runCssVarsPolyfill', () => {
    beforeEach(function() {
      counter = 0;
      window.cssVars = function() {
        counter++;
        window.__ClarityInternals.polyfills.cssVarsHasRun = true;
      };
    });

    let counter = 0;

    it('runs if __ClarityInternals is not defined', () => {
      delete window.__ClarityInternals;
      runCssVarsPolyfill();
      expect(counter).toEqual(1);
      expect(window.__ClarityInternals.polyfills.cssVarsHasRun).toEqual(true);
    });

    it('runs if polyfills property is not defined', () => {
      delete window.__ClarityInternals.polyfills;
      runCssVarsPolyfill();
      expect(counter).toEqual(1);
      expect(window.__ClarityInternals.polyfills.cssVarsHasRun).toEqual(true);
    });

    it('runs if cssVarsHasRun is not defined', () => {
      delete window.__ClarityInternals.polyfills.cssVarsHasRun;
      runCssVarsPolyfill();
      expect(counter).toEqual(1);
      expect(window.__ClarityInternals.polyfills.cssVarsHasRun).toEqual(true);
    });

    it('runs if cssVarsHasRun is false', () => {
      window.__ClarityInternals.polyfills.cssVarsHasRun = false;
      runCssVarsPolyfill();
      expect(counter).toEqual(1);
      expect(window.__ClarityInternals.polyfills.cssVarsHasRun).toEqual(true);
    });

    it('runs if cssVarsHasRun is accidentally falsy', () => {
      window.__ClarityInternals.polyfills.cssVarsHasRun = null;
      counter = 0;
      runCssVarsPolyfill();
      expect(counter).toEqual(1);
      expect(window.__ClarityInternals.polyfills.cssVarsHasRun).toEqual(true);
    });

    it('does not run if cssVarsHasRun is true', () => {
      window.__ClarityInternals.polyfills.cssVarsHasRun = true;
      counter = 0;
      runCssVarsPolyfill();
      expect(counter).toEqual(0);
    });

    it('only runs once', () => {
      window.__ClarityInternals.polyfills.cssVarsHasRun = false;
      counter = 0;
      runCssVarsPolyfill();
      expect(counter).toEqual(1);
      expect(window.__ClarityInternals.polyfills.cssVarsHasRun).toEqual(true);
      runCssVarsPolyfill();
      expect(counter).toEqual(1);
    });
  });

  describe('cssVarsPolyfillHasRun', () => {
    const expected = {
      polyfills: {
        cssVarsHasRun: false,
      },
    };

    // assume loaded cssVars b/c consumer will do that part via polyfills.ts
    window.cssVars = {};

    it('create __ClarityInternals as expected if it is not defined', () => {
      delete window.__ClarityInternals;
      const hasRun = cssVarsPolyfillHasRun(window);
      expect(hasRun).toEqual(false);
      expect(window.__ClarityInternals).toBeDefined();
      expect(window.__ClarityInternals).toEqual(expected);
    });

    it('adds polyfills property if not defined', () => {
      delete window.__ClarityInternals.polyfills;
      cssVarsPolyfillHasRun(window);
      expect(window.__ClarityInternals).toBeDefined();
      expect(window.__ClarityInternals).toEqual(expected);
    });

    it('adds cssVarsHasRun property if it is not defined', () => {
      delete window.__ClarityInternals.polyfills.cssVarsHasRun;
      cssVarsPolyfillHasRun(window);
      expect(window.__ClarityInternals).toBeDefined();
      expect(window.__ClarityInternals).toEqual(expected);
    });

    it('returns false if polyfills indicates that cssVarsPolyfill has not run', () => {
      window.__ClarityInternals.polyfills.cssVarsHasRun = false;
      const hasRun = cssVarsPolyfillHasRun(window);
      expect(hasRun).toEqual(false);
    });

    it('returns true if polyfills indicates that cssVarsPolyfill has run', () => {
      window.__ClarityInternals.polyfills.cssVarsHasRun = true;
      const hasRun = cssVarsPolyfillHasRun(window);
      expect(hasRun).toEqual(true);
    });
  });
});
