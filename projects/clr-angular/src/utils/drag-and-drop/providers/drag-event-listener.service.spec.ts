/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Subscription } from 'rxjs';
import { emulateDragEvent, generateDragPosition } from '../helpers.spec';
import { DragEventInterface, DragPointPosition } from '../interfaces/drag-event.interface';
import { DragAndDropEventBusService } from './drag-and-drop-event-bus.service';
import { DragEventListenerService } from './drag-event-listener.service';

type DragTransfer = {
  data: any;
};

const expectEventPropValues = <T>(event: DragEventInterface<T>) => {
  return {
    toBe: (_element: Node, dragPosition: DragPointPosition, dragTransfer?: T, group?: string | string[]) => {
      expect(event.dragPosition).toEqual(dragPosition);

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

export default function (): void {
  describe('Drag Event Listener', function () {
    let dragEventListenerService: DragEventListenerService<DragTransfer>;

    let fixture: ComponentFixture<any>;
    let testComponent: TestComponent;

    let draggableButton: any;

    // the position for the mousedown/touchstart event
    const startPosition: [number, number] = [5, 10];

    // the first move event that creates a dragstart event
    const firstMovePosition: [number, number] = [6, 11];

    // the position when the mouseup/touchend event gets registered
    // right after the mousedown/touchstart event with no prior registered mousemove/touchmove events
    const prematureEndPosition: [number, number] = startPosition;

    // the position for the mousemove/touchmove event after the dragstart event gets registered
    const movePosition: [number, number] = [44, 55];

    // the positions for the consecutive mousemove/touchmove events that consequently create dragmove events
    let movePositions: [number, number][];

    // the position for the mouseup/touchend event that creates dragend event
    const endPosition: [number, number] = [22, 33];

    beforeEach(function () {
      movePositions = [
        [11, 22],
        [33, 44],
        [55, 66],
        [77, 88],
        [99, 0],
      ];

      TestBed.configureTestingModule({ declarations: [TestComponent], providers: [DragAndDropEventBusService] });

      fixture = TestBed.createComponent(TestComponent);
      testComponent = fixture.componentInstance;
      fixture.detectChanges();

      dragEventListenerService = fixture.debugElement.injector.get(DragEventListenerService);

      draggableButton = testComponent.draggableButtonRef.nativeElement;
      fixture.detectChanges();
    });

    afterEach(() => {
      fixture.destroy();
      draggableButton = null;
    });

    function testCases(startEvent: string, moveEvent: string, endEvent: string) {
      it(`should broadcast dragstart on ${startEvent}`, fakeAsync(function () {
        emulateDragEvent(startEvent, ...startPosition, draggableButton);
        tick();

        expect(testComponent.dragStartFired).toBeTruthy();
        expectEventPropValues(testComponent.dragEvent).toBe(draggableButton, generateDragPosition(startPosition), null);

        expect(testComponent.dragMoveFired).toBeFalsy();
        expect(testComponent.dragEndFired).toBeFalsy();
      }));

      it(`should broadcast consecutive dragmove events on ${moveEvent} after dragstart`, fakeAsync(function () {
        const nbDragMoveFired = movePositions.length;
        // dragstart
        emulateDragEvent(startEvent, ...startPosition, draggableButton);
        tick();

        expect(testComponent.dragStartFired).toBeTruthy();

        // consecutive dragmove events
        while (movePositions.length > 0) {
          const testPosition: [number, number] = movePositions.pop();
          emulateDragEvent(moveEvent, ...testPosition);
          expectEventPropValues(testComponent.dragEvent).toBe(
            draggableButton,
            generateDragPosition(startPosition, testPosition),
            null
          );
        }

        expect(testComponent.nbDragMoveFired).toBe(nbDragMoveFired);
        expect(testComponent.dragEndFired).toBeFalsy();
      }));

      it(`shouldn't broadcast any dragmove events on ${moveEvent} after ${startEvent} and ${endEvent}`, function () {
        // mousedown+mouseup means it just ended prematurely before firing dragstart
        emulateDragEvent(startEvent, ...startPosition, draggableButton);
        emulateDragEvent(endEvent, ...firstMovePosition);

        emulateDragEvent(moveEvent, ...startPosition);

        expect(testComponent.dragStartFired).toBeFalsy();
        expect(testComponent.dragMoveFired).toBeFalsy();
        expect(testComponent.dragEndFired).toBeFalsy();
      });

      it(`can broadcast proper drag events after ${startEvent} and ${endEvent}`, fakeAsync(function () {
        const nbDragMoveFired = movePositions.length;

        // mousedown+mouseup means it just ended prematurely
        emulateDragEvent(startEvent, ...startPosition, draggableButton);
        tick();
        emulateDragEvent(endEvent, ...prematureEndPosition);

        // mousedown+mousemove should fire dragstart
        emulateDragEvent(startEvent, ...startPosition, draggableButton);
        tick();

        expect(testComponent.nbDragMoveFired).toBe(0);

        expect(testComponent.dragStartFired).toBeTruthy();

        while (movePositions.length > 0) {
          const testPosition: [number, number] = movePositions.pop();
          emulateDragEvent(moveEvent, testPosition[0], testPosition[1]);
          expectEventPropValues(testComponent.dragEvent).toBe(
            draggableButton,
            generateDragPosition(startPosition, testPosition),
            null
          );
        }
        expect(testComponent.nbDragMoveFired).toBe(nbDragMoveFired);

        emulateDragEvent(endEvent, ...endPosition);
        expect(testComponent.dragEndFired).toBeTruthy();
      }));

      it(
        'can broadcast dragend event on ' + endEvent + ' after dragstart registered',
        fakeAsync(function () {
          // dragstart
          emulateDragEvent(startEvent, ...startPosition, draggableButton);
          tick();

          // dragend
          emulateDragEvent(endEvent, ...endPosition);

          expect(testComponent.dragStartFired).toBeTruthy();
          expect(testComponent.dragMoveFired).toBeFalsy();
          expect(testComponent.dragEndFired).toBeTruthy();
        })
      );

      it(
        'can broadcast dragend event on ' + endEvent + ' after dragstart and dragmove registered',
        fakeAsync(function () {
          // dragstart
          emulateDragEvent(startEvent, ...startPosition, draggableButton);
          tick();

          // dragmove
          emulateDragEvent(moveEvent, ...movePosition);

          // dragend
          emulateDragEvent(endEvent, ...endPosition);

          expect(testComponent.dragStartFired).toBeTruthy();
          expect(testComponent.dragMoveFired).toBeTruthy();
          expect(testComponent.dragEndFired).toBeTruthy();
        })
      );

      it('can transfer data on each drag events', fakeAsync(function () {
        const dataOnDragStart = { data: { test: 'dataOnDragStart' } };
        const dataOnDragMove = { data: { test: 'dataOnDragMove' } };
        const dataOnDragEnd = { data: { test: 'dataOnDragEnd' } };

        const groupOnDragStart = 'one';
        const groupOnDragMove = ['one', 'two'];
        const groupOnDragEnd = ['one', 'two', 'three'];

        dragEventListenerService.dragDataTransfer = dataOnDragStart;
        dragEventListenerService.group = groupOnDragStart;
        emulateDragEvent(startEvent, ...startPosition, draggableButton);
        tick();

        expectEventPropValues(testComponent.dragEvent).toBe(
          draggableButton,
          generateDragPosition(startPosition),
          dataOnDragStart,
          groupOnDragStart
        );

        dragEventListenerService.dragDataTransfer = dataOnDragMove;
        dragEventListenerService.group = groupOnDragMove;
        emulateDragEvent(moveEvent, ...movePosition);

        expectEventPropValues(testComponent.dragEvent).toBe(
          draggableButton,
          generateDragPosition(startPosition, movePosition),
          dataOnDragMove,
          groupOnDragMove
        );

        dragEventListenerService.dragDataTransfer = dataOnDragEnd;
        dragEventListenerService.group = groupOnDragEnd;
        emulateDragEvent(endEvent, ...endPosition);
        expectEventPropValues(testComponent.dragEvent).toBe(
          draggableButton,
          generateDragPosition(startPosition, endPosition),
          dataOnDragEnd,
          groupOnDragEnd
        );
      }));

      it('should dispatch to Event Bus on each drag events', fakeAsync(function () {
        emulateDragEvent(startEvent, ...startPosition, draggableButton);
        tick();
        emulateDragEvent(moveEvent, ...movePosition);
        emulateDragEvent(endEvent, ...endPosition);

        expect(testComponent.dragStartDispatched).toBeTruthy();
        expect(testComponent.dragMoveDispatched).toBeTruthy();
        expect(testComponent.dragEndDispatched).toBeTruthy();
      }));

      it('should detach native event handlers if detachDragListeners is called', fakeAsync(function () {
        dragEventListenerService.detachDragListeners();

        // dragstart shouldn't fire
        emulateDragEvent(startEvent, ...startPosition, draggableButton);
        tick();

        // dragmove shouldn't fire
        emulateDragEvent(moveEvent, ...movePosition);

        // dragend shouldn't fire
        emulateDragEvent(endEvent, ...endPosition);

        expect(testComponent.dragStartFired).toBeFalsy();
        expect(testComponent.dragMoveFired).toBeFalsy();
        expect(testComponent.dragEndFired).toBeFalsy();
      }));
    }

    describe('from mouse events', function () {
      testCases('mousedown', 'mousemove', 'mouseup');
    });

    describe('from touch events', function () {
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
    private dragEventListener: DragEventListenerService<DragTransfer>,
    private eventBus: DragAndDropEventBusService<DragTransfer>
  ) {}

  @ViewChild('draggableButton', { static: true })
  draggableButtonRef: ElementRef;

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
      this.eventBus.dragStarted.subscribe(() => {
        this.dragStartDispatched = true;
      })
    );
    this.subscriptions.push(
      this.eventBus.dragMoved.subscribe(() => {
        this.dragMoveDispatched = true;
      })
    );
    this.subscriptions.push(
      this.eventBus.dragEnded.subscribe(() => {
        this.dragEndDispatched = true;
      })
    );
  }

  ngOnDestroy() {
    this.dragEventListener.detachDragListeners();
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
