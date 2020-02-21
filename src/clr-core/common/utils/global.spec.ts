/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { setupCDSGlobal } from './global';

describe('CDS global', () => {
  beforeEach(() => {
    window.CDS = undefined;
    setupCDSGlobal();
  });

  describe('CDS.getVersion()', () => {
    it('should log all Clarity versions found', () => {
      window.CDS._version.push('1.0.0');
      const log = window.CDS.getVersion();
      expect(log.versions.length).toBe(2);
      expect(log.versions[0]).toBe('@VERSION');
      expect(log.versions[1]).toBe('1.0.0');
    });

    it('should log a warning if more than one version was detected', () => {
      spyOn(console, 'warn');
      setupCDSGlobal();
      window.CDS._version.push('1.0.0');
      window.CDS._version.push('2.0.0');
      setupCDSGlobal();
      expect(console.warn).toHaveBeenCalled();
    });

    it('should log all registered elements', () => {
      window.CDS._loadedElements.push('test-element');
      expect(window.CDS.getVersion().loadedElements[0]).toBe('test-element');
    });

    it('should log Angular version if available', () => {
      const body = document.querySelector('body');
      expect(window.CDS.getVersion().angularVersion).toBe(undefined);
      body.setAttribute('ng-version', 'test-version');
      expect(window.CDS.getVersion().angularVersion).toBe('test-version');
      body.removeAttribute('ng-version');
    });

    it('should log user agent', () => {
      expect(window.CDS.getVersion().userAgent.length).toBeTruthy();
    });
  });
});
