/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Injectable, NgZone, Renderer2} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

import {DragEvent, DragEventType} from "../interfaces/drag-event";
import {ClrDragAndDropEventBus} from "./drag-and-drop-event-bus";

@Injectable()
export class ClrDragEventListener<T> {
    private draggableEl: any;

    // contains the starting events such as mousedown and touchstart
    private listeners: (() => void)[];
    // contains the nested events that happens after/inside the starting events
    // such as selectstart, mousemove/touchmove, mouseup/touchend
    private nestedListeners: (() => void)[];

    private dragStart: Subject<DragEvent<T>> = new Subject<DragEvent<T>>();
    private dragMove: Subject<DragEvent<T>> = new Subject<DragEvent<T>>();
    private dragEnd: Subject<DragEvent<T>> = new Subject<DragEvent<T>>();

    private hasDragStarted: boolean = false;

    get dragStarted(): Observable<DragEvent<T>> {
        return this.dragStart.asObservable();
    }

    get dragMoved(): Observable<DragEvent<T>> {
        return this.dragMove.asObservable();
    }

    get dragEnded(): Observable<DragEvent<T>> {
        return this.dragEnd.asObservable();
    }

    constructor(private ngZone: NgZone, private renderer: Renderer2, private eventBus: ClrDragAndDropEventBus<T>) {}

    // Draggable component sets these properties:
    public dragDataTransfer?: T;
    public group?: string|string[];

    // DraggableGhost component sets these properties:
    public ghostElement?: any;
    public dropPointPosition?: {pageX: number; pageY: number};

    public attachDragListeners(draggableEl: Node) {
        this.draggableEl = draggableEl;
        this.listeners = [
            this.customDragEvent(this.draggableEl, "mousedown", "mousemove", "mouseup"),
            this.customDragEvent(this.draggableEl, "touchstart", "touchmove", "touchend")
        ];
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
    }

    private customDragEvent(element: Node, startOnEvent: string, moveOnEvent: string, endOnEvent: string): () => void {
        return this.renderer.listen(element, startOnEvent, () => {
            // Initialize nested listeners' property with a new empty array;
            this.nestedListeners = [];

            // This is needed to disable selection during dragging (especially in EDGE/IE11).
            this.nestedListeners.push(this.renderer.listen("document", "selectstart", (selectEvent: Event) => {
                selectEvent.preventDefault();
                selectEvent.stopImmediatePropagation();
            }));

            // Listen to mousemove/touchmove events outside of angular zone.
            this.nestedListeners.push(this.ngZone.runOutsideAngular(() => {
                return this.renderer.listen("document", moveOnEvent, (moveEvent: MouseEvent|TouchEvent) => {
                    // Event.stopImmediatePropagation() is needed here to prevent nested draggables from getting dragged
                    // altogether. We shouldn't use Event.stopPropagation() here as we are listening to the events
                    // on the global element level.

                    // With Event.stopImmediatePropagation(), it registers the events sent from the inner most draggable
                    // first. Then immediately after that, it stops listening to the same type of events on the same
                    // element. So this will help us to not register the same events that would come from the parent
                    // level draggables eventually.

                    moveEvent.stopImmediatePropagation();

                    if (!this.hasDragStarted) {
                        this.hasDragStarted = true;
                        // Fire "dragstart"
                        this.broadcast(moveEvent, DragEventType.DRAG_START);
                    } else {
                        // Fire "dragmove"
                        this.broadcast(moveEvent, DragEventType.DRAG_MOVE);
                    }
                });
            }));

            // Listen to mouseup/touchend events.
            this.nestedListeners.push(
                this.renderer.listen("document", endOnEvent, (endEvent: MouseEvent|TouchEvent) => {
                    if (this.hasDragStarted) {
                        // Fire "dragend" only if dragstart is registered
                        this.hasDragStarted = false;
                        this.broadcast(endEvent, DragEventType.DRAG_END);
                    }

                    // We must remove the the nested listeners every time drag completes.
                    if (this.nestedListeners) {
                        this.nestedListeners.map(event => event());
                    }
                }));
        });
    }

    private broadcast(event: MouseEvent|TouchEvent, eventType: DragEventType): void {
        const dragEvent: DragEvent<T> = this.generateDragEvent(event, eventType);

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

    private generateDragEvent(event: MouseEvent|TouchEvent, eventType: DragEventType): DragEvent<T> {
        let nativeEvent: any;

        if ((<TouchEvent>event).hasOwnProperty("changedTouches")) {
            nativeEvent = (<TouchEvent>event).changedTouches[0];
        } else {
            nativeEvent = event;
        }

        return {
            type: eventType,
            dragPosition: {pageX: nativeEvent.pageX, pageY: nativeEvent.pageY},
            group: this.group,
            dragDataTransfer: this.dragDataTransfer,
            ghostElement: this.ghostElement
        };
    }
}
