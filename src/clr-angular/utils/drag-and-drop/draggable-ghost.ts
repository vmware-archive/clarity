/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {animate, style, transition, trigger} from "@angular/animations";
import {Component, ElementRef, HostBinding, Inject} from "@angular/core";

import {DomAdapter} from "../../data/datagrid/render/dom-adapter";

import {DragDispatcher} from "./providers/drag-dispatcher";
import {CUSTOM_GHOST_STATE, CustomGhostState} from "./providers/draggable-tracker";

@Component({
    selector: "clr-draggable-ghost",
    template: `
        <ng-content></ng-content>`,
    host: {"[class.draggable-ghost]": "true", "[class.draggable-ghost--hidden]": "true", "[attr.focusable]": "false"},
    animations:
        [trigger("dragEndReset",
                 [transition(":leave", [animate(200, style({top: "{{top}}", left: "{{left}}", opacity: 0}))])])]
})
export class DraggableGhost {
    @HostBinding("@dragEndReset") dragEndResetHostAnim;

    draggableGhostEl: Node;

    constructor(private el: ElementRef, private dragDispatcher: DragDispatcher, private domAdapter: DomAdapter,
                @Inject(CUSTOM_GHOST_STATE) private customGhostState: CustomGhostState) {
        this.draggableGhostEl = el.nativeElement;

        let originalLeft: string;
        let originalTop: string;

        if (customGhostState.isDirectChild) {
            originalLeft = this.dragDispatcher.dragStartPosition.x + "px";
            originalTop = this.dragDispatcher.dragStartPosition.y + "px";
        } else {
            originalLeft = this.domAdapter.clientRectLeft(this.dragDispatcher.draggable.self) + "px";
            originalTop = this.domAdapter.clientRectTop(this.dragDispatcher.draggable.self) + "px";
        }


        this.dragEndResetHostAnim = {value: ":leave", params: {left: originalLeft, top: originalTop}};
    }
}
