/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { isBrowser } from './exists.js';

export interface CDSGlobal {
  _version: string[];
  _loadedElements: string[];
  getVersion: () => CDSLog;
}

export interface CDSLog {
  versions: string[];
  loadedElements: string[];
  angularVersion?: string | null;
  userAgent: string;
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

function initializeCDSGlobal() {
  window.CDS = window.CDS || {
    _version: [],
    _loadedElements: [],
    getVersion,
  };
}

function getVersion() {
  const log: CDSLog = {
    versions: window.CDS._version,
    loadedElements: window.CDS._loadedElements,
    angularVersion: getAngularVersion(),
    userAgent: navigator.userAgent,
  };
  console.log(JSON.stringify(log, null, 2));
  return log;
}

function getAngularVersion() {
  const appRoot = document && document.querySelector('[ng-version]');
  return appRoot ? appRoot.getAttribute('ng-version') : undefined;
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
