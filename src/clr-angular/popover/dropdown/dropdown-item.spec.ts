/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

import { spec, TestContext } from '../../utils/testing/helpers.spec';
import { FocusableItem } from '../../utils/focus/focusable-item/focusable-item';
import { ClrDropdownItem } from './dropdown-item';
import { ClrDropdown } from './dropdown';
import { ROOT_DROPDOWN_PROVIDER } from './providers/dropdown.service';

@Component({
  template: `
    <button clrDropdownItem [disabled]="disabled">Hello world</button>
  `,
})
class SimpleTest {
  disabled: boolean;
}

export default function(): void {
  describe('DropdownItem directive', function() {
    /*
     * Most tests for this directive are apparently jammed in the main dropdown.spec.ts,
     * but moving them isn't relevant to this commit.
     */

    type Context = TestContext<ClrDropdownItem, SimpleTest>;
    spec(ClrDropdownItem, SimpleTest, null, {
      // Dummy dropdown provider, I don't even need a single property or method on it at the moment.
      providers: [{ provide: ClrDropdown, useValue: {} }, ROOT_DROPDOWN_PROVIDER],
    });

    it('adds the menuitem role to the host', function(this: Context) {
      expect(this.clarityElement.getAttribute('role')).toBe('menuitem');
    });

    it('sets the disabled attribute if set by input', function(this: Context) {
      expect(this.clarityElement.getAttribute('disabled')).toBeNull();
      this.hostComponent.disabled = true;
      this.detectChanges();
      expect(this.clarityElement.getAttribute('disabled')).toBe('');
    });

    it('sets aria-disabled to true if the FocusableItem is disabled', function(this: Context) {
      expect(this.clarityElement.getAttribute('aria-disabled')).toBe('false');
      this.hostComponent.disabled = true;
      this.detectChanges();
      expect(this.clarityElement.getAttribute('aria-disabled')).toBe('true');
    });

    it('updates the disabled property of the FocusableItem', function(this: Context) {
      this.hostComponent.disabled = true;
      this.detectChanges();
      expect(this.getClarityProvider(FocusableItem).disabled).toBe(true);
      this.hostComponent.disabled = false;
      this.detectChanges();
      expect(this.getClarityProvider(FocusableItem).disabled).toBe(false);
    });
  });
}
