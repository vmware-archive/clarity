/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {DomAdapter} from "../../dom-adapter/dom-adapter";

import {ClrDragEvent, ClrDragEventType} from "../interfaces/drag-event";
import {ClrDropTolerance} from "../interfaces/drop-tolerance";
import {ClrDragAndDropEventBus} from "../providers/drag-and-drop-event-bus";

@Directive({
    selector: "[clrDroppable]",
    providers: [DomAdapter],
    host: {class: "droppable", "[class.draggable-match]": "isDraggableMatch"}
})
export class ClrDroppable<T> implements OnInit, OnDestroy {
    private dragStartSubscription: Subscription;
    private dragMoveSubscription: Subscription;
    private dragEndSubscription: Subscription;

    private droppableEl: Node;
    private clientRect: ClientRect;

    constructor(private el: ElementRef, private eventBus: ClrDragAndDropEventBus<T>, private domAdapter: DomAdapter,
                private renderer: Renderer2) {
        this.droppableEl = this.el.nativeElement;
    }

    private isDraggableMatch: boolean = false;
    private _isDraggableOver: boolean = false;

    set isDraggableOver(value: boolean) {
        // We need to add/remove this draggable-over class via Renderer2
        // because isDraggableOver is set outside of NgZone.
        if (value) {
            this.renderer.addClass(this.droppableEl, "draggable-over");
        } else {
            this.renderer.removeClass(this.droppableEl, "draggable-over");
        }
        this._isDraggableOver = value;
    }

    private _group: string|string[];
    private _dropTolerance: ClrDropTolerance = {top: 0, right: 0, bottom: 0, left: 0};

    @Input("clrGroup")
    set group(value: string|string[]) {
        this._group = value;
    }

    @Input("clrDropTolerance")
    set dropTolerance(value: number|ClrDropTolerance) {
        if (typeof value === "number") {
            this._dropTolerance.top = value;
            this._dropTolerance.right = value;
            this._dropTolerance.bottom = value;
            this._dropTolerance.left = value;
        } else if (value) {
            if (value.top) {
                this._dropTolerance.top = value.top;
            }
            if (value.right) {
                this._dropTolerance.right = value.right;
            }
            if (value.bottom) {
                this._dropTolerance.bottom = value.bottom;
            }
            if (value.left) {
                this._dropTolerance.left = value.left;
            }
        }
    }

    @Output("clrDragStart") dragStartEmitter: EventEmitter<ClrDragEvent<T>> = new EventEmitter();
    @Output("clrDragMove") dragMoveEmitter: EventEmitter<ClrDragEvent<T>> = new EventEmitter();
    @Output("clrDragEnd") dragEndEmitter: EventEmitter<ClrDragEvent<T>> = new EventEmitter();
    @Output("clrDragLeave") dragLeaveEmitter: EventEmitter<ClrDragEvent<T>> = new EventEmitter();
    @Output("clrDragEnter") dragEnterEmitter: EventEmitter<ClrDragEvent<T>> = new EventEmitter();
    @Output("clrDrop") dropEmitter: EventEmitter<ClrDragEvent<T>> = new EventEmitter();

    private unsubscribeFrom(subscription: Subscription): void {
        if (subscription) {
            subscription.unsubscribe();
        }
    }

    private checkGroupMatch(draggableGroup: string|string[]): boolean {
        if (!draggableGroup && this._group) {
            return false;
        }

        if (!this._group && draggableGroup) {
            return false;
        }

        if (!this._group && !draggableGroup) {
            return true;
        }

        if (typeof draggableGroup === "string") {
            if (typeof this._group === "string") {
                return this._group === draggableGroup;
            } else {
                return this._group.indexOf(draggableGroup) > -1;
            }
        } else {
            if (typeof this._group === "string") {
                return draggableGroup.indexOf(this._group) > -1;
            } else {
                return (this._group as string[]).filter(groupKey => draggableGroup.indexOf(groupKey) > -1).length > 0;
            }
        }
    }

    private isInDropArea(point: {pageX: number; pageY: number}): boolean {
        if (!point) {
            return false;
        }

        if (!this.clientRect) {
            this.clientRect = this.domAdapter.clientRect(this.droppableEl);
        }

        if (point.pageX >= this.clientRect.left - this._dropTolerance.left &&
            point.pageX <= this.clientRect.right + this._dropTolerance.right &&
            point.pageY >= this.clientRect.top - this._dropTolerance.top &&
            point.pageY <= this.clientRect.bottom + this._dropTolerance.bottom) {
            return true;
        } else {
            return false;
        }
    }

    private onDragStart(dragStartEvent: ClrDragEvent<T>): void {
        // Check draggable and droppable have a matching group key.
        this.isDraggableMatch = this.checkGroupMatch(dragStartEvent.group);

        // Subscribe to dragMoved and dragEnded only if draggable and droppable have a matching group key.
        if (this.isDraggableMatch) {
            this.dragStartEmitter.emit(dragStartEvent);
            this.dragMoveSubscription = this.eventBus.dragMoved.subscribe((dragMoveEvent: ClrDragEvent<T>) => {
                this.onDragMove(dragMoveEvent);
            });
            this.dragEndSubscription = this.eventBus.dragEnded.subscribe((dragEndEvent: ClrDragEvent<T>) => {
                this.onDragEnd(dragEndEvent);
            });
        }
    }

    private onDragMove(dragMoveEvent: ClrDragEvent<T>): void {
        if (!this._isDraggableOver && this.isInDropArea(dragMoveEvent.dropPointPosition)) {
            this.isDraggableOver = true;
            const dragEnterEvent = this.transformAndBroadcastEvent(dragMoveEvent, ClrDragEventType.DRAG_ENTER);
            this.dragEnterEmitter.emit(dragEnterEvent);
        } else if (this._isDraggableOver && !this.isInDropArea(dragMoveEvent.dropPointPosition)) {
            this.isDraggableOver = false;
            const dragLeaveEvent = this.transformAndBroadcastEvent(dragMoveEvent, ClrDragEventType.DRAG_LEAVE);
            this.dragLeaveEmitter.emit(dragLeaveEvent);
        }

        this.dragMoveEmitter.emit(dragMoveEvent);
    }

    private onDragEnd(dragEndEvent: ClrDragEvent<T>): void {
        if (this._isDraggableOver) {
            if (dragEndEvent.ghostElement) {
                // By this point draggable ghost component would have been destroyed,
                // but the element would be active until its animation completes.
                // As such, once the ghost is dropped over, we will give it "dropped" class.
                this.renderer.addClass(dragEndEvent.ghostElement, "dropped");
            }
            const dropEvent = this.transformAndBroadcastEvent(dragEndEvent, ClrDragEventType.DROP);
            this.dropEmitter.emit(dropEvent);
            this.isDraggableOver = false;
        }
        this.dragEndEmitter.emit(dragEndEvent);
        this.unsubscribeFrom(this.dragMoveSubscription);
        this.unsubscribeFrom(this.dragEndSubscription);
        this.isDraggableMatch = false;
        delete this.clientRect;
    }

    private transformAndBroadcastEvent(event: ClrDragEvent<T>, newEventType: ClrDragEventType): ClrDragEvent<T> {
        event.type = newEventType;
        this.eventBus.broadcast(event);
        return event;
    }

    ngOnInit() {
        this.dragStartSubscription = this.eventBus.dragStarted.subscribe((dragStartEvent: ClrDragEvent<T>) => {
            this.onDragStart(dragStartEvent);
        });
    }

    ngOnDestroy() {
        this.unsubscribeFrom(this.dragStartSubscription);
        this.unsubscribeFrom(this.dragMoveSubscription);
        this.unsubscribeFrom(this.dragEndSubscription);
        this.isDraggableMatch = false;
        this.isDraggableOver = false;
        delete this.clientRect;
    }
}
