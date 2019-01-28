/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { ClrSmartPopoverEventsService } from './smart-popover-events.service';
import { ClrSmartPopoverPositionService } from './smart-popover-position.service';
import { ClrSmartPopoverToggleService } from './smart-popover-toggle.service';

@Component({
  selector: 'test-host',
  template: '',
  providers: [ClrSmartPopoverEventsService, ClrSmartPopoverPositionService, ClrSmartPopoverToggleService],
})
class TestHost {}

interface TestContext {
  eventService: ClrSmartPopoverEventsService;
  toggleService: ClrSmartPopoverToggleService;
}

export default function(): void {
  describe('ClrSmartPopoverToggleService', function() {
    describe('API', () => {
      beforeEach(function(this: TestContext) {
        TestBed.configureTestingModule({
          declarations: [TestHost],
          providers: [ClrSmartPopoverEventsService, ClrSmartPopoverPositionService, ClrSmartPopoverToggleService],
        });
        const fixture = TestBed.createComponent(TestHost);
        this.toggleService = fixture.debugElement.injector.get(ClrSmartPopoverToggleService, null);
      });

      it('exposes an observable for the open change events', function(this: TestContext) {
        const changeObservable: Observable<boolean> = this.toggleService.openChange;
        expect(changeObservable).toBeDefined();
        expect(changeObservable instanceof Observable).toBe(true);
      });
      it('exposes an observable for the change events', function(this: TestContext) {
        const eventObservable: Observable<Event> = this.toggleService.getEventChange();
        expect(eventObservable).toBeDefined();
        expect(eventObservable instanceof Observable).toBe(true);
      });
      it('updates and notifies when the openEvent changes', function(this: TestContext) {
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
      it('updates and notifies when the open value changes', function(this: TestContext) {
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
      it('toggles open state with events', function(this: TestContext) {
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
    });
  });
}
