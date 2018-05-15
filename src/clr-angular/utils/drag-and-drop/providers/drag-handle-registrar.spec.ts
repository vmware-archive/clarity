/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {ClrDragAndDropEventBus} from "./drag-and-drop-event-bus";
import {ClrDragEventListener} from "./drag-event-listener";
import {MOCK_DRAG_EVENT_LISTENER_PROVIDER} from "./drag-event-listener.mock";
import {ClrDragHandleRegistrar} from "./drag-handle-registrar";

export default function(): void {
    describe("Drag Handle Registrar", function() {
        let fixture: ComponentFixture<any>;
        let testComponent: DragHandleTestComponent;

        const draggableEl = document.createElement("div");
        const customHandleEl = document.createElement("button");

        // Providers
        let dragHandleRegistrar: any;
        let dragEventListener: any;

        beforeEach(() => {
            TestBed.configureTestingModule(
                {declarations: [DragHandleTestComponent], providers: [ClrDragAndDropEventBus]});
            fixture = TestBed.createComponent(DragHandleTestComponent);
            testComponent = fixture.componentInstance;
            dragHandleRegistrar = fixture.debugElement.injector.get(ClrDragHandleRegistrar);
            dragEventListener = fixture.debugElement.injector.get(ClrDragEventListener);
        });

        afterEach(() => {
            fixture.destroy();
        });

        it("should be able to register element as default handle", function() {
            dragHandleRegistrar.draggableEl = draggableEl;
            expect(dragHandleRegistrar.customHandle).toBeUndefined();
            expect(draggableEl.classList.contains("drag-handle")).toBeTruthy();
            expect(dragEventListener.draggableEl).toBe(draggableEl);
        });

        it("should be able to register custom element as drag handle", function() {
            dragHandleRegistrar.draggableEl = draggableEl;
            dragHandleRegistrar.registerCustomHandle(customHandleEl);
            expect(draggableEl.classList.contains("drag-handle")).toBeFalsy();
            expect(dragHandleRegistrar.customHandle).toBe(customHandleEl);
            expect(dragEventListener.draggableEl).toBe(customHandleEl);
        });

        it("should be able to unregister custom element and fallback to default handle", function() {
            dragHandleRegistrar.draggableEl = draggableEl;
            dragHandleRegistrar.registerCustomHandle(customHandleEl);

            dragHandleRegistrar.unregisterCustomHandle();
            expect(dragHandleRegistrar.customHandle).toBeUndefined();
            expect(draggableEl.classList.contains("drag-handle")).toBeTruthy();
            expect(dragEventListener.draggableEl).toBe(draggableEl);
        });
    });
}

@Component({
    providers: [
        MOCK_DRAG_EVENT_LISTENER_PROVIDER,
        ClrDragHandleRegistrar
    ],  // Should be declared here in a component level, not in the TestBed because Renderer2 wouldn't be present
    template: "<div>Test</div>"
})
class DragHandleTestComponent {}
