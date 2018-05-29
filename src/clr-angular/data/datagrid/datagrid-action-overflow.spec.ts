/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

import { ClrDatagridActionOverflow } from './datagrid-action-overflow';
import { TestContext } from './helpers.spec';
import { RowActionService } from './providers/row-action-service';

export default function(): void {
  describe('DatagridActionOverflow component', function() {
    let context: TestContext<ClrDatagridActionOverflow, SimpleTest>;
    let toggle: HTMLElement;

    beforeEach(function() {
      context = this.create(ClrDatagridActionOverflow, SimpleTest, [RowActionService]);
      toggle = context.clarityElement.querySelector('clr-icon');
    });

    it('offers two-way binding on clrDgActionOverflowOpen', function() {
      context.clarityDirective.open = true;
      context.detectChanges();
      expect(context.testComponent.open).toBe(true);
      context.testComponent.open = false;
      context.detectChanges();
      expect(context.clarityDirective.open).toBe(false);
    });

    it('projects menu content when open', function() {
      context.clarityDirective.open = true;
      context.detectChanges();
      expect(context.clarityElement.textContent.trim()).toMatch('Hello world');
    });

    it('opens and closes the menu when the toggle is clicked', function() {
      expect(context.clarityDirective.open).toBe(false);
      toggle.click();
      context.detectChanges();
      expect(context.clarityDirective.open).toBe(true);
      toggle.click();
      context.detectChanges();
      expect(context.clarityDirective.open).toBe(false);
    });

    it('closes the menu when clicked outside of the host', () => {
      const outsideDiv: HTMLElement = context.testElement.querySelector('.outside-click-test');

      // should be closed initially
      expect(context.clarityDirective.open).toBe(false);

      // should open when the ellipses icon is clicked
      toggle.click();
      context.detectChanges();
      expect(context.clarityDirective.open).toBe(true);

      // should close when an area outside of the component is clicked
      outsideDiv.click();
      context.detectChanges();
      expect(context.clarityDirective.open).toBe(false);
    });

    it("doesn't close the menu when an action menu item container is clicked", () => {
      // should open when the ellipses icon is clicked
      toggle.click();
      context.detectChanges();

      const actionOverflowMenu: HTMLElement = context.clarityElement.querySelector('.datagrid-action-overflow');
      actionOverflowMenu.click();
      context.detectChanges();
      expect(context.clarityDirective.open).toBe(true);
    });

    it('closes the menu when an action menu item is clicked', () => {
      // should open when the ellipses icon is clicked
      toggle.click();
      context.detectChanges();

      const actionItem: HTMLElement = context.clarityElement.querySelector('.action-item');
      actionItem.click();
      context.detectChanges();
      expect(context.clarityDirective.open).toBe(false);
    });
  });
}

@Component({
  template: `
        <div>
            <div class="outside-click-test">
                This is an area outside of the action overflow
            </div>
            <clr-dg-action-overflow [(clrDgActionOverflowOpen)]="open">
                <button class="action-item">Hello world</button>
            </clr-dg-action-overflow>
        </div>`,
})
class SimpleTest {
  open: boolean;
}
