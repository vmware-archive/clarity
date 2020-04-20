/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { setupCDSGlobal } from './global.js';

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
      const consoleSpy = spyOn(console, 'warn').and.callFake(() => {
        // Do nothing
      });
      setupCDSGlobal();
      window.CDS._version.push('1.0.0');
      window.CDS._version.push('2.0.0');
      setupCDSGlobal();
      expect(consoleSpy).toHaveBeenCalled();
    });

    it('should log all registered elements', () => {
      window.CDS._loadedElements.push('test-element');
      expect(window.CDS.getVersion().loadedElements[0]).toBe('test-element');
    });

    it('should log Angular version if available', () => {
      document.body.setAttribute('ng-version', 'test-version');
      expect(window.CDS.getVersion().angularVersion).toBe('test-version');
    });

    it('should log user agent', () => {
      expect(window.CDS.getVersion().userAgent.length).toBeTruthy();
    });

    it('should not store duplicate versions when loading', () => {
      setupCDSGlobal();
      window.CDS._version = ['@VERSION'];
      setupCDSGlobal();
      expect(window.CDS._version.length).toEqual(1);
    });

    it('should show loaded version in body attribute', () => {
      setupCDSGlobal();
      const attrValue = (document.querySelector('body') as HTMLElement).getAttribute('cds-version');
      expect(attrValue).toEqual('@VERSION');
    });
  });
});
