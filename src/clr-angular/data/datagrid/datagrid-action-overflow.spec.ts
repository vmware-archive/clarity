/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';

import { ClrDatagridActionOverflow } from './datagrid-action-overflow';
import { TestContext } from './helpers.spec';
import { RowActionService } from './providers/row-action-service';
import { ClrPopoverEventsService } from '../../utils/popover/providers/popover-events.service';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';
import { ClrPopoverPositionService } from '../../utils/popover/providers/popover-position.service';
import { TestBed } from '@angular/core/testing';

export default function(): void {
  describe('DatagridActionOverflow component', function() {
    let context: TestContext<ClrDatagridActionOverflow, SimpleTest>;
    let toggle: HTMLElement;

    beforeEach(function() {
      context = this.create(ClrDatagridActionOverflow, SimpleTest, [
        RowActionService,
        ClrPopoverEventsService,
        ClrPopoverToggleService,
        ClrPopoverPositionService,
      ]);
      toggle = context.clarityElement.querySelector('.clr-smart-open-close');
    });

    afterEach(function() {
      context.fixture.destroy();
      const popoverContent = document.querySelectorAll('.clr-popover-content');
      popoverContent.forEach(content => document.body.removeChild(content));
    });

    it('offers two-way binding on clrDgActionOverflowOpen', function() {
      context.clarityDirective.open = true;
      context.detectChanges();
      expect(context.testComponent.open).toBe(true);
      context.testComponent.open = false;
      context.detectChanges();
      expect(context.clarityDirective.open).toBe(false);
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

    it('closes the menu when clicked outside of the host', function() {
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

    it("doesn't close the menu when an action menu item container is clicked", function() {
      toggle.click();
      context.detectChanges();

      const actionOverflowMenu: HTMLElement = document.querySelector('.clr-popover-content');
      actionOverflowMenu.click();
      context.detectChanges();
      expect(context.clarityDirective.open).toBe(true);
    });

    it('projects menu content when open', function() {
      toggle.click();
      context.detectChanges();
      const popoverContent = document.querySelector('.clr-popover-content');
      expect(popoverContent.textContent.trim()).toMatch('Hello world');
    });

    it('should call clrDgActionOverflowOpenChange output when open changed', function() {
      spyOn(context.fixture.componentInstance, 'clrDgActionOverflowOpenChangeFn');
      toggle = context.clarityElement.querySelector('.datagrid-action-toggle');
      toggle.click();
      expect(context.fixture.componentInstance.clrDgActionOverflowOpenChangeFn).toHaveBeenCalledWith(true);
      toggle.click();
      expect(context.fixture.componentInstance.clrDgActionOverflowOpenChangeFn).toHaveBeenCalledWith(false);
    });

    it('closes the menu when an action menu item is clicked', function() {
      toggle.click();
      context.detectChanges();

      const actionItem: HTMLElement = document.querySelector('.clr-popover-content > .action-item');
      actionItem.click();
      context.detectChanges();
      expect(context.clarityDirective.open).toBe(false);
    });

    it('focuses on the first projected button', function() {
      const ngZone = TestBed.get(NgZone);
      spyOn(ngZone, 'runOutsideAngular').and.callFake(
        (fn: Function) =>
          function() {
            context.fixture.whenStable().then(() => {
              const firstButton: HTMLButtonElement = context.testComponent.actionItem.nativeElement;
              expect(document.activeElement).toEqual(firstButton);
            });
          }
      );
      toggle.click();
      context.detectChanges();
    });
  });
}

@Component({
  template: `
        <div>
            <div class="outside-click-test">
                This is an area outside of the action overflow
            </div>
            <clr-dg-action-overflow [(clrDgActionOverflowOpen)]="open" (clrDgActionOverflowOpenChange)="clrDgActionOverflowOpenChangeFn($event)">
                <button #actionItem class="action-item" clrPopoverCloseButton>Hello world</button>
            </clr-dg-action-overflow>
        </div>`,
})
class SimpleTest {
  clrDgActionOverflowOpenChangeFn = ($event: boolean) => {};
  open: boolean;
  @ViewChild('actionItem', { read: ElementRef, static: true })
  actionItem: ElementRef;
}
