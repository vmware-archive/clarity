/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { ClrSmartPopoverToggleService } from './providers/smart-popover-toggle.service';
import { ClrSmartOpenCloseButton } from './smart-open-close-button';
import { spec, TestContext } from '../testing/helpers.spec';
import { Subscription } from 'rxjs';
import { ClrSmartPopoverEventsService } from './providers/smart-popover-events.service';
import { ClrSmartPopoverPositionService } from './providers/smart-popover-position.service';

@Component({
  selector: 'test-host',
  template:
    '<button #testAnchor clrSmartOpenCloseButton (clrSmartOpenCloseChange)="updateOpenState($event)">Smart' +
    ' Open Close' +
    ' Button</button>',
  providers: [ClrSmartPopoverToggleService],
})
class TestHost {
  @ViewChild('testAnchor', { read: ElementRef })
  anchor: ElementRef;

  openState;

  updateOpenState(event) {
    this.openState = event;
  }
}

export default function(): void {
  describe('ClrSmartPopoverOpenCloseButton', function() {
    type Context = TestContext<ClrSmartOpenCloseButton, TestHost> & {
      toggleService: ClrSmartPopoverToggleService;
    };
    describe('TypeScript API', function(this: Context) {
      spec(ClrSmartOpenCloseButton, TestHost, undefined, {
        providers: [
          ClrSmartPopoverToggleService,
          ClrSmartPopoverPositionService,
          ClrSmartPopoverEventsService,
          Renderer2,
        ],
      });
      beforeEach(function(this: Context) {
        this.toggleService = this.getClarityProvider(ClrSmartPopoverToggleService);
        this.detectChanges();
      });
      it('declares a ClrSmartPopoverToggleService', function(this: Context) {
        expect(this.toggleService).toBeDefined();
      });
      it('responds to openChange events from the toggleService', function(this: Context) {
        let changeCount = 0;
        const sub: Subscription = this.toggleService.openChange.subscribe(() => {
          changeCount++;
        });
        expect(changeCount).toBe(0); // initial state
        this.clarityElement.click();
        expect(changeCount).toBe(1); // open click
        this.clarityElement.click();
        expect(changeCount).toBe(2); // close click
        sub.unsubscribe();
      });
    });

    describe('Template API', () => {
      spec(ClrSmartOpenCloseButton, TestHost, undefined, {
        providers: [
          ClrSmartPopoverToggleService,
          ClrSmartPopoverPositionService,
          ClrSmartPopoverEventsService,
          Renderer2,
        ],
      });
      beforeEach(function(this: Context) {
        this.toggleService = this.getClarityProvider(ClrSmartPopoverToggleService);
        this.detectChanges();
      });
      it('emits events when the open state changes', function(this: Context) {
        expect(this.fixture.componentInstance.openState).toBeUndefined(); // inital state
        this.clarityElement.click();
        expect(this.hostComponent.openState).toEqual(this.toggleService.open);
        expect(this.hostComponent.openState).toBe(true); // opened state
        this.clarityElement.click();
        expect(this.hostComponent.openState).toEqual(this.toggleService.open);
        expect(this.hostComponent.openState).toBe(false); // closed state
      });
      it('handles click events', function(this: Context) {
        const clickSpy = spyOn(this.toggleService, 'toggleWithEvent');
        this.clarityElement.click();
        expect(clickSpy.calls.count()).toEqual(1);
      });
    });
    describe('View Basics', function(this: Context) {
      spec(ClrSmartOpenCloseButton, TestHost, undefined, {
        providers: [
          ClrSmartPopoverToggleService,
          ClrSmartPopoverPositionService,
          ClrSmartPopoverEventsService,
          Renderer2,
        ],
      });

      it('adds the clr-smart-open-close classname', function(this: Context) {
        expect(this.clarityElement.classList).toContain('clr-smart-open-close');
      });
    });
  });
}
