/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


import {InjectionToken} from "@angular/core";

let nbDraggableDirective = 0;

export const CUSTOM_GHOST_STATE = new InjectionToken<number>("CUSTOM_GHOST_STATE");

export class CustomGhostState {
    public isDirectChild: boolean = false;

    private _draggableId: string;

    get draggableId(): string {
        return this._draggableId;
    }

    constructor() {
        this._draggableId = "clrDraggable-" + (nbDraggableDirective++);
    }
}

export const CUSTOM_GHOST_STATE_PROVIDER = {
    provide: CUSTOM_GHOST_STATE,
    useClass: CustomGhostState
};
