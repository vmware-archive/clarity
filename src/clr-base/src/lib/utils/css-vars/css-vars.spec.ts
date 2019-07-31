/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import * as ponyfill from './css-vars-ponyfill-fork.esm.js';
import { runCssVarsPolyfill, cssVarsDefaultConfig } from './css-vars';

describe('Utilities - CssVarsPolyfill ', () => {
  describe('runCssVarsPolyfill() ', () => {
    it('calls cssVars() with default config', () => {
      const setPropertyTypeSpy = jasmine.createSpy('setPropertyTypeSpy');
      spyOnProperty(ponyfill, 'cssVars').and.returnValue(setPropertyTypeSpy);
      runCssVarsPolyfill();
      expect(setPropertyTypeSpy).toHaveBeenCalledWith(cssVarsDefaultConfig);
    });

    it('calls cssVars() with custom config if given one', () => {
      const customConfig = {
        testsAreGood: true,
      };
      const setPropertyTypeSpy = jasmine.createSpy('setPropertyTypeSpy');
      spyOnProperty(ponyfill, 'cssVars').and.returnValue(setPropertyTypeSpy);
      runCssVarsPolyfill(customConfig);
      expect(setPropertyTypeSpy).toHaveBeenCalledWith(customConfig);
    });

    it('calls ShadyCSS in the default config onComplete', () => {
      // this test is here to  prevent us from removing the ShadyCSS call...
      (window as any).ShadyCSS = {
        styleDocument: () => {},
      };
      spyOn((window as any).ShadyCSS, 'styleDocument');
      cssVarsDefaultConfig.onComplete();
      expect((window as any).ShadyCSS.styleDocument).toHaveBeenCalled();
    });
  });
});
