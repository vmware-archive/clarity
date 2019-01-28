/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

import { TestBed } from '@angular/core/testing';
import { TestContext } from '../testing/helpers.spec';
import { Component, Renderer2, ViewChild } from '@angular/core';
import { ClrAlignment } from './enums/alignment.enum';
import { ClrAxis } from './enums/axis.enum';
import { ClrSide } from './enums/side.enum';
import { ClrSmartPopoverContent } from './smart-popover-content';
import { ClrSmartPopoverEventsService } from './providers/smart-popover-events.service';
import { ClrSmartPopoverPositionService } from './providers/smart-popover-position.service';
import { ClrSmartPopoverToggleService } from './providers/smart-popover-toggle.service';
import { ClrSmartPosition } from './interfaces/smart-position.interface';
import { ClrSmartPopoverModule } from './smart-popover.module';

@Component({
  selector: 'test-host',
  template: `
    <button #anchor
            clrSmartAnchor
            clrSmartOpenCloseButton>Popover Toggle</button>
    <div *clrSmartPopoverContent="openState at smartPosition; outsideClickToClose: closeClick; scrollToClose: closeScroll"
         (clrSmartPopoverContentChange)="changeCounter($event)">Popover content</div>
  `,
  providers: [ClrSmartPopoverEventsService, ClrSmartPopoverPositionService, ClrSmartPopoverToggleService],
})
@Component({
  template: `

  `,
  providers: [ClrSmartPopoverEventsService, ClrSmartPopoverPositionService, ClrSmartPopoverToggleService],
})
class SimpleContent {
  @ViewChild(ClrSmartPopoverContent) content: ClrSmartPopoverContent;
  public smartPosition: ClrSmartPosition = {
    axis: ClrAxis.VERTICAL,
    side: ClrSide.BEFORE,
    anchor: ClrAlignment.START,
    content: ClrAlignment.START,
  };
  public openState = false;
  public closeClick = true;
  public closeScroll = true;
  public changeCount = 0;
  changeCounter(event) {
    this.changeCount += 1;
  }
}

export default function(): void {
  describe('ClrSmartPopoverContent', function() {
    type Context = TestContext<ClrSmartPopoverContent, SimpleContent> & {
      testComponent: SimpleContent;
      clarityDirective: ClrSmartPopoverModule;
      eventService: ClrSmartPopoverEventsService;
      positionService: ClrSmartPopoverPositionService;
      toggleService: ClrSmartPopoverToggleService;
    };
    beforeEach(function(this: Context) {
      /*
       * The ClrSmartPopoverContent element is a template and not rendered in the DOM,
       * This test is reliant on the @ViewChild in the test component.
       * the spec() helper wasn't working out of the box here.
       */
      TestBed.configureTestingModule({
        imports: [ClrSmartPopoverModule],
        declarations: [SimpleContent],
        providers: [Renderer2],
      });
      this.fixture = TestBed.createComponent(SimpleContent);
      this.fixture.detectChanges();
      this.testComponent = this.fixture.componentInstance;
      this.clarityDirective = this.fixture.componentInstance.content;
      this.eventService = this.fixture.debugElement.injector.get(ClrSmartPopoverEventsService);
      this.positionService = this.fixture.debugElement.injector.get(ClrSmartPopoverPositionService);
      this.toggleService = this.fixture.debugElement.injector.get(ClrSmartPopoverToggleService);
    });

    describe('Providers', function(this: Context) {
      it('declares a ClrSmartPopoverEventService', function(this: Context) {
        expect(this.eventService).toBeDefined();
      });
      it('declares a ClrSmartPopoverPositionService', function(this: Context) {
        expect(this.positionService).toBeDefined();
      });
      it('declares a ClrSmartPopoverToggleService', function(this: Context) {
        expect(this.toggleService).toBeDefined();
      });
    });

    describe('TypeScript API', function(this: Context) {
      it('responds to openChange events from the toggleService', function(this: Context) {
        this.testComponent.openState = true; // Add content to the DOM
        this.fixture.detectChanges();
        const content = document.body.getElementsByClassName('clr-popover-content');
        expect(content.length).toBe(1);
        expect(content[0].textContent.trim()).toBe('Popover content');

        this.testComponent.openState = false; // Remove content from the DOM
        this.fixture.detectChanges();
        expect(content.length).toBe(0);
      });
    });

    describe('Template API', () => {
      it('binds to [clrSmartPopoverContent] open state', function(this: Context) {
        expect(this.testComponent.openState).toBe(this.toggleService.open);
        this.testComponent.openState = undefined;
        expect(this.toggleService.open).toBe(false);
        this.testComponent.openState = false;
        expect(this.toggleService.open).toBe(false);
      });

      it('binds to [clrSmartPopoverContentAt] position', function(this: Context) {
        expect(this.testComponent.smartPosition).toEqual(this.positionService.position);
        const newPosition: ClrSmartPosition = {
          anchor: ClrAlignment.CENTER,
          axis: ClrAxis.HORIZONTAL,
          content: ClrAlignment.CENTER,
          side: ClrSide.AFTER,
        };
        this.testComponent.smartPosition = newPosition;
        this.fixture.detectChanges();
        expect(this.positionService.position).toEqual(newPosition);
      });

      it('binds to [clrSmartPopoverContentOutsideClickToClose]', function(this: Context) {
        expect(this.eventService.outsideClickClose).toBe(true);
        this.testComponent.closeClick = false;
        this.fixture.detectChanges();
        expect(this.eventService.outsideClickClose).toBe(false);
      });

      it('binds to [clrSmartPopoverContentScrollToClose]', function(this: Context) {
        expect(this.testComponent.closeScroll).toBe(this.eventService.scrollToClose);
        this.testComponent.closeScroll = false;
        this.fixture.detectChanges();
        expect(this.eventService.scrollToClose).toBe(false);
      });
    });

    describe('View Basics', function(this: Context) {
      it('adds top and left style to the content container when content is open', function(this: Context) {
        this.testComponent.openState = true; // Add content to the DOM
        this.fixture.detectChanges();
        const content: HTMLCollectionOf<Element> = document.body.getElementsByClassName('clr-popover-content');
        const testElement: HTMLElement = <HTMLElement>content[0];
        expect(testElement.style.top).toMatch(/\d+px/);
        expect(testElement.style.left).toMatch(/\d+px/);
      });
    });
  });
}
