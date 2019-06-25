/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import IWindow from '../../interfaces/window.interface';

declare var window: IWindow;

function hasCssVars(win: IWindow): boolean {
  return win.hasOwnProperty('cssVars');
}

// exporting so we can test it
export function cssVarsPolyfillHasRun(win: IWindow): boolean {
  const defaultPolyfillObject = { polyfills: { cssVarsHasRun: false } };

  // TODO: needs a new name
  if (!win.hasOwnProperty('__ClarityInternals')) {
    win.__ClarityInternals = { ...defaultPolyfillObject };
    return false;
  } else if (!win.__ClarityInternals.hasOwnProperty('polyfills')) {
    Object.assign(win.__ClarityInternals, { ...defaultPolyfillObject });
    return false;
  } else if (typeof win.__ClarityInternals.polyfills.cssVarsHasRun === 'undefined') {
    win.__ClarityInternals.polyfills.cssVarsHasRun = false;
    return false;
  } else {
    return !!win.__ClarityInternals.polyfills.cssVarsHasRun;
  }
}

export function runCssVarsPolyfill(): void {
  if (typeof window !== 'undefined' && hasCssVars(window) && !cssVarsPolyfillHasRun(window)) {
    window.cssVars({
      shadowDOM: true,
      onlyLegacy: true,
      onComplete: function() {
        window.__ClarityInternals.polyfills.cssVarsHasRun = true;
      },
    });
  }
}
