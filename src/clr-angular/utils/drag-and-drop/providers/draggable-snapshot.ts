/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Injectable} from "@angular/core";
import {DomAdapter} from "../../dom-adapter/dom-adapter";
import {ClrDragEvent} from "../interfaces/drag-event";

// This service is used to capture the state of clrDraggable element
// at a certain event and passes it to clrDraggableGhost component.
@Injectable()
export class ClrDraggableSnapshot<T> {
    constructor(private domAdapter: DomAdapter) {}

    private draggableEl: Node;
    private draggableElClientRect: ClientRect;
    private draggableElComputedStyle: CSSStyleDeclaration;
    private stateEvent: ClrDragEvent<T>;

    public capture(el: Node, event: ClrDragEvent<T>) {
        this.draggableEl = el;
        this.draggableElClientRect = this.domAdapter.clientRect(this.draggableEl);
        this.draggableElComputedStyle = getComputedStyle(<HTMLElement>this.draggableEl);
        this.stateEvent = event;
    }
    public discard() {
        delete this.draggableEl;
        delete this.draggableElClientRect;
        delete this.draggableElComputedStyle;
        delete this.stateEvent;
    }
    get hasDraggableState() {
        return !!this.draggableEl;
    }
    get clientRect() {
        return this.draggableElClientRect;
    }
    get computedStyle() {
        return this.draggableElComputedStyle;
    }
    get event() {
        return this.stateEvent;
    }
}
