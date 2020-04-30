/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { TestContext } from '../testing/helpers.spec';
import { Component, Renderer2, ViewChild } from '@angular/core';
import { ClrAlignment } from './enums/alignment.enum';
import { ClrAxis } from './enums/axis.enum';
import { ClrSide } from './enums/side.enum';
import { ClrPopoverContent } from './popover-content';
import { ClrPopoverEventsService } from './providers/popover-events.service';
import { ClrPopoverPositionService } from './providers/popover-position.service';
import { ClrPopoverToggleService } from './providers/popover-toggle.service';
import { ClrPopoverPosition } from './interfaces/popover-position.interface';
import { ClrPopoverModuleNext } from './popover.module';

@Component({
  selector: 'test-host',
  template: `
    <button #anchor clrPopoverAnchor clrPopoverOpenCloseButton>Popover Toggle</button>
    <div
      *clrPopoverContent="openState; at: smartPosition; outsideClickToClose: closeClick; scrollToClose: closeScroll"
      (clrPopoverContentChange)="changeCounter()"
    >
      Popover content
    </div>
  `,
  providers: [ClrPopoverEventsService, ClrPopoverPositionService, ClrPopoverToggleService],
})
@Component({
  template: ``,
  providers: [ClrPopoverEventsService, ClrPopoverPositionService, ClrPopoverToggleService],
})
class SimpleContent {
  @ViewChild(ClrPopoverContent, { read: ClrPopoverContent, static: true })
  content: ClrPopoverContent;
  public smartPosition: ClrPopoverPosition = {
    axis: ClrAxis.VERTICAL,
    side: ClrSide.BEFORE,
    anchor: ClrAlignment.START,
    content: ClrAlignment.START,
  };
  public openState = false;
  public closeClick = true;
  public closeScroll = true;
  public changeCount = 0;
  changeCounter() {
    this.changeCount += 1;
  }
}

export default function (): void {
  describe('ClrPopoverContent', function () {
    type Context = TestContext<ClrPopoverContent, SimpleContent> & {
      testComponent: SimpleContent;
      clarityDirective: ClrPopoverModuleNext;
      eventService: ClrPopoverEventsService;
      positionService: ClrPopoverPositionService;
      toggleService: ClrPopoverToggleService;
    };
    beforeEach(function (this: Context) {
      /*
       * The ClrPopoverContent element is a template and not rendered in the DOM,
       * This test is reliant on the @ViewChild in the test component.
       * the spec() helper wasn't working out of the box here.
       */
      TestBed.configureTestingModule({
        imports: [ClrPopoverModuleNext],
        declarations: [SimpleContent],
        providers: [Renderer2],
      });
      this.fixture = TestBed.createComponent(SimpleContent);
      this.fixture.detectChanges();
      this.testComponent = this.fixture.componentInstance;
      this.clarityDirective = this.fixture.componentInstance.content;
      this.eventService = this.fixture.debugElement.injector.get(ClrPopoverEventsService);
      this.positionService = this.fixture.debugElement.injector.get(ClrPopoverPositionService);
      this.toggleService = this.fixture.debugElement.injector.get(ClrPopoverToggleService);
    });

    describe('Providers', function (this: Context) {
      it('declares a Popover EventService', function (this: Context) {
        expect(this.eventService).toBeDefined();
      });
      it('declares a Popover PositionService', function (this: Context) {
        expect(this.positionService).toBeDefined();
      });
      it('declares a Popover ToggleService', function (this: Context) {
        expect(this.toggleService).toBeDefined();
      });
    });

    describe('TypeScript API', function (this: Context) {
      it('responds to openChange events from the toggleService', function (this: Context) {
        this.testComponent.openState = true; // Add content to the DOM
        this.fixture.detectChanges();
        const content = document.body.getElementsByClassName('clr-popover-content');
        // Popovers are not getting cleaned up here.
        expect(content.length).toBe(1);
        expect(content[0].textContent.trim()).toBe('Popover content');

        this.testComponent.openState = false; // Remove content from the DOM
        this.fixture.detectChanges();
        expect(content.length).toBe(0);
      });

      it('responds to shouldRealign events from the positionService', fakeAsync(function (this: Context) {
        const alignContentSpy = spyOn(this.clarityDirective as any, 'alignContent');
        this.testComponent.openState = true; // Add content to the DOM
        this.fixture.detectChanges();
        expect(alignContentSpy).not.toHaveBeenCalled();
        this.positionService.realign();
        this.fixture.detectChanges();
        tick();
        // Make sure it has been called exactly one time
        expect(alignContentSpy).toHaveBeenCalledTimes(1);
      }));
    });

    describe('Template API', () => {
      it('binds to [clrPopoverContent] open state', function (this: Context) {
        expect(this.testComponent.openState).toBe(this.toggleService.open);
        this.testComponent.openState = undefined;
        expect(this.toggleService.open).toBe(false);
        this.testComponent.openState = false;
        expect(this.toggleService.open).toBe(false);
      });

      it('binds to [clrPopoverContentAt] position', function (this: Context) {
        expect(this.testComponent.smartPosition).toEqual(this.positionService.position);
        const newPosition: ClrPopoverPosition = {
          anchor: ClrAlignment.CENTER,
          axis: ClrAxis.HORIZONTAL,
          content: ClrAlignment.CENTER,
          side: ClrSide.AFTER,
        };
        this.testComponent.smartPosition = newPosition;
        this.fixture.detectChanges();
        expect(this.positionService.position).toEqual(newPosition);
      });

      it('binds to [clrPopoverContentOutsideClickToClose]', function (this: Context) {
        expect(this.eventService.outsideClickClose).toBe(true);
        this.testComponent.closeClick = false;
        this.fixture.detectChanges();
        expect(this.eventService.outsideClickClose).toBe(false);
      });

      it('binds to [clrPopoverContentScrollToClose]', function (this: Context) {
        expect(this.testComponent.closeScroll).toBe(this.eventService.scrollToClose);
        this.testComponent.closeScroll = false;
        this.fixture.detectChanges();
        expect(this.eventService.scrollToClose).toBe(false);
      });
    });

    describe('View Basics', function (this: Context) {
      it('adds top and left style to the content container when content is open', function (this: Context) {
        this.testComponent.openState = true; // Add content to the DOM
        this.fixture.detectChanges();
        const content: HTMLCollectionOf<Element> = document.body.getElementsByClassName('clr-popover-content');
        const testElement = content[0] as HTMLElement;
        expect(testElement.style.top).toMatch(/\d+px/);
        expect(testElement.style.left).toMatch(/\d+px/);
      });
    });
  });
}
