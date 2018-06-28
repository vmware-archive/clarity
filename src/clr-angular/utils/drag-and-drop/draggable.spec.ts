/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

import {DomAdapter} from "../dom-adapter/dom-adapter";
import {ClrDragAndDropModule} from "./drag-and-drop.module";
import {ClrDraggable} from "./draggable";
import {ClrDragEventListener} from "./providers/drag-event-listener";
import {MOCK_DRAG_EVENT_LISTENER_PROVIDER} from "./providers/drag-event-listener.mock";
import {ClrDragHandleRegistrar} from "./providers/drag-handle-registrar";
import {ClrDraggableSnapshot} from "./providers/draggable-snapshot";
import {ClrGlobalDragMode} from "./providers/global-drag-mode";

export default function(): void {
    describe("Basic Draggable", function() {
        const mockDragStartEvent = {dragPosition: {pageX: 11, pageY: 22}};
        const mockDragMoveEvent = {dragPosition: {pageX: 33, pageY: 44}};
        const mockDragEndEvent = {dragPosition: {pageX: 77, pageY: 88}};
        beforeEach(function() {
            TestBed.configureTestingModule(
                {imports: [ClrDragAndDropModule, NoopAnimationsModule], declarations: [BasicDraggableTest]});
            TestBed.overrideComponent(ClrDraggable, {
                set: {
                    providers: [
                        DomAdapter, ClrDragHandleRegistrar, ClrDraggableSnapshot, ClrGlobalDragMode,
                        MOCK_DRAG_EVENT_LISTENER_PROVIDER
                    ]
                }
            });
            this.fixture = TestBed.createComponent(BasicDraggableTest);
            this.testComponent = this.fixture.componentInstance;
            this.draggable = this.fixture.debugElement.query(By.directive(ClrDraggable));
            this.dragEventListener = this.draggable.injector.get(ClrDragEventListener);
            this.dragHandleRegistrar = this.draggable.injector.get(ClrDragHandleRegistrar);
            this.globalDragMode = this.draggable.injector.get(ClrGlobalDragMode);
            this.fixture.detectChanges();
        });

        afterEach(function() {
            this.fixture.destroy();
        });

        it("should have draggable class", function() {
            expect(this.draggable.nativeElement.classList.contains("draggable")).toBeTruthy();
        });

        it("should emit event on drag start", function() {
            this.dragEventListener.dragStarted.next(mockDragStartEvent);
            expect(this.testComponent.dragStartEvent).toBe(mockDragStartEvent);
            expect(this.testComponent.dragMoveEvent).toBeUndefined();
            expect(this.testComponent.dragEndEvent).toBeUndefined();
        });

        it("should add being-dragged class on drag start", function() {
            this.dragEventListener.dragStarted.next(mockDragStartEvent);
            this.fixture.detectChanges();
            expect(this.draggable.nativeElement.classList.contains("being-dragged")).toBeTruthy();
        });

        it("should call GlobalDragMode.enter() on drag start", function() {
            spyOn(this.globalDragMode, "enter");
            this.dragEventListener.dragStarted.next(mockDragStartEvent);
            expect(this.testComponent.dragStartEvent).toBe(mockDragStartEvent);
            expect(this.globalDragMode.enter).toHaveBeenCalled();
        });

        it("should emit event on drag move", function() {
            this.dragEventListener.dragMoved.next(mockDragMoveEvent);
            expect(this.testComponent.dragStartEvent).toBeUndefined();
            expect(this.testComponent.dragMoveEvent).toBe(mockDragMoveEvent);
            expect(this.testComponent.dragEndEvent).toBeUndefined();
        });

        it("should emit event on drag end", function() {
            this.dragEventListener.dragEnded.next(mockDragEndEvent);
            expect(this.testComponent.dragStartEvent).toBeUndefined();
            expect(this.testComponent.dragMoveEvent).toBeUndefined();
            expect(this.testComponent.dragEndEvent).toBe(mockDragEndEvent);
        });

        it("should remove being-dragged class on drag end", function() {
            this.dragEventListener.dragEnded.next(mockDragEndEvent);
            this.fixture.detectChanges();
            expect(this.draggable.nativeElement.classList.contains("being-dragged")).toBeFalsy();
        });

        it("should call GlobalDragMode.exit() on drag end", function() {
            spyOn(this.globalDragMode, "exit");
            this.dragEventListener.dragEnded.next(mockDragEndEvent);
            expect(this.globalDragMode.exit).toHaveBeenCalled();
        });

        it("should have its own element as default drag handle when there is no nested drag handle", function() {
            expect(this.draggable.nativeElement.classList.contains("drag-handle")).toBeTruthy();
            expect(this.dragEventListener.draggableEl).toBe(this.draggable.nativeElement);
            expect(this.dragHandleRegistrar.defaultHandleEl).toBe(this.draggable.nativeElement);
            expect(this.dragHandleRegistrar.customHandleEl).toBeUndefined();
        });

        it("should instantiate cloned version of draggable as ghost on drag start", function() {
            this.dragEventListener.dragStarted.next();
            const draggableGhosts = this.fixture.nativeElement.querySelectorAll("clr-draggable-ghost");
            expect(draggableGhosts.length).toBe(1);
            expect(this.draggable.nativeElement.nextSibling)
                .toBe(draggableGhosts[0], `The default ghost appears next to the draggable element.`);
            expect(draggableGhosts[0].querySelectorAll(".draggable").length).toBe(1);
            expect(draggableGhosts[0].querySelector(".draggable").textContent).toBe("Test");
        });

        it("should remove ghost on drag end", function() {
            this.dragEventListener.dragStarted.next();
            expect(this.fixture.nativeElement.querySelectorAll("clr-draggable-ghost").length).toBe(1);
            this.dragEventListener.dragEnded.next();
            expect(this.fixture.nativeElement.querySelectorAll("clr-draggable-ghost").length).toBe(0);
        });
    });
}

@Component({
    template:
        `<div clrDraggable (clrDragStart)="dragStartEvent=$event;" (clrDragMove)="dragMoveEvent=$event;" (clrDragEnd)="dragEndEvent=$event;">Test</div>`
})
class BasicDraggableTest {
    dragStartEvent: any;
    dragMoveEvent: any;
    dragEndEvent: any;
}
