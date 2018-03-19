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
export class ClrDragAndDropEventBus {
    private dragStart: Subject<ClrDragEvent> = new Subject<ClrDragEvent>();
    private dragMove: Subject<ClrDragEvent> = new Subject<ClrDragEvent>();
    private dragEnd: Subject<ClrDragEvent> = new Subject<ClrDragEvent>();
    private drop: Subject<ClrDragEvent> = new Subject<ClrDragEvent>();

    get dragStarted(): Observable<ClrDragEvent> {
        return this.dragStart.asObservable();
    }

    get dragMoved(): Observable<ClrDragEvent> {
        return this.dragMove.asObservable();
    }

    get dragEnded(): Observable<ClrDragEvent> {
        return this.dragEnd.asObservable();
    }

    get dropped(): Observable<ClrDragEvent> {
        return this.drop.asObservable();
    }


    broadcast(event: ClrDragEvent): void {
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
