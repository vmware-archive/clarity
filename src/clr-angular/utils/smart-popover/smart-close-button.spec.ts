/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { ClrSmartPopoverToggleService } from './providers/smart-popover-toggle.service';
import { spec, TestContext } from '../testing/helpers.spec';
import { ClrSmartPopoverEventsService } from './providers/smart-popover-events.service';
import { ClrSmartPopoverPositionService } from './providers/smart-popover-position.service';
import { ClrSmartCloseButton } from './smart-close-button';
import { ClrSmartPopoverModule } from './smart-popover.module';

@Component({
  selector: 'test-host',
  template: `    
    <button #closeButton clrSmartCloseButton (clrSmartOnCloseChange)="handleClose()">Smart Close Button</button>
    <button #toggleButton clrSmartAnchor>Toggle Button</button>
  `,
  providers: [ClrSmartPopoverToggleService],
})
class TestHost {
  @ViewChild('closeButton', { read: ElementRef })
  closeButton: ElementRef;
  @ViewChild('toggleButton', { read: ElementRef })
  toggleButton: ElementRef;
  openState;

  handleClose() {
    this.openState = false;
  }
}

export default function(): void {
  describe('ClrSmartPopoverCloseButton', function() {
    type Context = TestContext<ClrSmartCloseButton, TestHost> & {
      toggleService: ClrSmartPopoverToggleService;
      eventService: ClrSmartPopoverEventsService;
    };
    describe('TypeScript API', function(this: Context) {
      spec(ClrSmartCloseButton, TestHost, ClrSmartPopoverModule, {
        providers: [
          ClrSmartPopoverToggleService,
          ClrSmartPopoverPositionService,
          ClrSmartPopoverEventsService,
          Renderer2,
        ],
      });
      beforeEach(function(this: Context) {
        this.toggleService = this.getClarityProvider(ClrSmartPopoverToggleService);
        this.eventService = this.getClarityProvider(ClrSmartPopoverEventsService);
        this.detectChanges();
      });
      it('declares a ClrSmartPopoverToggleService', function(this: Context) {
        expect(this.toggleService).toBeDefined();
      });
      it('declares a ClrSmartPopoverEventService', function(this: Context) {
        expect(this.eventService).toBeDefined();
      });
      it('sets the close button ref in the events service', function(this: Context) {
        expect(this.hostComponent.closeButton).toEqual(this.eventService.closeButtonRef);
      });
    });

    describe('Template API', () => {
      spec(ClrSmartCloseButton, TestHost, ClrSmartPopoverModule, {
        providers: [
          ClrSmartPopoverToggleService,
          ClrSmartPopoverPositionService,
          ClrSmartPopoverEventsService,
          Renderer2,
        ],
      });
      beforeEach(function(this: Context) {
        this.toggleService = this.getClarityProvider(ClrSmartPopoverToggleService);
        this.eventService = this.getClarityProvider(ClrSmartPopoverEventsService);
        this.detectChanges();
      });
      it('emits a close change event when popover is closed', function(this: Context) {
        this.toggleService.open = true;
        this.detectChanges();
        expect(this.fixture.componentInstance.openState).toBeUndefined();
        const closeBtn: HTMLButtonElement = this.hostElement.querySelector('.clr-smart-close-button');
        closeBtn.click();
        this.detectChanges();
        expect(this.hostComponent.openState).toBe(this.toggleService.open);
      });
      it('focuses on the toggle/anchor element when clicked', function(this: Context) {
        const clickSpy = spyOn(this.toggleService, 'toggleWithEvent');
        const closeBtn: HTMLButtonElement = this.hostElement.querySelector('.clr-smart-close-button');
        const focusSpy = spyOn(this.hostComponent.toggleButton.nativeElement, 'focus');
        closeBtn.click();
        expect(clickSpy.calls.count()).toEqual(1);
        expect(focusSpy.calls.count()).toEqual(1);
      });
    });
    describe('View Basics', function(this: Context) {
      spec(ClrSmartCloseButton, TestHost, undefined, {
        providers: [
          ClrSmartPopoverToggleService,
          ClrSmartPopoverPositionService,
          ClrSmartPopoverEventsService,
          Renderer2,
        ],
      });

      it('adds the clr-smart-close-button classname to the host', function(this: Context) {
        expect(this.clarityElement.classList).toContain('clr-smart-close-button');
      });
    });
  });
}
