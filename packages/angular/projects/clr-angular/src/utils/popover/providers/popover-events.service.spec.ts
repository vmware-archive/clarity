/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

import { Component, ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ClrPopoverEventsService } from './popover-events.service';
import { ClrPopoverPositionService } from './popover-position.service';
import { ClrPopoverToggleService } from './popover-toggle.service';

@Component({
  selector: 'test-host',
  template: '',
  providers: [ClrPopoverEventsService, ClrPopoverPositionService],
})
class TestHost {}

interface TestContext {
  eventService: ClrPopoverEventsService;
  toggleService: ClrPopoverToggleService;
}

export default function (): void {
  describe('Popover EventService', function () {
    describe('API', () => {
      beforeEach(function (this: TestContext) {
        TestBed.configureTestingModule({
          declarations: [TestHost],
          providers: [ClrPopoverEventsService, ClrPopoverPositionService, ClrPopoverToggleService],
        });
        const fixture = TestBed.createComponent(TestHost);
        this.eventService = fixture.debugElement.injector.get(ClrPopoverEventsService, null);
        this.toggleService = fixture.debugElement.injector.get(ClrPopoverToggleService, null);
      });
      function setupAnchor(context: TestContext): ElementRef {
        const anchor = document.createElement('button');
        const anchorRef = new ElementRef(anchor);
        anchor.textContent = 'AnchorButton';
        anchor.setAttribute('role', 'button');
        anchor.setAttribute('type', 'button');
        anchor.classList.add('btn', 'btn-sm', 'btn-link', 'column-toggle--action');
        context.eventService.anchorButtonRef = anchorRef;
        return anchorRef;
      }
      function setupContent(context: TestContext): ElementRef {
        const content = document.createElement('div');
        const contentRef = new ElementRef(content);
        content.textContent = 'Popover content container';
        context.eventService.contentRef = contentRef;
        return contentRef;
      }
      function setupCloseButton(context: TestContext): ElementRef {
        const closeBtn = document.createElement('button');
        const closeBtnRef = new ElementRef(closeBtn);

        closeBtn.textContent = 'Close Button';
        closeBtn.setAttribute('role', 'button');
        closeBtn.setAttribute('type', 'button');
        closeBtn.id = 'closeBtn';
        context.eventService.closeButtonRef = closeBtnRef;
        return closeBtnRef;
      }
      it('sets the anchor element', function (this: TestContext) {
        expect(this.eventService.anchorButtonRef).not.toBeDefined();
        const testElementRef = setupAnchor(this);
        expect(this.eventService.anchorButtonRef).toEqual(testElementRef);
      });
      it('sets the content element', function (this: TestContext) {
        expect(this.eventService.contentRef).not.toBeDefined();
        const testElementRef = setupContent(this);
        expect(this.eventService.contentRef).toEqual(testElementRef);
      });
      it('sets the close button reference', function (this: TestContext) {
        expect(this.eventService.closeButtonRef).not.toBeDefined();
        const testElementRef = setupCloseButton(this);
        expect(this.eventService.closeButtonRef).toEqual(testElementRef);
      });
      it('sets outside click to close property', function (this: TestContext) {
        expect(this.eventService.ignoredEvent).not.toBeDefined();
        const testClick = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: true,
        });
        this.toggleService.toggleWithEvent(testClick);
        expect(this.eventService.ignoredEvent).toEqual(testClick);
      });
      it('set focus on the anchor button', function (this: TestContext) {
        const testAnchor = setupAnchor(this);
        setupContent(this);
        spyOn(testAnchor.nativeElement, 'focus');
        this.eventService.setAnchorFocus();
        expect(testAnchor.nativeElement.focus).toHaveBeenCalled();
      });
      it('sets focus on the close button', function (this: TestContext) {
        setupContent(this);
        const closeBtn = setupCloseButton(this);
        spyOn(closeBtn.nativeElement, 'focus');
        this.eventService.setCloseFocus();
        expect(closeBtn.nativeElement.focus).toHaveBeenCalled();
      });
      /*
       * NOTE: private functions called when ClrPopoverToggleService.openChange event fires
       * will be tested with a full component / popover complex
       */
    });
  });
}
