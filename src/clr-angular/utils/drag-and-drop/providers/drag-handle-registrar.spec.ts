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

        it("registers element as default handle on assignment", function() {
            dragHandleRegistrar.defaultHandleEl = draggableEl;
            expect(dragEventListener.draggableEl).toBe(draggableEl);
            expect(draggableEl.hasListener).toBeTruthy();
            expect(draggableEl.classList.contains("drag-handle")).toBeTruthy();
        });

        it("registers custom element as handle", function() {
            dragHandleRegistrar.registerCustomHandle(customHandleEl);

            expect(dragHandleRegistrar.customHandle).toBe(customHandleEl);
            expect(dragEventListener.draggableEl).toBe(customHandleEl);

            expect(customHandleEl.hasListener).toBeTruthy();
            expect(customHandleEl.classList.contains("drag-handle")).toBeTruthy();
        });

        it("registers custom element as drag handle after default handle is set", function() {
            dragHandleRegistrar.defaultHandleEl = draggableEl;
            dragHandleRegistrar.registerCustomHandle(customHandleEl);
            // Once custom handle gets registered, listeners and drag styles should be removed from default element.
            expect(draggableEl.hasListener).toBeFalsy();
            expect(draggableEl.classList.contains("drag-handle")).toBeFalsy();

            expect(dragHandleRegistrar.customHandle).toBe(customHandleEl);
            expect(dragEventListener.draggableEl).toBe(customHandleEl);

            expect(customHandleEl.hasListener).toBeTruthy();
            expect(customHandleEl.classList.contains("drag-handle")).toBeTruthy();
        });

        it("unregisters custom handle", function() {
            dragHandleRegistrar.registerCustomHandle(customHandleEl);
            expect(dragHandleRegistrar.customHandle).toBe(customHandleEl);
            expect(customHandleEl.hasListener).toBeTruthy();
            expect(customHandleEl.classList.contains("drag-handle")).toBeTruthy();
            dragHandleRegistrar.unregisterCustomHandle();

            expect(dragHandleRegistrar.customHandle).toBeUndefined();
            expect(customHandleEl.hasListener).toBeFalsy();
            expect(customHandleEl.classList.contains("drag-handle")).toBeFalsy();
        });

        it("unregisters custom handle and fall back to default handle if default handle is set before custom handle",
           function() {
               dragHandleRegistrar.defaultHandleEl = draggableEl;
               dragHandleRegistrar.registerCustomHandle(customHandleEl);
               dragHandleRegistrar.unregisterCustomHandle();
               expect(dragHandleRegistrar.customHandle).toBeUndefined();
               expect(dragEventListener.draggableEl).toBe(draggableEl);
               expect(draggableEl.hasListener).toBeTruthy();
               expect(draggableEl.classList.contains("drag-handle")).toBeTruthy();
           });

        it("keeps custom element as drag handle even after default handle is set", function() {
            dragHandleRegistrar.registerCustomHandle(customHandleEl);
            dragHandleRegistrar.defaultHandleEl = draggableEl;

            expect(dragHandleRegistrar.customHandle).toBe(customHandleEl);
            expect(customHandleEl.hasListener).toBeTruthy();
            expect(customHandleEl.classList.contains("drag-handle")).toBeTruthy();
        });

        it("unregisters custom handle and fall back to default handle if default handle is set after custom handle",
           function() {
               dragHandleRegistrar.registerCustomHandle(customHandleEl);
               dragHandleRegistrar.defaultHandleEl = draggableEl;
               dragHandleRegistrar.unregisterCustomHandle();
               expect(dragHandleRegistrar.customHandle).toBeUndefined();
               expect(dragEventListener.draggableEl).toBe(draggableEl);
               expect(draggableEl.hasListener).toBeTruthy();
               expect(draggableEl.classList.contains("drag-handle")).toBeTruthy();
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
