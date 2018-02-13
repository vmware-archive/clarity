/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Injectable, NgZone, Renderer2} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

import {DragPosition} from "../interfaces/client-position";
import {Draggable} from "../interfaces/draggable";

@Injectable()
export class DragDispatcher {
    private _listeners: Function[];

    draggable: Draggable = {self: null};

    private _dragStartPosition: DragPosition;
    private _dragEndPosition: DragPosition;

    get dragStartPosition() {
        return this._dragStartPosition;
    }
    get dragEndPosition() {
        return this._dragEndPosition;
    }

    private _onDragStart: Subject<MouseEvent|TouchEvent> = new Subject<MouseEvent|TouchEvent>();
    private _onDragMove: Subject<MouseEvent|TouchEvent> = new Subject<MouseEvent|TouchEvent>();
    private _onDragEnd: Subject<MouseEvent|TouchEvent> = new Subject<MouseEvent|TouchEvent>();

    get onDragStart(): Observable<MouseEvent|TouchEvent> {
        return this._onDragStart.asObservable();
    }

    get onDragMove(): Observable<MouseEvent|TouchEvent> {
        return this._onDragMove.asObservable();
    }

    get onDragEnd(): Observable<MouseEvent|TouchEvent> {
        return this._onDragEnd.asObservable();
    }

    constructor(private _ngZone: NgZone, private _renderer: Renderer2) {}

    initialize() {
        if (!this.draggable.handle) {
            this.draggable.handle = this.draggable.self;
        }

        this._listeners = [
            this.customDragEvent(this.draggable.handle, "mousedown", "mousemove", "mouseup"),
            this.customDragEvent(this.draggable.handle, "touchstart", "touchmove", "touchend")
        ];
    }

    customDragEvent(element: Node, startOnEvent: string, moveOnEvent: string, endOnEvent: string): Function {
        let dragMoveListener: any;
        let dragEndListener: any;

        return this._renderer.listen(element, startOnEvent, (startEvent: any) => {
            this._dragStartPosition = {x: startEvent.clientX, y: startEvent.clientY};
            startEvent.stopPropagation();
            this.notifyDragStart(startEvent);

            dragMoveListener = this._ngZone.runOutsideAngular(() => {
                return this._renderer.listen("document", moveOnEvent, (moveEvent: any) => {
                    moveEvent.stopPropagation();
                    this.notifyDragMove(moveEvent);
                });
            });

            dragEndListener = this._renderer.listen("document", endOnEvent, (endEvent: any) => {
                // Unsubscribing from mouseMoveListener
                dragMoveListener();
                this._dragEndPosition = {x: endEvent.clientX, y: endEvent.clientY};
                endEvent.stopPropagation();
                this.notifyDragEnd(endEvent);

                // Unsubscribing from itself
                dragEndListener();
            });
        });
    }

    private notifyDragStart(event: MouseEvent|TouchEvent) {
        return this._onDragStart.next(event);
    }

    private notifyDragMove(event: MouseEvent|TouchEvent) {
        return this._onDragMove.next(event);
    }

    private notifyDragEnd(event: MouseEvent|TouchEvent) {
        return this._onDragEnd.next(event);
    }

    destroy() {
        if (this._listeners) {
            this._listeners.map(event => event());
        }
    }
}
