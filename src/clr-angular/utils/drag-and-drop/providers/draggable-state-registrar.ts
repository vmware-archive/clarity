/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Injectable} from "@angular/core";
import {DomAdapter} from "../../dom-adapter/dom-adapter";


@Injectable()
export class ClrDraggableStateRegistrar {
    constructor(private domAdapter: DomAdapter) {}

    private draggableEl: Node;
    private draggableElClientRect: ClientRect;
    private draggableElComputedStyle: CSSStyleDeclaration;

    public register(el: Node) {
        this.draggableEl = el;
        this.draggableElClientRect = this.domAdapter.clientRect(this.draggableEl);
        this.draggableElComputedStyle = getComputedStyle(<HTMLElement>this.draggableEl);
    }

    public unregister() {
        delete this.draggableEl;
        delete this.draggableElClientRect;
        delete this.draggableElComputedStyle;
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
}