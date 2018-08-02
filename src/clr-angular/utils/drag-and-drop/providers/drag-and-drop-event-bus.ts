/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

import {ClrDragEventInternal, ClrDragEventType} from "../interfaces/drag-event";

@Injectable()
export class ClrDragAndDropEventBus<T> {
    private dragStart: Subject<ClrDragEventInternal<T>> = new Subject<ClrDragEventInternal<T>>();
    private dragMove: Subject<ClrDragEventInternal<T>> = new Subject<ClrDragEventInternal<T>>();
    private dragEnd: Subject<ClrDragEventInternal<T>> = new Subject<ClrDragEventInternal<T>>();
    private drop: Subject<ClrDragEventInternal<T>> = new Subject<ClrDragEventInternal<T>>();

    get dragStarted(): Observable<ClrDragEventInternal<T>> {
        return this.dragStart.asObservable();
    }

    get dragMoved(): Observable<ClrDragEventInternal<T>> {
        return this.dragMove.asObservable();
    }

    get dragEnded(): Observable<ClrDragEventInternal<T>> {
        return this.dragEnd.asObservable();
    }

    get dropped(): Observable<ClrDragEventInternal<T>> {
        return this.drop.asObservable();
    }

    broadcast(event: ClrDragEventInternal<T>): void {
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
