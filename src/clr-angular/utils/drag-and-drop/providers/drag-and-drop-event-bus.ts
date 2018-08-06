/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

import {DragEvent, DragEventType} from "../interfaces/drag-event";

@Injectable()
export class ClrDragAndDropEventBus<T> {
    private dragStart: Subject<DragEvent<T>> = new Subject<DragEvent<T>>();
    private dragMove: Subject<DragEvent<T>> = new Subject<DragEvent<T>>();
    private dragEnd: Subject<DragEvent<T>> = new Subject<DragEvent<T>>();
    private drop: Subject<DragEvent<T>> = new Subject<DragEvent<T>>();

    get dragStarted(): Observable<DragEvent<T>> {
        return this.dragStart.asObservable();
    }

    get dragMoved(): Observable<DragEvent<T>> {
        return this.dragMove.asObservable();
    }

    get dragEnded(): Observable<DragEvent<T>> {
        return this.dragEnd.asObservable();
    }

    get dropped(): Observable<DragEvent<T>> {
        return this.drop.asObservable();
    }

    broadcast(event: DragEvent<T>): void {
        switch (event.type) {
            case DragEventType.DRAG_START:
                this.dragStart.next(event);
                break;
            case DragEventType.DRAG_MOVE:
                this.dragMove.next(event);
                break;
            case DragEventType.DRAG_END:
                this.dragEnd.next(event);
                break;
            case DragEventType.DROP:
                this.drop.next(event);
                break;
            default:
                break;
        }
    }
}
