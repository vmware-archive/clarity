/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import * as cssVars from 'css-vars-ponyfill';
import { cssVarsDefaultConfig, runCssVarsPolyfill } from './css-vars.js';

describe('Utilities - CssVarsPolyfill ', () => {
  describe('runCssVarsPolyfill() ', () => {
    xit('calls cssVars() with default config', () => {
      spyOn(cssVars, 'default');
      runCssVarsPolyfill();
      expect(cssVars.default).toHaveBeenCalledWith(cssVarsDefaultConfig);
    });

    xit('calls cssVars() with custom config if given one', () => {
      const customConfig = {
        testsAreGood: true,
      };

      spyOn(cssVars, 'default');
      runCssVarsPolyfill(customConfig);
      expect(cssVars.default).toHaveBeenCalledWith(customConfig);
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
