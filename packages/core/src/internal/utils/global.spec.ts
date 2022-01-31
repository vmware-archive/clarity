/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { onceEvent } from '@cds/core/test';
import { GlobalStateService } from '../services/global.service.js';
import { setupCDSGlobal } from './global.js';

describe('CDS global', () => {
  beforeEach(() => {
    window.CDS = undefined;
    setupCDSGlobal();
  });

  describe('CDS.getDetails()', () => {
    it('should log all Clarity versions found', () => {
      window.CDS._version.push('1.0.0');
      const log = window.CDS.getDetails();
      expect(log.versions.length > 0).toBe(true);
      expect(log.versions[0]).toBe('PACKAGE_VERSION');
      expect(log.versions[1]).toBe('1.0.0');
    });

    it('should log a warning if more than one version was detected', () => {
      const jasmine = window.jasmine;
      window.jasmine = undefined;
      spyOn(console, 'warn');
      setupCDSGlobal();
      window.CDS._version.push('1.0.0');
      window.CDS._version.push('2.0.0');
      setupCDSGlobal();
      expect(console.warn).toHaveBeenCalled();
      window.jasmine = jasmine;
    });

    it('should emit a state change event when the global state object is updated', async () => {
      const event = onceEvent(document, 'CDS_STATE_UPDATE');

      // cast any here since its marked as readonly for service only usage
      (window.CDS._state.iconRegistry as any) = { ...window.CDS._state.iconRegistry, 'cool-new-icon': '...' };
      await event;
      expect(event).toBeTruthy();
    });

    it('should log all registered elements', () => {
      GlobalStateService.state.elementRegistry = { ...GlobalStateService.state.elementRegistry, 'test-element': {} };
      expect(GlobalStateService.state.elementRegistry['test-element']).not.toBe(undefined);
    });

    it('should log Angular version if available', () => {
      document.body.setAttribute('ng-version', 'test-version');
      expect(window.CDS.getDetails().angularVersion).toBe('test-version');
    });

    it('should log user agent', () => {
      expect(window.CDS.getDetails().userAgent.length).toBeTruthy();
    });

    it('should not store duplicate versions when loading', () => {
      setupCDSGlobal();
      window.CDS._version = ['PACKAGE_VERSION'];
      setupCDSGlobal();
      expect(window.CDS._version.length).toEqual(1);
    });

    it('should show loaded version in body attribute', () => {
      const attrValue = (document.querySelector('body') as HTMLElement).getAttribute('cds-version');
      expect(attrValue).toEqual('PACKAGE_VERSION');
    });
  });
});
