/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export enum ClrDragEventType {
    DRAG_START,
    DRAG_MOVE,
    DRAG_END,
    DROP
}

export interface ClrDragEvent {
    // TODO: this interface will be expanded and customized as the implementation progresses.
    type: ClrDragEventType;
}
