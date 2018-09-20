/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ElementRef, NgZone, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subscription } from 'rxjs';

import { emulateDragEvent } from '../helpers.spec';
import { DragEventInterface } from '../interfaces/drag-event.interface';
import { DragAndDropEventBusService } from './drag-and-drop-event-bus.service';
import { DragEventListenerService } from './drag-event-listener.service';

type DragTransfer = {
  data: any;
};

const expectEventPropValues = <T>(event: DragEventInterface<T>) => {
  return {
    toBe: (element: Node, pageX: number, pageY: number, dragTransfer?: T, group?: string | string[]) => {
      expect(event.dragPosition.pageX).toBe(pageX);
      expect(event.dragPosition.pageY).toBe(pageY);

      if (group) {
        expect(event.group).toEqual(group);
      } else {
        expect(event.group).toBeUndefined();
      }

      if (dragTransfer) {
        expect(event.dragDataTransfer).toEqual(dragTransfer);
      } else {
        expect(event.dragDataTransfer).toBeUndefined();
      }
    },
  };
};

export default function(): void {
  describe('Drag Event Listener', function() {
    let dragEventListenerService: DragEventListenerService<DragTransfer>;

    let fixture: ComponentFixture<any>;
    let testComponent: TestComponent;

    let draggableButton: any;

    beforeEach(function() {
      TestBed.configureTestingModule({ declarations: [TestComponent], providers: [DragAndDropEventBusService] });

      fixture = TestBed.createComponent(TestComponent);
      testComponent = fixture.componentInstance;
      fixture.detectChanges();

      dragEventListenerService = <DragEventListenerService<DragTransfer>>fixture.debugElement.injector.get(
        DragEventListenerService
      );

      draggableButton = testComponent.draggableButtonRef.nativeElement;
      fixture.detectChanges();
    });

    afterEach(() => {
      fixture.destroy();
      draggableButton = null;
      // emulateDragEvent("mouseup", 0, 0, draggableButton);
      // emulateDragEvent("touchend", 0, 0, draggableButton);
    });

    function testCases(startEvent: string, moveEvent: string, endEvent: string) {
      it(`shouldn't broadcast any drag events on single ${startEvent}`, function() {
        emulateDragEvent(startEvent, 0, 0, draggableButton);
        expect(testComponent.dragStartFired).toBeFalsy();
        expect(testComponent.dragMoveFired).toBeFalsy();
        expect(testComponent.dragEndFired).toBeFalsy();
      });

      it(`should broadcast dragstart on ${startEvent} and first ${moveEvent}`, function() {
        emulateDragEvent(startEvent, 0, 0, draggableButton);
        emulateDragEvent(moveEvent, 22, 33);

        expect(testComponent.dragStartFired).toBeTruthy();
        expectEventPropValues(testComponent.dragEvent).toBe(draggableButton, 22, 33, null);

        expect(testComponent.dragMoveFired).toBeFalsy();
        expect(testComponent.dragEndFired).toBeFalsy();
      });

      it(`should broadcast consecutive dragmove events on ${moveEvent} after dragstart`, function() {
        const testPositions = [[11, 22], [33, 44], [55, 66], [77, 88], [99, 0]];
        const nbDragMoveFired = testPositions.length;

        // dragstart
        emulateDragEvent(startEvent, 0, 0, draggableButton);
        emulateDragEvent(moveEvent, 0, 0);

        expect(testComponent.dragStartFired).toBeTruthy();

        // consecutive dragmove events
        while (testPositions.length > 0) {
          const testPosition = testPositions.pop();
          emulateDragEvent(moveEvent, testPosition[0], testPosition[1]);
          expectEventPropValues(testComponent.dragEvent).toBe(draggableButton, testPosition[0], testPosition[1], null);
        }

        expect(testComponent.nbDragMoveFired).toBe(nbDragMoveFired);
        expect(testComponent.dragEndFired).toBeFalsy();
      });

      it(`shouldn't broadcast any dragmove events on ${moveEvent} after ${startEvent} and ${endEvent}`, function() {
        // mousedown+mouseup means it just ended prematurely before firing dragstart
        emulateDragEvent(startEvent, 0, 0, draggableButton);
        emulateDragEvent(endEvent, 0, 0);

        emulateDragEvent(moveEvent, 0, 0);

        expect(testComponent.dragStartFired).toBeFalsy();
        expect(testComponent.dragMoveFired).toBeFalsy();
        expect(testComponent.dragEndFired).toBeFalsy();
      });

      it(`can broadcast proper dragstart and dragmove events after ${startEvent} and ${endEvent}`, function() {
        const testPositions = [[11, 22], [33, 44], [55, 66], [77, 88], [99, 0]];
        const nbDragMoveFired = testPositions.length;

        // mousedown+mouseup means it just ended prematurely
        emulateDragEvent(startEvent, 0, 0, draggableButton);
        emulateDragEvent(endEvent, 0, 0);

        // mousedown+mousemove should fire dragstart
        emulateDragEvent(startEvent, 0, 0, draggableButton);
        emulateDragEvent(moveEvent, 0, 0);

        expect(testComponent.nbDragMoveFired).toBe(0);

        expect(testComponent.dragStartFired).toBeTruthy();

        while (testPositions.length > 0) {
          const testPosition = testPositions.pop();
          emulateDragEvent(moveEvent, testPosition[0], testPosition[1]);
          expectEventPropValues(testComponent.dragEvent).toBe(draggableButton, testPosition[0], testPosition[1], null);
        }
        expect(testComponent.nbDragMoveFired).toBe(nbDragMoveFired);

        emulateDragEvent(endEvent, 22, 33);
        expect(testComponent.dragEndFired).toBeTruthy();
      });

      it('can broadcast dragend event on ' + endEvent + ' after dragstart registered', function() {
        // dragstart
        emulateDragEvent(startEvent, 0, 0, draggableButton);
        emulateDragEvent(moveEvent, 0, 0);

        // dragend
        emulateDragEvent(endEvent, 22, 33);

        expect(testComponent.dragStartFired).toBeTruthy();
        expect(testComponent.dragMoveFired).toBeFalsy();
        expect(testComponent.dragEndFired).toBeTruthy();
      });

      it('can broadcast dragend event on ' + endEvent + ' after dragstart and dragmove registered', function() {
        // dragstart
        emulateDragEvent(startEvent, 0, 0, draggableButton);
        emulateDragEvent(moveEvent, 0, 0);

        // dragmove
        emulateDragEvent(moveEvent, 44, 55);

        // dragend
        emulateDragEvent(endEvent, 22, 33);

        expect(testComponent.dragStartFired).toBeTruthy();
        expect(testComponent.dragMoveFired).toBeTruthy();
        expect(testComponent.dragEndFired).toBeTruthy();
      });

      it('can transfer data on each drag events', function() {
        const dataOnDragStart = { data: { test: 'dataOnDragStart' } };
        const dataOnDragMove = { data: { test: 'dataOnDragMove' } };
        const dataOnDragEnd = { data: { test: 'dataOnDragEnd' } };

        const groupOnDragStart = 'one';
        const groupOnDragMove = ['one', 'two'];
        const groupOnDragEnd = ['one', 'two', 'three'];

        dragEventListenerService.dragDataTransfer = dataOnDragStart;
        dragEventListenerService.group = groupOnDragStart;
        emulateDragEvent(startEvent, 0, 0, draggableButton);
        emulateDragEvent(moveEvent, 11, 22);

        expectEventPropValues(testComponent.dragEvent).toBe(draggableButton, 11, 22, dataOnDragStart, groupOnDragStart);

        dragEventListenerService.dragDataTransfer = dataOnDragMove;
        dragEventListenerService.group = groupOnDragMove;
        emulateDragEvent(moveEvent, 33, 44);

        expectEventPropValues(testComponent.dragEvent).toBe(draggableButton, 33, 44, dataOnDragMove, groupOnDragMove);

        dragEventListenerService.dragDataTransfer = dataOnDragEnd;
        dragEventListenerService.group = groupOnDragEnd;
        emulateDragEvent(endEvent, 55, 66);
        expectEventPropValues(testComponent.dragEvent).toBe(draggableButton, 55, 66, dataOnDragEnd, groupOnDragEnd);
      });

      it('should dispatch to Event Bus on each drag events', function() {
        emulateDragEvent(startEvent, 0, 0, draggableButton);
        emulateDragEvent(moveEvent, 0, 0);
        emulateDragEvent(moveEvent, 0, 0);
        emulateDragEvent(endEvent, 0, 0);

        expect(testComponent.dragStartDispatched).toBeTruthy();
        expect(testComponent.dragMoveDispatched).toBeTruthy();
        expect(testComponent.dragEndDispatched).toBeTruthy();
      });

      it('should detach native event handlers if detachDragListeners is called', function() {
        dragEventListenerService.detachDragListeners();

        // dragstart shouldn't fire
        emulateDragEvent(startEvent, 0, 0, draggableButton);
        emulateDragEvent(moveEvent, 0, 0);

        // dragmove shouldn't fire
        emulateDragEvent(moveEvent, 0, 0);

        // dragend shouldn't fire
        emulateDragEvent(endEvent, 0, 0);

        expect(testComponent.dragStartFired).toBeFalsy();
        expect(testComponent.dragMoveFired).toBeFalsy();
        expect(testComponent.dragEndFired).toBeFalsy();
      });
    }

    describe('from mouse events', function() {
      testCases('mousedown', 'mousemove', 'mouseup');
    });

    describe('from touch events', function() {
      testCases('touchstart', 'touchmove', 'touchend');
    });
  });
}

@Component({
  providers: [DragEventListenerService], // Should be declared here in a component level, not in the TestBed because Renderer2 wouldn't be present
  template: `<button #draggableButton></button>`,
})
class TestComponent implements OnInit, OnDestroy {
  dragStartDispatched = false;
  dragMoveDispatched = false;
  dragEndDispatched = false;

  dragStartFired = false;
  dragMoveFired = false;
  dragEndFired = false;

  dragEvent: DragEventInterface<DragTransfer>;

  nbDragMoveFired = 0;

  constructor(
    renderer: Renderer2,
    ngZone: NgZone,
    private dragEventListener: DragEventListenerService<DragTransfer>,
    private eventBus: DragAndDropEventBusService<DragTransfer>
  ) {}

  @ViewChild('draggableButton') draggableButtonRef: ElementRef;

  private subscriptions: Subscription[] = [];

  ngOnInit() {
    this.dragEventListener.attachDragListeners(this.draggableButtonRef.nativeElement);

    this.subscriptions.push(
      this.dragEventListener.dragStarted.subscribe((event: DragEventInterface<DragTransfer>) => {
        this.dragEvent = event;
        this.dragStartFired = true;
      })
    );
    this.subscriptions.push(
      this.dragEventListener.dragMoved.subscribe((event: DragEventInterface<DragTransfer>) => {
        this.dragEvent = event;
        this.dragMoveFired = true;
        this.nbDragMoveFired++;
      })
    );
    this.subscriptions.push(
      this.dragEventListener.dragEnded.subscribe((event: DragEventInterface<DragTransfer>) => {
        this.dragEvent = event;
        this.dragEndFired = true;
      })
    );

    this.subscriptions.push(
      this.eventBus.dragStarted.subscribe((event: DragEventInterface<DragTransfer>) => {
        this.dragStartDispatched = true;
      })
    );
    this.subscriptions.push(
      this.eventBus.dragMoved.subscribe((event: DragEventInterface<DragTransfer>) => {
        this.dragMoveDispatched = true;
      })
    );
    this.subscriptions.push(
      this.eventBus.dragEnded.subscribe((event: DragEventInterface<DragTransfer>) => {
        this.dragEndDispatched = true;
      })
    );
  }

  ngOnDestroy() {
    this.dragEventListener.detachDragListeners();
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
