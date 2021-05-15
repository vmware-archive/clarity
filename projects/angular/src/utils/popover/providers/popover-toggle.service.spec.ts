/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { ClrPopoverEventsService } from './popover-events.service';
import { ClrPopoverPositionService } from './popover-position.service';
import { ClrPopoverToggleService } from './popover-toggle.service';
import { KeyCodes } from '../../enums/key-codes.enum';

@Component({
  selector: 'test-host',
  template: '',
  providers: [ClrPopoverEventsService, ClrPopoverPositionService, ClrPopoverToggleService],
})
class TestHost {}

interface TestContext {
  eventService: ClrPopoverEventsService;
  toggleService: ClrPopoverToggleService;
}

export default function (): void {
  describe('ClrPopoverToggleService', function () {
    describe('API', () => {
      beforeEach(function (this: TestContext) {
        TestBed.configureTestingModule({
          declarations: [TestHost],
          providers: [ClrPopoverEventsService, ClrPopoverPositionService, ClrPopoverToggleService],
        });
        const fixture = TestBed.createComponent(TestHost);
        this.toggleService = fixture.debugElement.injector.get(ClrPopoverToggleService, null);
      });

      it('exposes an observable for the open change events', function (this: TestContext) {
        const changeObservable: Observable<boolean> = this.toggleService.openChange;
        expect(changeObservable).toBeDefined();
        expect(changeObservable instanceof Observable).toBe(true);
      });
      it('exposes an observable for the change events', function (this: TestContext) {
        const eventObservable: Observable<Event> = this.toggleService.getEventChange();
        expect(eventObservable).toBeDefined();
        expect(eventObservable instanceof Observable).toBe(true);
      });
      it('exposes an observable for the alignment events', function (this: TestContext) {
        const alignedObservable: Observable<HTMLElement> = this.toggleService.popoverAligned;
        expect(alignedObservable).toBeDefined();
        expect(alignedObservable instanceof Observable).toBe(true);
        let aligned = false;
        const subscription = alignedObservable.subscribe(() => {
          aligned = true;
        });
        this.toggleService.popoverAlignedEmit(null);
        expect(aligned).toBeTrue();
        subscription.unsubscribe();
      });
      it('updates and notifies when the openEvent changes', function (this: TestContext) {
        const clickEvent: Event = new MouseEvent('click');
        let testEvent: Event;
        const eventSubscription = this.toggleService.getEventChange().subscribe(event => {
          testEvent = event;
        });
        expect(this.toggleService.openEvent).toBeUndefined();
        this.toggleService.openEvent = clickEvent;
        expect(clickEvent).toEqual(testEvent);
        expect(this.toggleService.openEvent).toBe(testEvent);
        eventSubscription.unsubscribe();
      });
      it('updates and notifies when the open value changes', function (this: TestContext) {
        let openValue: boolean;
        const openSubscription = this.toggleService.openChange.subscribe(change => {
          openValue = change;
        });
        expect(this.toggleService.open).toBe(false);
        expect(this.toggleService.open).toBeFalse();
        this.toggleService.open = true;
        expect(this.toggleService.open).toBeTrue();
        expect(this.toggleService.open).toEqual(openValue);
        openSubscription.unsubscribe();
      });
      it('toggles open state with events', function (this: TestContext) {
        const openClickEvent: Event = new MouseEvent('click');
        const closeClickEvent: Event = new MouseEvent('click');
        expect(this.toggleService.open).toBeFalse();
        expect(this.toggleService.openEvent).toBeUndefined();
        this.toggleService.toggleWithEvent(openClickEvent);
        expect(this.toggleService.open).toBeTrue();
        expect(this.toggleService.openEvent).toBe(openClickEvent);
        this.toggleService.toggleWithEvent(closeClickEvent);
        expect(this.toggleService.open).toBeFalse();
        expect(this.toggleService.openEvent).toBe(closeClickEvent);
      });

      /**
       * Call `event.preventDefault` for arrow key events
       * and
       * skip `event.preventDefault` for non arrow key events
       */
      Object.keys(KeyCodes).forEach(key => {
        const arrowKeyEvent = new KeyboardEvent(key, { key });
        if (key.search('Arrow') > -1) {
          // Arrow keys are ignored to prevent content from closing the popover content
          it(`prevents the default toggle action for the ${key} key`, function (this: TestContext) {
            spyOn(arrowKeyEvent, 'preventDefault');
            this.toggleService.toggleWithEvent(arrowKeyEvent);
            expect(arrowKeyEvent.preventDefault).toHaveBeenCalled();
          });
        } else {
          it(`does not prevent the default toggle action for the ${key} key`, function (this: TestContext) {
            spyOn(arrowKeyEvent, 'preventDefault');
            this.toggleService.toggleWithEvent(arrowKeyEvent);
            expect(arrowKeyEvent.preventDefault).not.toHaveBeenCalled();
          });
        }
      });
    });
  });
}
