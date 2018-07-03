/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Subject} from "rxjs/Subject";

import {ClrDragEventType} from "../interfaces/drag-event";
import {ClrDragAndDropEventBus} from "./drag-and-drop-event-bus";

export class MockDragAndDropEventBus {
    public dragStarted: Subject<any> = new Subject<any>();
    public dragMoved: Subject<any> = new Subject<any>();
    public dragEnded: Subject<any> = new Subject<any>();
    public dropped: Subject<any> = new Subject<any>();

    broadcast(event: any): void {
        switch (event.type) {
            case ClrDragEventType.DRAG_START:
                this.dragStarted.next(event);
                break;
            case ClrDragEventType.DRAG_MOVE:
                this.dragMoved.next(event);
                break;
            case ClrDragEventType.DRAG_END:
                this.dragEnded.next(event);
                break;
            case ClrDragEventType.DROP:
                this.dropped.next(event);
                break;
            default:
                break;
        }
    }
}

export const MOCK_DRAG_DROP_EVENT_BUS = {
    provide: ClrDragAndDropEventBus,
    useClass: MockDragAndDropEventBus
};
