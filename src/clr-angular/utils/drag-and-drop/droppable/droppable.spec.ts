/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ClrDragEvent } from '../drag-event';
import { DragEventInterface, DragEventType } from '../interfaces/drag-event.interface';
import { ClrDropToleranceInterface } from '../interfaces/drop-tolerance.interface';
import { DragAndDropEventBusService } from '../providers/drag-and-drop-event-bus.service';
import { MOCK_DRAG_DROP_EVENT_BUS } from '../providers/drag-and-drop-event-bus.service.mock';
import { ClrDroppable } from './droppable';

export default function(): void {
  let mockDragStartEventInt: DragEventInterface<any>;
  let mockDragMoveEventInt: DragEventInterface<any>;
  let mockDragEndEventInt: DragEventInterface<any>;

  let mockDragStartEventExt: ClrDragEvent<any>;
  let mockDragMoveEventExt: ClrDragEvent<any>;
  let mockDragEndEventExt: ClrDragEvent<any>;

  beforeEach(function() {
    mockDragStartEventInt = { type: DragEventType.DRAG_START, dragPosition: { pageX: 11, pageY: 22 } };
    mockDragMoveEventInt = { type: DragEventType.DRAG_MOVE, dragPosition: { pageX: 33, pageY: 44 } };
    mockDragEndEventInt = { type: DragEventType.DRAG_END, dragPosition: { pageX: 77, pageY: 88 } };

    mockDragStartEventExt = new ClrDragEvent(mockDragStartEventInt);
    mockDragMoveEventExt = new ClrDragEvent(mockDragMoveEventInt);
    mockDragEndEventExt = new ClrDragEvent(mockDragEndEventInt);
  });

  const decorateEventWithDropPosition = (event, dropPointPosition: { pageX: number; pageY: number }) => {
    event.dropPointPosition = dropPointPosition;
  };

  const decorateEventWithGroup = (event, group: string | string[]) => {
    event.group = group;
  };

  describe('Basic Droppable', function() {
    beforeEach(function() {
      TestBed.configureTestingModule({
        declarations: [BasicDroppable, ClrDroppable],
        providers: [MOCK_DRAG_DROP_EVENT_BUS],
      });

      this.fixture = TestBed.createComponent(BasicDroppable);
      this.testComponent = this.fixture.componentInstance;
      this.testElement = this.fixture.nativeElement;
      this.droppable = this.fixture.debugElement.query(By.directive(ClrDroppable));
      this.eventBus = TestBed.get(DragAndDropEventBusService);
      this.fixture.detectChanges();
    });

    afterEach(function() {
      this.fixture.destroy();
    });

    it('should have droppable class', function() {
      expect(this.droppable.nativeElement.classList.contains('droppable')).toBeTruthy();
    });

    it('should emit on dragStart', function() {
      this.eventBus.broadcast(mockDragStartEventInt);
      expect(this.testComponent.dragStartEvent).toEqual(mockDragStartEventExt);
    });

    it('should have draggable-match class on dragStart', function() {
      this.eventBus.broadcast(mockDragStartEventInt);
      this.fixture.detectChanges();
      expect(this.droppable.nativeElement.classList.contains('draggable-match')).toBeTruthy();
    });

    it("should not emit on dragMove if dragStart hasn't been registered", function() {
      this.eventBus.broadcast(mockDragMoveEventInt);
      expect(this.testComponent.dragMoveEvent).toBeUndefined();
    });

    it('should emit on dragMove', function() {
      this.eventBus.broadcast(mockDragStartEventInt);
      this.eventBus.broadcast(mockDragMoveEventInt);

      expect(this.testComponent.dragStartEvent).toEqual(mockDragStartEventExt);
      expect(this.testComponent.dragMoveEvent).toEqual(mockDragMoveEventExt);
    });

    it("should not emit on dragEnd if dragStart hasn't been registered", function() {
      this.eventBus.broadcast(mockDragEndEventInt);
      expect(this.testComponent.dragEndEvent).toBeUndefined();
    });

    it('should emit on dragEnd', function() {
      this.eventBus.broadcast(mockDragStartEventInt);
      expect(this.testComponent.dragStartEvent).toEqual(mockDragStartEventExt);
      this.eventBus.broadcast(mockDragEndEventInt);
      expect(this.testComponent.dragEndEvent).toEqual(mockDragEndEventExt);
    });

    it('should remove draggable-match class on dragEnd', function() {
      this.eventBus.broadcast(mockDragStartEventInt);
      this.fixture.detectChanges();
      expect(this.droppable.nativeElement.classList.contains('draggable-match')).toBeTruthy();
      this.eventBus.broadcast(mockDragEndEventInt);
      this.fixture.detectChanges();
      expect(this.droppable.nativeElement.classList.contains('draggable-match')).toBeFalsy();
    });

    it('should emit on dragEnter', function() {
      this.eventBus.broadcast(mockDragStartEventInt);
      expect(this.testComponent.dragStartEvent).toEqual(mockDragStartEventExt);
      decorateEventWithDropPosition(mockDragMoveEventInt, { pageX: 500, pageY: 300 });
      decorateEventWithDropPosition(mockDragMoveEventExt, { pageX: 500, pageY: 300 });
      this.eventBus.broadcast(mockDragMoveEventInt);
      expect(this.testComponent.dragMoveEvent).toEqual(mockDragMoveEventExt);
      const enterEventExt = new ClrDragEvent({ ...mockDragMoveEventInt, type: DragEventType.DRAG_ENTER });
      expect(this.testComponent.dragEnterEvent).toEqual(enterEventExt);
      expect(this.testComponent.dragLeaveEvent).toBeUndefined();
    });

    it('should have draggable-over on dragEnter', function() {
      this.eventBus.broadcast(mockDragStartEventInt);
      decorateEventWithDropPosition(mockDragMoveEventInt, { pageX: 500, pageY: 300 });
      this.eventBus.broadcast(mockDragMoveEventInt);
      this.fixture.detectChanges();
      expect(this.droppable.nativeElement.classList.contains('draggable-over')).toBeTruthy();
    });

    it("should not emit on dragLeave if dragEnter hasn't been registered", function() {
      this.eventBus.broadcast(mockDragStartEventInt);
      expect(this.testComponent.dragStartEvent).toEqual(mockDragStartEventExt);
      this.eventBus.broadcast(mockDragMoveEventInt);
      expect(this.testComponent.dragMoveEvent).toEqual(mockDragMoveEventExt);
      expect(this.testComponent.dragEnterEvent).not.toEqual(mockDragMoveEventExt);
      expect(this.testComponent.dragLeaveEvent).toBeUndefined();
    });

    it('should emit on dragLeave', function() {
      this.eventBus.broadcast(mockDragStartEventInt);
      expect(this.testComponent.dragStartEvent).toEqual(mockDragStartEventExt);

      decorateEventWithDropPosition(mockDragMoveEventInt, { pageX: 500, pageY: 300 });
      decorateEventWithDropPosition(mockDragMoveEventExt, { pageX: 500, pageY: 300 });
      this.eventBus.broadcast(mockDragMoveEventInt);

      expect(this.testComponent.dragMoveEvent).toEqual(mockDragMoveEventExt);
      const enterEventExt = new ClrDragEvent({ ...mockDragMoveEventInt, type: DragEventType.DRAG_ENTER });
      expect(this.testComponent.dragEnterEvent).toEqual(enterEventExt);
      decorateEventWithDropPosition(mockDragMoveEventInt, { pageX: 0, pageY: 0 });
      this.eventBus.broadcast(mockDragMoveEventInt);
      const leaveEventExt = new ClrDragEvent({ ...mockDragMoveEventInt, type: DragEventType.DRAG_LEAVE });
      expect(this.testComponent.dragLeaveEvent).toEqual(leaveEventExt);
    });

    it('should remove draggable-over class on dragLeave', function() {
      this.eventBus.broadcast(mockDragStartEventInt);
      decorateEventWithDropPosition(mockDragMoveEventInt, { pageX: 500, pageY: 300 });
      this.eventBus.broadcast(mockDragMoveEventInt);
      this.fixture.detectChanges();
      expect(this.droppable.nativeElement.classList.contains('draggable-over')).toBeTruthy();
      decorateEventWithDropPosition(mockDragMoveEventInt, { pageX: 0, pageY: 0 });
      this.eventBus.broadcast(mockDragMoveEventInt);
      this.fixture.detectChanges();
      expect(this.droppable.nativeElement.classList.contains('draggable-over')).toBeFalsy();
    });

    it("should not emit on drop if dragEnter hasn't been registered", function() {
      this.eventBus.broadcast(mockDragStartEventInt);
      decorateEventWithDropPosition(mockDragStartEventInt, { pageX: 0, pageY: 0 });
      this.eventBus.broadcast(mockDragMoveEventInt);
      expect(this.testComponent.dragStartEvent).toEqual(mockDragStartEventExt);
      expect(this.testComponent.dragMoveEvent).toEqual(mockDragMoveEventExt);
      expect(this.testComponent.dragEnterEvent).not.toEqual(mockDragMoveEventExt);
      this.eventBus.broadcast(mockDragEndEventInt);
      expect(this.testComponent.dropEvent).toBeUndefined();
    });

    it('should emit on drop if dragEnter has been registered', function() {
      this.eventBus.broadcast(mockDragStartEventInt);
      expect(this.testComponent.dragStartEvent).toEqual(mockDragStartEventExt);
      decorateEventWithDropPosition(mockDragMoveEventInt, { pageX: 500, pageY: 300 });
      decorateEventWithDropPosition(mockDragMoveEventExt, { pageX: 500, pageY: 300 });
      this.eventBus.broadcast(mockDragMoveEventInt);
      expect(this.testComponent.dragMoveEvent).toEqual(mockDragMoveEventExt);
      const enterEventExt = new ClrDragEvent({ ...mockDragMoveEventInt, type: DragEventType.DRAG_ENTER });
      expect(this.testComponent.dragEnterEvent).toEqual(enterEventExt);
      this.eventBus.broadcast(mockDragEndEventInt);
      const dropEventExt = new ClrDragEvent({ ...mockDragEndEventInt, type: DragEventType.DROP });
      expect(this.testComponent.dropEvent).toEqual(dropEventExt);
    });

    it('should remove both draggable-match and draggable-over classes on drop', function() {
      this.eventBus.broadcast(mockDragStartEventInt);
      this.fixture.detectChanges();
      expect(this.droppable.nativeElement.classList.contains('draggable-match')).toBeTruthy();
      decorateEventWithDropPosition(mockDragMoveEventInt, { pageX: 500, pageY: 300 });
      this.eventBus.broadcast(mockDragMoveEventInt);
      this.fixture.detectChanges();
      expect(this.droppable.nativeElement.classList.contains('draggable-over')).toBeTruthy();
      this.eventBus.broadcast(mockDragEndEventInt);
      this.fixture.detectChanges();
      expect(this.droppable.nativeElement.classList.contains('draggable-match')).toBeFalsy();
      expect(this.droppable.nativeElement.classList.contains('draggable-over')).toBeFalsy();
    });
  });

  describe('Droppable With clrGroup', function() {
    beforeEach(function() {
      TestBed.configureTestingModule({
        declarations: [DroppableWithGroup, ClrDroppable],
        providers: [MOCK_DRAG_DROP_EVENT_BUS],
      });

      this.fixture = TestBed.createComponent(DroppableWithGroup);
      this.testComponent = this.fixture.componentInstance;
      this.testElement = this.fixture.nativeElement;
      this.droppable = this.fixture.debugElement.query(By.directive(ClrDroppable));
      this.eventBus = TestBed.get(DragAndDropEventBusService);
      this.fixture.detectChanges();
    });

    afterEach(function() {
      this.fixture.destroy();
    });

    it('should match if droppable without group keys registers dragStart event that has no  group keys', function() {
      this.eventBus.broadcast(mockDragStartEventInt);
      this.fixture.detectChanges();
      expect(this.testComponent.dragStartEvent).toEqual(mockDragStartEventExt);
      expect(this.droppable.nativeElement.classList.contains('draggable-match')).toBeTruthy();
    });

    it('should not match if droppable with no group keys registers dragStart event with defined group', function() {
      decorateEventWithGroup(mockDragStartEventInt, 'draggable-1');
      this.eventBus.broadcast(mockDragStartEventInt);
      this.fixture.detectChanges();
      expect(this.testComponent.dragStartEvent).not.toEqual(
        mockDragStartEventExt,
        `shouldn't emit dragStart if groups don't match.`
      );
      expect(this.droppable.nativeElement.classList.contains('draggable-match')).toBeFalsy();
    });

    it("should match if droppable's group key match with dragStart event's group key", function() {
      this.testComponent.droppableGroup = 'draggable-1';
      this.fixture.detectChanges();
      decorateEventWithGroup(mockDragStartEventInt, 'draggable-1');
      this.eventBus.broadcast(mockDragStartEventInt);
      this.fixture.detectChanges();
      decorateEventWithGroup(mockDragStartEventExt, 'draggable-1');
      expect(this.testComponent.dragStartEvent).toEqual(mockDragStartEventExt);
      expect(this.droppable.nativeElement.classList.contains('draggable-match')).toBeTruthy();
    });

    it("should match if droppable's group key match with one of dragStart event's group keys", function() {
      this.testComponent.droppableGroup = 'draggable-1';
      this.fixture.detectChanges();
      decorateEventWithGroup(mockDragStartEventInt, ['draggable-1', 'draggable-2', 'draggable-3']);
      this.eventBus.broadcast(mockDragStartEventInt);
      this.fixture.detectChanges();
      decorateEventWithGroup(mockDragStartEventExt, ['draggable-1', 'draggable-2', 'draggable-3']);
      expect(this.testComponent.dragStartEvent).toEqual(mockDragStartEventExt);
      expect(this.droppable.nativeElement.classList.contains('draggable-match')).toBeTruthy();
    });

    it("should not match if none of droppable's group keys match with any of dragStart event's group keys", function() {
      this.testComponent.droppableGroup = ['draggable-1', 'draggable-2'];
      this.fixture.detectChanges();
      decorateEventWithGroup(mockDragStartEventInt, ['draggable-3', 'draggable-4', 'draggable-5']);
      decorateEventWithGroup(mockDragStartEventExt, ['draggable-3', 'draggable-4', 'draggable-5']);
      this.eventBus.broadcast(mockDragStartEventInt);
      this.fixture.detectChanges();
      expect(this.testComponent.dragStartEvent).not.toEqual(
        mockDragStartEventExt,
        `shouldn't emit dragStart if groups don't match.`
      );
      expect(this.droppable.nativeElement.classList.contains('draggable-match')).toBeFalsy();
    });

    it("should match if one of droppable's group keys match with one of dragStart event's group keys", function() {
      this.testComponent.droppableGroup = ['draggable-1', 'draggable-2', 'draggable-3'];
      this.fixture.detectChanges();
      decorateEventWithGroup(mockDragStartEventInt, ['draggable-3', 'draggable-4', 'draggable-5']);
      this.eventBus.broadcast(mockDragStartEventInt);
      this.fixture.detectChanges();
      decorateEventWithGroup(mockDragStartEventExt, ['draggable-3', 'draggable-4', 'draggable-5']);
      expect(this.testComponent.dragStartEvent).toEqual(mockDragStartEventExt);
      expect(this.droppable.nativeElement.classList.contains('draggable-match')).toBeTruthy();
    });
  });

  describe('Droppable With clrDropTolerance', function() {
    beforeEach(function() {
      TestBed.configureTestingModule({
        declarations: [DroppableWithTolerance, ClrDroppable],
        providers: [MOCK_DRAG_DROP_EVENT_BUS],
      });

      this.fixture = TestBed.createComponent(DroppableWithTolerance);
      this.testComponent = this.fixture.componentInstance;
      this.testElement = this.fixture.nativeElement;
      this.droppable = this.fixture.debugElement.query(By.directive(ClrDroppable));
      this.eventBus = TestBed.get(DragAndDropEventBusService);
      this.fixture.detectChanges();

      this.broadcastEnterLeaveEventAt = function(_pageX: number, _pageY: number) {
        if (!this.testComponent.dragStartEvent) {
          throw new Error('A drag start event should be broadcasted and registered first.');
        }
        delete this.testComponent.dragEnterEvent;
        delete this.testComponent.dragLeaveEvent;

        const dragEvent = { type: DragEventType.DRAG_MOVE, dropPointPosition: { pageX: _pageX, pageY: _pageY } };
        this.eventBus.broadcast(dragEvent);
        return dragEvent;
      };

      this.detectEnterOrLeaveAt = function(tolerance: ClrDropToleranceInterface) {
        expect(
          new ClrDragEvent({
            ...this.broadcastEnterLeaveEventAt(400 - tolerance.left, 200 - tolerance.top),
            type: DragEventType.DRAG_ENTER,
          })
        ).toEqual(this.testComponent.dragEnterEvent);
        expect(
          new ClrDragEvent({
            ...this.broadcastEnterLeaveEventAt(399 - tolerance.left, 199 - tolerance.top),
            type: DragEventType.DRAG_LEAVE,
          })
        ).toEqual(this.testComponent.dragLeaveEvent);
        expect(
          new ClrDragEvent({
            ...this.broadcastEnterLeaveEventAt(600 + tolerance.right, 200 - tolerance.top),
            type: DragEventType.DRAG_ENTER,
          })
        ).toEqual(this.testComponent.dragEnterEvent);
        expect(
          new ClrDragEvent({
            ...this.broadcastEnterLeaveEventAt(601 + tolerance.right, 199 - tolerance.top),
            type: DragEventType.DRAG_LEAVE,
          })
        ).toEqual(this.testComponent.dragLeaveEvent);
        expect(
          new ClrDragEvent({
            ...this.broadcastEnterLeaveEventAt(600 + tolerance.right, 600 + tolerance.bottom),
            type: DragEventType.DRAG_ENTER,
          })
        ).toEqual(this.testComponent.dragEnterEvent);
        expect(
          new ClrDragEvent({
            ...this.broadcastEnterLeaveEventAt(601 + tolerance.right, 601 + tolerance.bottom),
            type: DragEventType.DRAG_LEAVE,
          })
        ).toEqual(this.testComponent.dragLeaveEvent);
        expect(
          new ClrDragEvent({
            ...this.broadcastEnterLeaveEventAt(400 - tolerance.left, 600 + tolerance.bottom),
            type: DragEventType.DRAG_ENTER,
          })
        ).toEqual(this.testComponent.dragEnterEvent);
        expect(
          new ClrDragEvent({
            ...this.broadcastEnterLeaveEventAt(399 - tolerance.left, 601 + tolerance.bottom),
            type: DragEventType.DRAG_LEAVE,
          })
        ).toEqual(this.testComponent.dragLeaveEvent);
      };

      this.expectDropToleranceInput = function(userInput: number | string | ClrDropToleranceInterface) {
        this.testComponent.tolerance = userInput;
        this.fixture.detectChanges();
        this.eventBus.broadcast(mockDragStartEventInt);
        expect(this.testComponent.dragStartEvent).toEqual(mockDragStartEventExt);

        return {
          toBeCheckedAs: function(expectedResult: ClrDropToleranceInterface) {
            this.detectEnterOrLeaveAt(expectedResult);
          }.bind(this),
        };
      };
    });

    afterEach(function() {
      this.fixture.destroy();
    });

    it('can register dragEnter only if dropPointPosition is over dropppable when drop tolerance is not defined', function() {
      this.eventBus.broadcast(mockDragStartEventInt);
      expect(this.testComponent.dragStartEvent).toEqual(mockDragStartEventExt);
      this.detectEnterOrLeaveAt({ top: 0, right: 0, bottom: 0, left: 0 });
    });

    it('can register dragEnter if dropPointPosition is within drop tolerance added as number', function() {
      const tolerance: number = 20;
      this.expectDropToleranceInput(tolerance).toBeCheckedAs({
        top: tolerance,
        right: tolerance,
        bottom: tolerance,
        left: tolerance,
      });
    });

    it('can register dragEnter if dropPointPosition is within drop tolerance added as object', function() {
      const tolerance: ClrDropToleranceInterface = { top: 20, right: 40, bottom: 60, left: 80 };
      this.testComponent.tolerance = tolerance;
      this.expectDropToleranceInput(tolerance).toBeCheckedAs(tolerance);
    });

    it("can register dragEnter if dropPointPosition is within drop tolerance added as string of '20'", function() {
      this.expectDropToleranceInput('20').toBeCheckedAs({ top: 20, right: 20, bottom: 20, left: 20 });
    });

    it("can register dragEnter if dropPointPosition is within drop tolerance added as string of '20 40'", function() {
      const tolerance = { top: 20, right: 40, bottom: 20, left: 40 };
      this.expectDropToleranceInput('20 40').toBeCheckedAs({
        top: tolerance.top,
        right: tolerance.right,
        bottom: tolerance.bottom,
        left: tolerance.left,
      });
    });

    it("can register dragEnter if dropPointPosition is within drop tolerance added as string of '20 0'", function() {
      const tolerance = { top: 20, right: 0, bottom: 20, left: 0 };
      this.expectDropToleranceInput('20 0').toBeCheckedAs({
        top: tolerance.top,
        right: tolerance.right,
        bottom: tolerance.bottom,
        left: tolerance.left,
      });
    });

    it("can register dragEnter if dropPointPosition is within drop tolerance added as string of '20 0 0'", function() {
      const tolerance = { top: 20, right: 0, bottom: 0, left: 0 };
      this.testComponent.tolerance = '20 0';
      this.expectDropToleranceInput(tolerance).toBeCheckedAs({
        top: tolerance.top,
        right: tolerance.right,
        bottom: tolerance.bottom,
        left: tolerance.left,
      });
    });

    it("can register dragEnter if dropPointPosition is within drop tolerance added as string of '0 20'", function() {
      const tolerance = { top: 0, right: 20, bottom: 0, left: 20 };
      this.expectDropToleranceInput('0 20').toBeCheckedAs({
        top: tolerance.top,
        right: tolerance.right,
        bottom: tolerance.bottom,
        left: tolerance.left,
      });
    });

    it("can register dragEnter if dropPointPosition is within drop tolerance added as string of '0 0 20'", function() {
      const tolerance = { top: 0, right: 0, bottom: 20, left: 0 };
      this.expectDropToleranceInput('0 0 20').toBeCheckedAs({
        top: tolerance.top,
        right: tolerance.right,
        bottom: tolerance.bottom,
        left: tolerance.left,
      });
    });

    it("can register dragEnter if dropPointPosition is within drop tolerance added as string of '0 0 0 0'", function() {
      const tolerance = { top: 0, right: 0, bottom: 0, left: 0 };
      this.expectDropToleranceInput('0 0 0 0').toBeCheckedAs({
        top: tolerance.top,
        right: tolerance.right,
        bottom: tolerance.bottom,
        left: tolerance.left,
      });
    });

    it("can register dragEnter if dropPointPosition is within drop tolerance added as string of '20 40 10'", function() {
      const tolerance = { top: 20, right: 40, bottom: 10, left: 40 };
      this.expectDropToleranceInput('20 40 10').toBeCheckedAs({
        top: tolerance.top,
        right: tolerance.right,
        bottom: tolerance.bottom,
        left: tolerance.left,
      });
    });

    it("can register dragEnter if dropPointPosition is within drop tolerance added as string of '20 40 10 30'", function() {
      const tolerance = { top: 20, right: 40, bottom: 10, left: 30 };
      this.expectDropToleranceInput('20 40 10 30').toBeCheckedAs({
        top: tolerance.top,
        right: tolerance.right,
        bottom: tolerance.bottom,
        left: tolerance.left,
      });
    });
  });
}

@Component({
  styles: ['.basic-droppable { position: absolute; left: 400px; top: 200px; width: 200px; height: 400px; }'],
  template: `<div class="basic-droppable" clrDroppable
                    (clrDragStart)="dragStartEvent = $event;"
                    (clrDragMove)="dragMoveEvent = $event;"
                    (clrDragEnd)="dragEndEvent = $event;"
                    (clrDragLeave)="dragLeaveEvent = $event;"
                    (clrDragEnter)="dragEnterEvent = $event;"
                    (clrDrop)="dropEvent = $event;">Test</div>`,
})
class BasicDroppable {
  public dragStartEvent: any;
  public dragMoveEvent: any;
  public dragEndEvent: any;
  public dragLeaveEvent: any;
  public dragEnterEvent: any;
  public dropEvent: any;
}

@Component({
  template: `<div class="droppable-with-group" clrDroppable [clrGroup]="droppableGroup" (clrDragStart)="dragStartEvent = $event;">Test</div>`,
})
class DroppableWithGroup {
  public droppableGroup: string | string[];
  public dragStartEvent: any;
}

@Component({
  styles: ['.droppable-with-tolerance { position: absolute; left: 400px; top: 200px; width: 200px; height: 400px; }'],
  template: `<div class="droppable-with-tolerance" clrDroppable [clrDropTolerance]="tolerance" (clrDragStart)="dragStartEvent = $event;" (clrDragLeave)="dragLeaveEvent = $event;"
        (clrDragEnter)="dragEnterEvent = $event;">Test</div>`,
})
class DroppableWithTolerance {
  public tolerance: number | ClrDropToleranceInterface;
  public dragStartEvent: any;
  public dragLeaveEvent: any;
  public dragEnterEvent: any;
}
