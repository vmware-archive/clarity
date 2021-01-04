/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { isBrowser } from './exists.js';
import { getAngularVersion, getReactVersion, getVueVersion, getAngularJSVersion } from './framework.js';
import { FeatureSupportMatrix, browserFeatures } from './supports.js';

export interface CDSGlobal {
  _version: string[];
  _loadedElements: string[];
  _react: { version: string }; // set by @cds/react
  _supports: FeatureSupportMatrix;
  getVersion: () => CDSLog;
  logVersion: () => void;
  environment: {
    /** Set to true for production env to disable dev time logging and tooling */
    production: boolean;
  };
}

export interface CDSLog {
  versions: string[];
  loadedElements: string[];
  userAgent: string;
  supports: {};
  angularVersion?: string | undefined;
  angularJSVersion?: string | undefined;
  reactVersion?: string | undefined;
  vueVersion?: string | undefined;
  environment: {
    production: boolean;
  };
}

declare global {
  interface Window {
    CDS: CDSGlobal;
  }
}

export function setupCDSGlobal() {
  if (isBrowser()) {
    initializeCDSGlobal();
    setRunningVersion();
  }
}

function getVersion() {
  const log: CDSLog = {
    versions: window.CDS._version,
    environment: window.CDS.environment,
    userAgent: navigator.userAgent,
    supports: window.CDS._supports,
    angularVersion: getAngularVersion(false),
    angularJSVersion: getAngularJSVersion(false),
    reactVersion: getReactVersion(false),
    vueVersion: getVueVersion(false),
    loadedElements: window.CDS._loadedElements,
  };
  return log;
}

function logVersion() {
  console.log(JSON.stringify(getVersion(), null, 2));
}

function initializeCDSGlobal() {
  window.CDS = window.CDS || {
    _version: [],
    _loadedElements: [],
    _react: { version: undefined },
    _supports: browserFeatures.supports,
    environment: {
      production: false,
    },
    getVersion,
    logVersion,
  };
}

function setRunningVersion() {
  const loadedVersion = '@VERSION';
  if (window.CDS._version.indexOf(loadedVersion) < 0) {
    window.CDS._version.push(loadedVersion);
  }

  (document.querySelector('body') as HTMLElement).setAttribute('cds-version', window.CDS._version[0]);

  if (window.CDS._version.length > 1) {
    console.warn(
      'Running more than one version of Clarity can cause unexpected issues. Please ensure only one version is loaded.'
    );
  }
}
