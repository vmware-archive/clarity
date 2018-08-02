/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Injectable, NgZone, Renderer2} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

import {ClrDragEventInternal, ClrDragEventType} from "../interfaces/drag-event";
import {ClrDragAndDropEventBus} from "./drag-and-drop-event-bus";

@Injectable()
export class ClrDragEventListener<T> {
    private draggableEl: any;

    private listeners: (() => void)[];

    private dragStart: Subject<ClrDragEventInternal<T>> = new Subject<ClrDragEventInternal<T>>();
    private dragMove: Subject<ClrDragEventInternal<T>> = new Subject<ClrDragEventInternal<T>>();
    private dragEnd: Subject<ClrDragEventInternal<T>> = new Subject<ClrDragEventInternal<T>>();

    private hasDragStarted: boolean = false;

    get dragStarted(): Observable<ClrDragEventInternal<T>> {
        return this.dragStart.asObservable();
    }

    get dragMoved(): Observable<ClrDragEventInternal<T>> {
        return this.dragMove.asObservable();
    }

    get dragEnded(): Observable<ClrDragEventInternal<T>> {
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
    }

    private customDragEvent(element: Node, startOnEvent: string, moveOnEvent: string, endOnEvent: string): () => void {
        let moveListener: () => void;
        let endListener: () => void;

        return this.renderer.listen(element, startOnEvent, () => {
            moveListener = this.ngZone.runOutsideAngular(() => {
                return this.renderer.listen("document", moveOnEvent, (moveEvent: MouseEvent|TouchEvent) => {
                    moveEvent.preventDefault();

                    // Using .stopPropagation in this exceptional case,
                    // where mousemove events are registered after mousedown without any interruptions
                    // resulting in a dragging event. This is specially needed when draggables
                    // are nested inside each other.

                    moveEvent.stopPropagation();

                    if (!this.hasDragStarted) {
                        this.hasDragStarted = true;
                        // Fire "dragstart"
                        this.broadcast(moveEvent, ClrDragEventType.DRAG_START);
                    } else {
                        // Fire "dragmove"
                        this.broadcast(moveEvent, ClrDragEventType.DRAG_MOVE);
                    }
                });
            });

            endListener = this.renderer.listen("document", endOnEvent, (endEvent: MouseEvent|TouchEvent) => {
                moveListener();  // Unregister from mouseMove or touchMove
                endListener();   // Unregister from mouseUp or touchEnd

                if (this.hasDragStarted) {
                    // Fire "dragend" only if dragstart is registered
                    this.hasDragStarted = false;
                    this.broadcast(endEvent, ClrDragEventType.DRAG_END);
                }
            });
        });
    }

    private broadcast(event: MouseEvent|TouchEvent, eventType: ClrDragEventType): void {
        const dragEvent: ClrDragEventInternal<T> = this.generateDragEvent(event, eventType);

        switch (dragEvent.type) {
            case ClrDragEventType.DRAG_START:
                this.dragStart.next(dragEvent);
                break;
            case ClrDragEventType.DRAG_MOVE:
                this.dragMove.next(dragEvent);
                break;
            case ClrDragEventType.DRAG_END:
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

    private generateDragEvent(event: MouseEvent|TouchEvent, eventType: ClrDragEventType): ClrDragEventInternal<T> {
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
