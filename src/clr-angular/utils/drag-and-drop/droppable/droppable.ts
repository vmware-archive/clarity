/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';

import { DomAdapter } from '../../dom-adapter/dom-adapter';
import { ClrDragEvent } from '../drag-event';
import { DragEventInterface, DragEventType } from '../interfaces/drag-event.interface';
import { ClrDropToleranceInterface } from '../interfaces/drop-tolerance.interface';
import { DragAndDropEventBusService } from '../providers/drag-and-drop-event-bus.service';

@Directive({
  selector: '[clrDroppable]',
  providers: [DomAdapter],
  host: { '[class.droppable]': 'true', '[class.draggable-match]': 'isDraggableMatch' },
})
export class ClrDroppable<T> implements OnInit, OnDestroy {
  private dragStartSubscription: Subscription;
  private dragMoveSubscription: Subscription;
  private dragEndSubscription: Subscription;

  private droppableEl: any;
  private clientRect: ClientRect;

  constructor(
    private el: ElementRef,
    private eventBus: DragAndDropEventBusService<T>,
    private domAdapter: DomAdapter,
    private renderer: Renderer2
  ) {
    this.droppableEl = this.el.nativeElement;
  }

  private isDraggableMatch: boolean = false;
  private _isDraggableOver: boolean = false;

  set isDraggableOver(value: boolean) {
    // We need to add/remove this draggable-over class via Renderer2
    // because isDraggableOver is set outside of NgZone.
    if (value) {
      this.renderer.addClass(this.droppableEl, 'draggable-over');
    } else {
      this.renderer.removeClass(this.droppableEl, 'draggable-over');
    }
    this._isDraggableOver = value;
  }

  private _group: string | string[];

  @Input('clrGroup')
  set group(value: string | string[]) {
    this._group = value;
  }

  private _dropTolerance: ClrDropToleranceInterface = { top: 0, right: 0, bottom: 0, left: 0 };

  private dropToleranceGenerator(top = 0, right = top, bottom = top, left = right): ClrDropToleranceInterface {
    return { top, right, bottom, left };
  }

  @Input('clrDropTolerance')
  set dropTolerance(value: number | string | ClrDropToleranceInterface) {
    // If user provides an object here and wants to manipulate/update properties individually,
    // the object must be immutable as we generate new object based user's given object.
    if (typeof value === 'number') {
      this._dropTolerance = this.dropToleranceGenerator(value);
    } else if (typeof value === 'string') {
      const toleranceValues = value
        .trim()
        .split(/\s+/)
        .map(tolerance => parseInt(tolerance, 10));
      this._dropTolerance = this.dropToleranceGenerator(...toleranceValues);
    } else if (value) {
      // The value could be passed in as {left: 20, top: 30 }
      // In this case, the rest of the direction properties should be 0.
      // That's why we initialize properties with 0 first, then override with user's given value.
      this._dropTolerance = { ...this.dropToleranceGenerator(0), ...value };
    }
  }

  @Output('clrDragStart') dragStartEmitter: EventEmitter<ClrDragEvent<T>> = new EventEmitter();
  @Output('clrDragMove') dragMoveEmitter: EventEmitter<ClrDragEvent<T>> = new EventEmitter();
  @Output('clrDragEnd') dragEndEmitter: EventEmitter<ClrDragEvent<T>> = new EventEmitter();
  @Output('clrDragLeave') dragLeaveEmitter: EventEmitter<ClrDragEvent<T>> = new EventEmitter();
  @Output('clrDragEnter') dragEnterEmitter: EventEmitter<ClrDragEvent<T>> = new EventEmitter();
  @Output('clrDrop') dropEmitter: EventEmitter<ClrDragEvent<T>> = new EventEmitter();

  private unsubscribeFrom(subscription: Subscription): void {
    if (subscription) {
      subscription.unsubscribe();
    }
  }

  private checkGroupMatch(draggableGroup: string | string[]): boolean {
    // Both Draggable and Droppable have clrGroup input.
    // The clrGroup input can be both a string key or array of string keys in Draggable and Droppable.

    // It's not match if Draggable has no defined value assigned to clrGroup, but Droppable has a defined clrGroup.
    if (!draggableGroup && this._group) {
      return false;
    }
    // The same is true the other way round.
    if (!this._group && draggableGroup) {
      return false;
    }

    // It's match if both Draggable and Droppable have no assigned value for clrGroup.
    if (!this._group && !draggableGroup) {
      return true;
    }

    // It's match if both Draggable and Droppable have simple string keys that are matching.
    // It's match if Draggable's simple clrGroup key is matching with one of the clrGroup keys of Droppable. The
    // same is true the other way round.
    // it's match if one of the clrGroup keys of Droppable is matching with one of the clrGroup keys of Draggable.
    if (typeof draggableGroup === 'string') {
      if (typeof this._group === 'string') {
        return this._group === draggableGroup;
      } else {
        return this._group.indexOf(draggableGroup) > -1;
      }
    } else {
      if (typeof this._group === 'string') {
        return draggableGroup.indexOf(this._group) > -1;
      } else {
        return (this._group as string[]).some(groupKey => draggableGroup.indexOf(groupKey) > -1);
      }
    }
  }

  private isInDropArea(point: { pageX: number; pageY: number }): boolean {
    if (!point) {
      return false;
    }

    if (!this.clientRect) {
      this.clientRect = this.domAdapter.clientRect(this.droppableEl);
    }

    if (
      point.pageX >= this.clientRect.left - this._dropTolerance.left &&
      point.pageX <= this.clientRect.right + this._dropTolerance.right &&
      point.pageY >= this.clientRect.top - this._dropTolerance.top &&
      point.pageY <= this.clientRect.bottom + this._dropTolerance.bottom
    ) {
      return true;
    } else {
      return false;
    }
  }

  private onDragStart(dragStartEvent: DragEventInterface<T>): void {
    // Check draggable and droppable have a matching group key.
    this.isDraggableMatch = this.checkGroupMatch(dragStartEvent.group);

    // Subscribe to dragMoved and dragEnded only if draggable and droppable have a matching group key.
    if (this.isDraggableMatch) {
      this.dragStartEmitter.emit(new ClrDragEvent(dragStartEvent));
      this.dragMoveSubscription = this.eventBus.dragMoved.subscribe((dragMoveEvent: DragEventInterface<T>) => {
        this.onDragMove(dragMoveEvent);
      });
      this.dragEndSubscription = this.eventBus.dragEnded.subscribe((dragEndEvent: DragEventInterface<T>) => {
        this.onDragEnd(dragEndEvent);
      });
    }
  }

  private onDragMove(dragMoveEvent: DragEventInterface<T>): void {
    const isInDropArea = this.isInDropArea(dragMoveEvent.dropPointPosition);
    if (!this._isDraggableOver && isInDropArea) {
      this.isDraggableOver = true;
      const dragEnterEvent = { ...dragMoveEvent, type: DragEventType.DRAG_ENTER };
      this.eventBus.broadcast(dragEnterEvent);
      this.dragEnterEmitter.emit(new ClrDragEvent(dragEnterEvent));
    } else if (this._isDraggableOver && !isInDropArea) {
      this.isDraggableOver = false;
      const dragLeaveEvent = { ...dragMoveEvent, type: DragEventType.DRAG_LEAVE };
      this.eventBus.broadcast(dragLeaveEvent);
      this.dragLeaveEmitter.emit(new ClrDragEvent(dragLeaveEvent));
    }

    this.dragMoveEmitter.emit(new ClrDragEvent(dragMoveEvent));
  }

  private onDragEnd(dragEndEvent: DragEventInterface<T>): void {
    if (this._isDraggableOver) {
      if (dragEndEvent.ghostElement) {
        // By this point, the draggable ghost component is destroyed,
        // but the element would be active until its animation completes.
        // As such, once the ghost is dropped over, we will give it "dropped" class.

        // This process cannot be done in the ghost component
        // because any subscription to the drop event is ineffective or invalid
        // as the component had been already destroyed.
        this.renderer.addClass(dragEndEvent.ghostElement, 'dropped');
      }

      const dropEvent = { ...dragEndEvent, type: DragEventType.DROP };
      this.eventBus.broadcast(dropEvent);
      this.dropEmitter.emit(new ClrDragEvent(dropEvent));
      this.isDraggableOver = false;
    }
    this.dragEndEmitter.emit(new ClrDragEvent(dragEndEvent));
    this.unsubscribeFrom(this.dragMoveSubscription);
    this.unsubscribeFrom(this.dragEndSubscription);
    this.isDraggableMatch = false;
    delete this.clientRect;
  }

  ngOnInit() {
    this.dragStartSubscription = this.eventBus.dragStarted.subscribe((dragStartEvent: DragEventInterface<T>) => {
      this.onDragStart(dragStartEvent);
    });
  }

  ngOnDestroy() {
    this.unsubscribeFrom(this.dragStartSubscription);
    this.unsubscribeFrom(this.dragMoveSubscription);
    this.unsubscribeFrom(this.dragEndSubscription);
  }
}
