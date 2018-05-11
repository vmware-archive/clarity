/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Subject} from "rxjs/Subject";
import {ClrDragEventListener} from "./drag-event-listener";

export class MockDragEventListener {
    public dragStarted: Subject<any> = new Subject<any>();
    public dragEnded: Subject<any> = new Subject<any>();
}

export const MOCK_DRAG_EVENT_LISTENER_PROVIDER = {
    provide: ClrDragEventListener,
    useClass: MockDragEventListener
};