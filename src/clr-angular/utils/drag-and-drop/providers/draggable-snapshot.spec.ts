/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {DomAdapter} from "../../dom-adapter/dom-adapter";
import {ClrDragEventType} from "../interfaces/drag-event";

import {ClrDraggableSnapshot} from "./draggable-snapshot";

export default function(): void {
    describe("Draggable State Registrar", function() {
        const mockDraggable = document.createElement("div");
        const mockDragMoveEvent = {
            dragPosition: {pageX: 11, pageY: 22},
            draggableElement: mockDraggable,
            type: ClrDragEventType.DRAG_START
        };
        document.body.appendChild(mockDraggable);

        mockDraggable.style.position = "absolute";
        mockDraggable.style.width = "100px";
        mockDraggable.style.height = "50px";
        mockDraggable.style.left = "90px";
        mockDraggable.style.top = "45px";
        mockDraggable.style.marginLeft = "10px";
        mockDraggable.style.marginTop = "5px";

        const domAdapter = new DomAdapter();
        const draggableStateRegistrar = new ClrDraggableSnapshot(domAdapter);

        it("registers element and sets clientRect and computedStyle", function() {
            expect(draggableStateRegistrar.hasDraggableState).toBeFalsy();
            draggableStateRegistrar.capture(mockDraggable, mockDragMoveEvent);
            expect(draggableStateRegistrar.hasDraggableState).toBeTruthy();
            expect(draggableStateRegistrar.clientRect).toEqual(domAdapter.clientRect(mockDraggable));
            expect(draggableStateRegistrar.computedStyle).toEqual(getComputedStyle(mockDraggable));
            expect(draggableStateRegistrar.event).toEqual(mockDragMoveEvent);
        });

        it("unregisters element and deletes clientRect and computedStyle", function() {
            expect(draggableStateRegistrar.hasDraggableState).toBeTruthy();
            draggableStateRegistrar.discard();
            expect(draggableStateRegistrar.hasDraggableState).toBeFalsy();
            expect(draggableStateRegistrar.clientRect).toBeUndefined();
            expect(draggableStateRegistrar.computedStyle).toBeUndefined();
            expect(draggableStateRegistrar.event).toBeUndefined();
        });
    });
}
