/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { cssVars, variableStore } from './css-vars-ponyfill-fork';
import { exists } from '../utils/exists';

// exported for tests
export const cssVarsDefaultConfig = {
  onlyLegacy: true,
  updateURLs: false,
  updateDOM: true,
  onComplete: function() {
    if (exists(window, 'ShadyCSS', 'styleDocument')) {
      (window as any).ShadyCSS.styleDocument(variableStore.dom);
    }
  },
};

export function runCssVarsPolyfill(config: {} = cssVarsDefaultConfig): void {
  cssVars(config);
}

export { variableStore } from './css-vars-ponyfill-fork';
