/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import cssVars from 'css-vars-ponyfill';
import { existsInWindow } from '../utils/exists.js';

// exported for tests
export const cssVarsDefaultConfig = {
  onlyLegacy: true,
  updateURLs: false,
  updateDOM: true,
  onComplete: (_cssText?: string, _styleElms?: HTMLStyleElement[], cssVariables?: { [key: string]: string }) => {
    if (existsInWindow(['ShadyCSS', 'styleDocument'])) {
      (window as any).ShadyCSS.styleDocument(cssVariables);
    }
  },
};

export function runCssVarsPolyfill(config: {} = cssVarsDefaultConfig): void {
  cssVars(config);
}
