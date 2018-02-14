/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {DraggableEvent} from "../interfaces/draggable-event";

@Injectable()
export class DragAndDropDispatcher {
    private _onDragStart: Subject<DraggableEvent> = new Subject<DraggableEvent>();
    private _onDragMove: Subject<DraggableEvent> = new Subject<DraggableEvent>();
    private _onDragEnd: Subject<DraggableEvent> = new Subject<DraggableEvent>();
    private _onDrop: Subject<void> = new Subject<void>();

    get onDragStart(): Observable<DraggableEvent> {
        return this._onDragStart.asObservable();
    }

    get onDragMove(): Observable<DraggableEvent> {
        return this._onDragMove.asObservable();
    }

    get onDragEnd(): Observable<DraggableEvent> {
        return this._onDragEnd.asObservable();
    }

    get onDrop(): Observable<void> {
        return this._onDrop.asObservable();
    }

    dragStart(dragEvent: DraggableEvent) {
        this._onDragStart.next(dragEvent);
    }

    dragMove(dragEvent: DraggableEvent) {
        this._onDragMove.next(dragEvent);
    }

    dragEnd(dragEvent: DraggableEvent) {
        this._onDragEnd.next(dragEvent);
    }

    drop() {
        this._onDrop.next();
    }
}
