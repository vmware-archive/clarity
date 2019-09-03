/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { IfOpenService } from '../../utils/conditional/if-open.service';
import { FocusService } from '../../utils/focus/focus.service';

import { spec, TestContext } from '../../utils/testing/helpers.spec';
import { ClrDropdownTrigger } from './dropdown-trigger';
import { ClrDropdown } from './dropdown';
import { DROPDOWN_FOCUS_HANDLER_PROVIDER, DropdownFocusHandler } from './providers/dropdown-focus-handler.service';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';

@Component({
  template: `
    <button clrDropdownTrigger [clrAriaLabelDropdownOpen]="openLabel" [clrAriaLabelDropdownClose]="closeLabel">Hello world</button>
  `,
  // These services are declared here because they need the renderer
  providers: [FocusService, DROPDOWN_FOCUS_HANDLER_PROVIDER],
})
class SimpleTest {
  openLabel: string;
  closeLabel: string;
}

export default function(): void {
  describe('DropdownTrigger directive', function() {
    /*
     * Most tests for this directive are apparently jammed in the main dropdown.spec.ts,
     * but moving them isn't relevant to this commit.
     */

    type Context = TestContext<ClrDropdownTrigger, SimpleTest>;
    spec(ClrDropdownTrigger, SimpleTest, null, { providers: [{ provide: ClrDropdown, useValue: {} }, IfOpenService] });

    it('adds the aria-haspopup attribute to the host', function(this: Context) {
      expect(this.clarityElement.getAttribute('aria-haspopup')).toBe('menu');
    });

    it('adds the aria-expanded attribute to the host', function(this: Context) {
      const ifOpenService = this.getProvider(IfOpenService);
      ifOpenService.open = false;
      this.detectChanges();
      expect(this.clarityElement.getAttribute('aria-expanded')).toBe('false');
      ifOpenService.open = true;
      this.detectChanges();
      expect(this.clarityElement.getAttribute('aria-expanded')).toBe('true');
    });

    it('declares itself to the DropdownFocusHandler', function(this: Context) {
      expect(this.getClarityProvider(DropdownFocusHandler).trigger).toBe(this.clarityElement);
    });

    it('aria label should receive the correct value', function(this: Context) {
      const ifOpenService = this.getProvider(IfOpenService);
      const commonStringsService = this.getProvider(ClrCommonStringsService);

      ifOpenService.open = false;
      this.detectChanges();
      expect(this.clarityElement.getAttribute('aria-label')).toBe(commonStringsService.keys.dropdownOpenAriaLabel);

      this.hostComponent.openLabel = 'New value for open';
      this.detectChanges();
      expect(this.clarityElement.getAttribute('aria-label')).toBe('New value for open');

      ifOpenService.open = true;
      this.detectChanges();
      expect(this.clarityElement.getAttribute('aria-label')).toBe(commonStringsService.keys.dropdownCloseAriaLabel);

      this.hostComponent.closeLabel = 'New value for close';
      this.detectChanges();
      expect(this.clarityElement.getAttribute('aria-label')).toBe('New value for close');
    });
  });
}
