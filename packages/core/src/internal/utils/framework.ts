/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

// DO NOT USE for conditionally applying behavior based on the host framework.
// These utilities are only for detecting host frameworks for debugging and logging.
// Host framework specific code should exist outside of the @cds/core package.

// Get values once then cache
let angularVersion: string | undefined;
let angularJSVersion: string | undefined;
let reactVersion: string | undefined;
let vueVersion: string | undefined;

export function getAngularVersion(useCache = true) {
  if (!useCache || !angularVersion) {
    const appRoot = document && document.querySelector('[ng-version]');
    angularVersion = appRoot ? `${appRoot.getAttribute('ng-version')}` : undefined;
  }
  return angularVersion;
}

export function getAngularJSVersion(useCache = true) {
  if (!useCache || !angularVersion) {
    angularJSVersion = (window as any)?.angular?.version?.full;
  }
  return angularJSVersion;
}

export function getReactVersion(useCache = true) {
  if (!useCache || !reactVersion) {
    if ((window as any)?.CDS?._react?.version) {
      reactVersion = window.CDS._react.version;
    } else if (document.querySelector('[data-reactroot], [data-reactid]')) {
      reactVersion = 'unknown version';
    } else {
      reactVersion = undefined;
    }
  }

  return reactVersion;
}

export function getVueVersion(useCache = true) {
  if (!useCache || !vueVersion) {
    const all = document.querySelectorAll('*');
    let el;
    for (let i = 0; i < all.length; i++) {
      if ((all[i] as any).__vue__) {
        el = all[i];
        break;
      }
    }

    vueVersion = el ? 'unknown version' : undefined;
  }
  return vueVersion;
}

export function isStorybook() {
  return window.location.href.includes('localhost:6006');
}
