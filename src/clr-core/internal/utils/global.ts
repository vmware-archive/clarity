/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { isBrowser } from './exists.js';
import { getAngularVersion, getReactVersion, getVueVersion } from './framework.js';

export interface CDSGlobal {
  _version: string[];
  _loadedElements: string[];
  getVersion: () => CDSLog;
}

export interface CDSLog {
  versions: string[];
  loadedElements: string[];
  userAgent: string;
  angularVersion?: string | undefined;
  reactVersion?: string | undefined;
  vueVersion?: string | undefined;
}

declare global {
  interface Window {
    CDS: CDSGlobal;
  }
}

function getVersion() {
  const log: CDSLog = {
    versions: window.CDS._version,
    loadedElements: window.CDS._loadedElements,
    userAgent: navigator.userAgent,
    angularVersion: getAngularVersion(false),
    reactVersion: getReactVersion(false),
    vueVersion: getVueVersion(false),
  };
  return log;
}

function initializeCDSGlobal() {
  window.CDS = window.CDS || {
    _version: [],
    _loadedElements: [],
    getVersion,
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

export function setupCDSGlobal() {
  if (isBrowser()) {
    initializeCDSGlobal();
    setRunningVersion();
  }
}
