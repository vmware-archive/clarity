/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';
import { FocusableItem } from '../../utils/focus/focusable-item/focusable-item';
import { spec, TestContext } from '../../utils/testing/helpers.spec';
import { Point } from '../common/popover';

import { ClrDropdownMenu } from './dropdown-menu';
import { ClrDropdown } from './dropdown';
import { DropdownFocusHandler } from './providers/dropdown-focus-handler.service';

@Component({
  template: `
    <clr-dropdown>
      <clr-dropdown-menu *ngIf="menu" [clrPosition]="position">
        Hello world
      </clr-dropdown-menu>
    </clr-dropdown>
  `,
})
class SimpleTest {
  position: string;

  menu = true;
}

export default function (): void {
  describe('DropdownMenu component', function () {
    type Context = TestContext<ClrDropdownMenu, SimpleTest>;
    spec(ClrDropdownMenu, SimpleTest, null, { declarations: [ClrDropdown] });

    beforeEach(function (this: Context) {
      this.getClarityProvider(ClrPopoverToggleService).open = true;
      this.detectChanges();
    });

    it('projects content', function (this: Context) {
      expect(this.clarityElement.textContent.trim()).toMatch('Hello world');
    });

    it('has the correct css classes', function (this: Context) {
      expect(this.hostElement.querySelector('.dropdown-menu')).not.toBeNull();
    });

    it('supports clrPosition option', function (this: Context) {
      // Default is bottom-left since menuPosition is set to ""
      expect((this.clarityDirective as any).anchorPoint).toEqual(Point.BOTTOM_LEFT);
      expect((this.clarityDirective as any).popoverPoint).toEqual(Point.LEFT_TOP);

      this.clarityDirective.position = 'bottom-right';
      this.detectChanges();
      expect((this.clarityDirective as any).anchorPoint).toEqual(Point.BOTTOM_RIGHT);
      expect((this.clarityDirective as any).popoverPoint).toEqual(Point.RIGHT_TOP);

      this.clarityDirective.position = 'top-right';
      this.detectChanges();
      expect((this.clarityDirective as any).anchorPoint).toEqual(Point.TOP_RIGHT);
      expect((this.clarityDirective as any).popoverPoint).toEqual(Point.RIGHT_BOTTOM);
    });

    it('adds the menu role to the host', function (this: Context) {
      expect(this.clarityElement.getAttribute('role')).toBe('menu');
    });

    it('declares itself to the DropdownFocusHandler', function (this: Context) {
      expect(this.getClarityProvider(DropdownFocusHandler).container).toBe(this.clarityElement);
    });

    it('adds DropdownItem children to the DropdownFocusHandler', function (this: Context) {
      const focusHandler = this.getClarityProvider(DropdownFocusHandler);
      const spy = spyOn(focusHandler, 'addChildren');
      const newChildren = [{ id: '1' }, { id: '2' }, { id: '3' }] as FocusableItem[];
      this.clarityDirective.items.reset(newChildren);
      this.clarityDirective.items.notifyOnChanges();
      expect(spy).toHaveBeenCalledWith(newChildren);
    });

    it('removes children from the DropdownFocusHandler on destroy', function (this: Context) {
      const focusHandler = this.getClarityProvider(DropdownFocusHandler);
      const spy = spyOn(focusHandler, 'resetChildren');
      this.hostComponent.menu = false;
      this.detectChanges();
      expect(spy).toHaveBeenCalled();
    });
  });
}
