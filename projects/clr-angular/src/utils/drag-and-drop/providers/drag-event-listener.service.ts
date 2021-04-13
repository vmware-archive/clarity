/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable, NgZone, Renderer2 } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { DragEventInterface, DragEventType, DragPointPosition } from '../interfaces/drag-event.interface';
import { DragAndDropEventBusService } from './drag-and-drop-event-bus.service';

@Injectable()
export class DragEventListenerService<T> {
  private draggableEl: any;

  // contains listeners for the starting events such as mousedown and touchstart
  private listeners: (() => void)[] = [];
  // contains listeners for nested events that happens after/inside the starting events
  // such as selectstart, mousemove/touchmove, mouseup/touchend
  private nestedListeners: (() => void)[];

  // contains listener for mousemove/touchmove before delay
  private checkDragStartBoundaryListener: () => void;

  private dragStart: Subject<DragEventInterface<T>> = new Subject<DragEventInterface<T>>();
  private dragMove: Subject<DragEventInterface<T>> = new Subject<DragEventInterface<T>>();
  private dragEnd: Subject<DragEventInterface<T>> = new Subject<DragEventInterface<T>>();

  private hasDragStarted = false;

  private dragStartDelayTimeout: ReturnType<typeof setTimeout>;

  get dragStarted(): Observable<DragEventInterface<T>> {
    return this.dragStart.asObservable();
  }

  get dragMoved(): Observable<DragEventInterface<T>> {
    return this.dragMove.asObservable();
  }

  get dragEnded(): Observable<DragEventInterface<T>> {
    return this.dragEnd.asObservable();
  }

  get dragStartPosition(): DragPointPosition {
    return this.initialPosition;
  }

  constructor(private ngZone: NgZone, private renderer: Renderer2, private eventBus: DragAndDropEventBusService<T>) {}

  private initialPosition: DragPointPosition;

  // Draggable component sets these properties:
  public dragDataTransfer?: T;
  public group?: string | string[];
  public dragStartDelay = 0;

  // DraggableGhost component sets these properties:
  public ghostElement?: any;
  public dropPointPosition?: DragPointPosition;

  public attachDragListeners(draggableEl: Node) {
    this.draggableEl = draggableEl;
    this.listeners.push(this.customDragEvent(this.draggableEl, 'mousedown', 'mousemove', 'mouseup'));
    this.listeners.push(this.customDragEvent(this.draggableEl, 'touchstart', 'touchmove', 'touchend'));
  }

  public detachDragListeners() {
    if (this.listeners) {
      this.listeners.map(event => event());
    }

    // In most cases, once users start dragging with mousedown/touchstart events,
    // they will end dragging at one point with mouseup/touchend.
    // However, there might be a few cases where mousedown/touchstart events get registered,
    // but the draggable element gets removed before user ends dragging.
    // In that case, we need to remove the attached listeners that happened during the mousedown/touchstart events.
    if (this.nestedListeners) {
      this.nestedListeners.map(event => event());
    }

    if (this.checkDragStartBoundaryListener) {
      this.checkDragStartBoundaryListener();
    }
  }

  private getNativeEventObject(event: MouseEvent | TouchEvent): any {
    if ((event as TouchEvent).hasOwnProperty('changedTouches')) {
      return (event as TouchEvent).changedTouches[0];
    } else {
      return event;
    }
  }

  private customDragEvent(element: Node, startOnEvent: string, moveOnEvent: string, endOnEvent: string): () => void {
    return this.renderer.listen(element, startOnEvent, (startEvent: MouseEvent | TouchEvent) => {
      // save the initial point to initialPosition
      // this will be used to calculate how far the draggable has been dragged from its initial position
      this.initialPosition = {
        pageX: this.getNativeEventObject(startEvent).pageX,
        pageY: this.getNativeEventObject(startEvent).pageY,
      };

      // Initialize nested listeners' property with a new empty array;
      this.nestedListeners = [];

      // This is needed to disable selection during dragging (especially in EDGE/IE11).
      this.nestedListeners.push(
        this.renderer.listen('document', 'selectstart', (selectEvent: Event) => {
          selectEvent.preventDefault();
          selectEvent.stopImmediatePropagation();
        })
      );

      // Listen to mousemove/touchmove events outside of angular zone.
      this.ngZone.runOutsideAngular(() => {
        // During the drag start delay, pointer should stay within the boundary.
        this.checkDragStartBoundary(moveOnEvent);

        this.dragStartDelayTimeout = setTimeout(() => {
          if (this.checkDragStartBoundaryListener) {
            this.checkDragStartBoundaryListener();
          }

          this.hasDragStarted = true;
          // Fire "dragstart"
          this.broadcast(startEvent, DragEventType.DRAG_START);

          this.nestedListeners.push(
            this.renderer.listen('document', moveOnEvent, (moveEvent: MouseEvent | TouchEvent) => {
              // Event.stopImmediatePropagation() is needed here to prevent nested draggables from getting dragged
              // altogether. We shouldn't use Event.stopPropagation() here as we are listening to the events
              // on the global element level.

              // With Event.stopImmediatePropagation(), it registers the events sent from the inner most draggable
              // first. Then immediately after that, it stops listening to the same type of events on the same
              // element. So this will help us to not register the same events that would come from the parent
              // level draggables eventually.

              moveEvent.stopImmediatePropagation();

              if (this.hasDragStarted) {
                // Fire "dragmove"
                this.broadcast(moveEvent, DragEventType.DRAG_MOVE);
              }
            })
          );
        }, this.dragStartDelay);
      });

      // Listen to mouseup/touchend events.
      this.nestedListeners.push(
        this.renderer.listen('document', endOnEvent, (endEvent: MouseEvent | TouchEvent) => {
          if (this.hasDragStarted) {
            // Fire "dragend" only if dragstart is registered
            this.hasDragStarted = false;
            this.broadcast(endEvent, DragEventType.DRAG_END);
          }

          clearTimeout(this.dragStartDelayTimeout);

          // We must remove the the nested listeners every time drag completes.
          this.nestedListeners.map(event => event());

          // We must remove the event listener from checkDragStartBoundary
          if (this.checkDragStartBoundaryListener) {
            this.checkDragStartBoundaryListener();
          }
        })
      );
    });
  }

  private checkDragStartBoundary(eventType: string): void {
    this.checkDragStartBoundaryListener = this.renderer.listen(
      'document',
      eventType,
      (moveEvent: MouseEvent | TouchEvent) => {
        const deltaX = Math.abs(this.getNativeEventObject(moveEvent).pageX - this.initialPosition.pageX);
        const deltaY = Math.abs(this.getNativeEventObject(moveEvent).pageY - this.initialPosition.pageY);

        // If pointer move delta exceeds horizontal or vertical threshold,
        // we should cancel drag initiation.
        if (deltaX > 1 || deltaY > 1) {
          clearTimeout(this.dragStartDelayTimeout);
          if (this.checkDragStartBoundaryListener) {
            this.checkDragStartBoundaryListener();
          }
        }
      }
    );
  }

  private broadcast(event: MouseEvent | TouchEvent, eventType: DragEventType): void {
    const dragEvent: DragEventInterface<T> = this.generateDragEvent(event, eventType);

    switch (dragEvent.type) {
      case DragEventType.DRAG_START:
        this.dragStart.next(dragEvent);
        break;
      case DragEventType.DRAG_MOVE:
        this.dragMove.next(dragEvent);
        break;
      case DragEventType.DRAG_END:
        this.dragEnd.next(dragEvent);
        break;
      default:
        break;
    }

    // The following properties are set after they are broadcasted to the DraggableGhost component.
    dragEvent.ghostElement = this.ghostElement;
    dragEvent.dropPointPosition = this.dropPointPosition;

    this.eventBus.broadcast(dragEvent);
  }

  private generateDragEvent(event: MouseEvent | TouchEvent, eventType: DragEventType): DragEventInterface<T> {
    const nativeEvent: any = this.getNativeEventObject(event);

    return {
      type: eventType,
      dragPosition: {
        pageX: nativeEvent.pageX,
        pageY: nativeEvent.pageY,
        moveX: nativeEvent.pageX - this.initialPosition.pageX,
        moveY: nativeEvent.pageY - this.initialPosition.pageY,
      },
      group: this.group,
      dragDataTransfer: this.dragDataTransfer,
      ghostElement: this.ghostElement,
    };
  }
}
