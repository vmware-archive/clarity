/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

import {ClrDragEvent, ClrDragEventType} from "../interfaces/drag-event";

@Injectable()
export class ClrDragAndDropEventBus<T> {
    private dragStart: Subject<ClrDragEvent<T>> = new Subject<ClrDragEvent<T>>();
    private dragMove: Subject<ClrDragEvent<T>> = new Subject<ClrDragEvent<T>>();
    private dragEnd: Subject<ClrDragEvent<T>> = new Subject<ClrDragEvent<T>>();
    private drop: Subject<ClrDragEvent<T>> = new Subject<ClrDragEvent<T>>();

    get dragStarted(): Observable<ClrDragEvent<T>> {
        return this.dragStart.asObservable();
    }

    get dragMoved(): Observable<ClrDragEvent<T>> {
        return this.dragMove.asObservable();
    }

    get dragEnded(): Observable<ClrDragEvent<T>> {
        return this.dragEnd.asObservable();
    }

    get dropped(): Observable<ClrDragEvent<T>> {
        return this.drop.asObservable();
    }

    broadcast(event: ClrDragEvent<T>): void {
        switch (event.type) {
            case ClrDragEventType.DRAG_START:
                this.dragStart.next(event);
                break;
            case ClrDragEventType.DRAG_MOVE:
                this.dragMove.next(event);
                break;
            case ClrDragEventType.DRAG_END:
                this.dragEnd.next(event);
                break;
            case ClrDragEventType.DROP:
                this.drop.next(event);
                break;
            default:
                break;
        }
    }
}
