/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { cssVarsDefaultConfig, runCssVarsPolyfill } from './css-vars.js';

describe('Utilities - CssVarsPolyfill ', () => {
  describe('runCssVarsPolyfill() ', () => {
    const fakePonyfillFnName = 'fakePonyfill';
    let tester: object | null = null;

    function fakePonyfill(config: object) {
      tester = config;
    }

    afterEach(() => {
      tester = null;
    });

    it('calls ponyfill with default config', () => {
      const ponyfill = runCssVarsPolyfill(undefined, fakePonyfill);
      expect(tester).not.toBeNull();
      expect(tester).toBe(cssVarsDefaultConfig);
      expect(ponyfill).toBe(fakePonyfillFnName);
    });

    it('calls ponyfill with custom config', () => {
      const customConfig = { ohai: 'hello' };
      const ponyfill = runCssVarsPolyfill(customConfig, fakePonyfill);
      expect(tester).not.toBeNull();
      expect(tester).toBe(customConfig);
      expect(ponyfill).toBe(fakePonyfillFnName);
    });

    it('calls cssVars() if no ponyfill is passed', () => {
      const ponyfill = runCssVarsPolyfill();
      expect(ponyfill).toBe('cssVars');
    });

    it('okay with a lambda ponyfill', () => {
      const ponyfill = runCssVarsPolyfill(undefined, () => {
        return;
      });
      expect(ponyfill).toBe('anonymous fn');
    });

    it('calls ShadyCSS in the default config onComplete', () => {
      // this test is here to  prevent us from removing the ShadyCSS call...
      (window as any).ShadyCSS = {
        styleDocument: () => {
          // Do nothing
        },
      };

      spyOn((window as any).ShadyCSS, 'styleDocument');
      cssVarsDefaultConfig.onComplete();
      expect((window as any).ShadyCSS.styleDocument).toHaveBeenCalled();

      // reset so lit-element does not think polyfill has loaded
      (window as any).ShadyCSS = undefined;
    });
  });
});
