/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

import {ClrIconModule} from "../../icon/icon.module";
import {DomAdapter} from "../dom-adapter/dom-adapter";

import {ClrDragAndDropModule} from "./drag-and-drop.module";
import {ClrDragHandle} from "./drag-handle";
import {ClrDraggable} from "./draggable";
import {ClrDragEventListener} from "./providers/drag-event-listener";
import {MOCK_DRAG_EVENT_LISTENER_PROVIDER} from "./providers/drag-event-listener.mock";
import {ClrDragHandleRegistrar} from "./providers/drag-handle-registrar";
import {ClrDraggableSnapshot} from "./providers/draggable-snapshot";

export default function(): void {
    describe("ClrDraggable", function() {
        describe("Basic Draggable", function() {
            beforeEach(function() {
                TestBed.configureTestingModule(
                    {imports: [ClrDragAndDropModule, NoopAnimationsModule], declarations: [BasicDraggableTest]});
                TestBed.overrideComponent(ClrDraggable, {
                    set: {
                        providers: [
                            DomAdapter, ClrDragHandleRegistrar, ClrDraggableSnapshot, MOCK_DRAG_EVENT_LISTENER_PROVIDER
                        ]
                    }
                });

                this.fixture = TestBed.createComponent(BasicDraggableTest);
                this.testComponent = this.fixture.componentInstance;
                this.draggable = this.fixture.debugElement.query(By.directive(ClrDraggable));
                this.dragEventListener = this.draggable.injector.get(ClrDragEventListener);
                this.dragHandleRegistrar = this.draggable.injector.get(ClrDragHandleRegistrar);
                this.fixture.detectChanges();
            });

            afterEach(function() {
                this.fixture.destroy();
            });

            it("should have draggable class", function() {
                expect(this.draggable.nativeElement.classList.contains("draggable")).toBeTruthy();
            });

            it("should emit event on drag start and have being-dragged class", function() {
                const mockDragStartEvent = {dragPosition: {pageX: 11, pageY: 22}};
                this.dragEventListener.dragStarted.next(mockDragStartEvent);
                this.fixture.detectChanges();
                expect(this.testComponent.dragStartEvent).toBe(mockDragStartEvent);
                expect(this.testComponent.dragMoveEvent).toBeUndefined();
                expect(this.testComponent.dragEndEvent).toBeUndefined();
                expect(this.draggable.nativeElement.classList.contains("being-dragged")).toBeTruthy();
            });

            it("should emit event on drag move", function() {
                const mockDragMoveEvent = {dragPosition: {pageX: 33, pageY: 44}};
                this.dragEventListener.dragMoved.next(mockDragMoveEvent);
                expect(this.testComponent.dragStartEvent).toBeUndefined();
                expect(this.testComponent.dragMoveEvent).toBe(mockDragMoveEvent);
                expect(this.testComponent.dragEndEvent).toBeUndefined();
            });

            it("should emit event on drag end", function() {
                const mockDragEndEvent = {dragPosition: {pageX: 77, pageY: 88}};
                this.dragEventListener.dragEnded.next(mockDragEndEvent);
                this.fixture.detectChanges();
                expect(this.testComponent.dragStartEvent).toBeUndefined();
                expect(this.testComponent.dragMoveEvent).toBeUndefined();
                expect(this.testComponent.dragEndEvent).toBe(mockDragEndEvent);
                expect(this.draggable.nativeElement.classList.contains("being-dragged")).toBeFalsy();
            });

            it("should have its own element as default drag handle when there is no nested drag handle", function() {
                this.fixture.detectChanges();

                expect(this.draggable.nativeElement.classList.contains("drag-handle")).toBeTruthy();
                expect(this.dragEventListener.draggableEl).toBe(this.draggable.nativeElement);
                expect(this.dragHandleRegistrar.defaultHandleEl).toBe(this.draggable.nativeElement);
                expect(this.dragHandleRegistrar.customHandleEl).toBeUndefined();
            });

            it("should instantiate cloned version of draggable as ghost on drag start", function() {
                this.dragEventListener.dragStarted.next();
                expect(this.fixture.nativeElement.querySelectorAll("clr-draggable-ghost").length).toBe(1);
                const draggableGhost = this.fixture.nativeElement.querySelector("clr-draggable-ghost");
                expect(this.draggable.nativeElement.nextSibling)
                    .toBe(draggableGhost, `The default ghost appears next to the draggable element.`);
                expect(draggableGhost.querySelectorAll(".draggable").length).toBe(1);
                expect(draggableGhost.querySelector(".draggable").textContent).toBe("Test");
            });

            it("should remove ghost on drag end", function() {
                this.dragEventListener.dragStarted.next();
                expect(this.fixture.nativeElement.querySelectorAll("clr-draggable-ghost").length).toBe(1);
                this.dragEventListener.dragEnded.next();
                expect(this.fixture.nativeElement.querySelectorAll("clr-draggable-ghost").length).toBe(0);
            });
        });

        describe("With Custom Draggable Ghost", function() {
            beforeEach(function() {
                TestBed.configureTestingModule({
                    imports: [ClrDragAndDropModule, ClrIconModule, NoopAnimationsModule],
                    declarations: [CustomGhostTest]
                });
                TestBed.overrideComponent(ClrDraggable, {
                    set: {
                        providers: [
                            DomAdapter, ClrDragHandleRegistrar, ClrDraggableSnapshot, MOCK_DRAG_EVENT_LISTENER_PROVIDER
                        ]
                    }
                });

                this.fixture = TestBed.createComponent(CustomGhostTest);
                this.draggable = this.fixture.debugElement.query(By.directive(ClrDraggable));
                this.dragEventListener = this.draggable.injector.get(ClrDragEventListener);
                this.fixture.detectChanges();
            });

            afterEach(function() {
                this.fixture.destroy();
            });

            it("should project custom ghost on drag start", function() {
                this.dragEventListener.dragStarted.next();
                expect(this.fixture.nativeElement.querySelectorAll("clr-draggable-ghost").length).toBe(1);
                const draggableGhost = this.fixture.nativeElement.querySelector("clr-draggable-ghost");
                expect(draggableGhost.querySelectorAll("clr-icon").length).toBe(1);
            });

            it("should remove ghost on drag end", function() {
                this.dragEventListener.dragStarted.next();
                expect(this.fixture.nativeElement.querySelectorAll("clr-draggable-ghost").length).toBe(1);
                this.dragEventListener.dragEnded.next();
                expect(this.fixture.nativeElement.querySelectorAll("clr-draggable-ghost").length).toBe(0);
            });
        });
        describe("With ClrDragHandle", function() {
            beforeEach(function() {
                TestBed.configureTestingModule({imports: [ClrDragAndDropModule], declarations: [CustomHandleTest]});

                this.fixture = TestBed.createComponent(CustomHandleTest);
                this.testComponent = this.fixture.componentInstance;
                this.draggable = this.fixture.debugElement.query(By.directive(ClrDraggable));
                this.dragEventListener = this.draggable.injector.get(ClrDragEventListener);
                this.dragHandleRegistrar = this.draggable.injector.get(ClrDragHandleRegistrar);
                this.fixture.detectChanges();
            });

            afterEach(function() {
                this.fixture.destroy();
            });

            it("should have its nested handle as drag handle if it is present", function() {
                this.dragHandle = this.fixture.debugElement.query(By.directive(ClrDragHandle));
                expect(this.draggable.nativeElement.classList.contains("drag-handle")).toBeFalsy();
                expect(this.dragHandle.nativeElement.classList.contains("drag-handle")).toBeTruthy();
                expect(this.dragEventListener.draggableEl).toBe(this.dragHandle.nativeElement);
                expect(this.dragHandleRegistrar.customHandleEl).toBe(this.dragHandle.nativeElement);
            });
        });

        describe("With Custom Draggable Ghost and Handle", function() {
            beforeEach(function() {
                TestBed.configureTestingModule({
                    imports: [ClrDragAndDropModule, ClrIconModule, NoopAnimationsModule],
                    declarations: [CustomGhostAndHandleTest]
                });
                TestBed.overrideComponent(ClrDraggable, {
                    set: {
                        providers: [
                            DomAdapter, ClrDragHandleRegistrar, ClrDraggableSnapshot, MOCK_DRAG_EVENT_LISTENER_PROVIDER
                        ]
                    }
                });

                this.fixture = TestBed.createComponent(CustomGhostAndHandleTest);
                this.testComponent = this.fixture.componentInstance;
                this.draggable = this.fixture.debugElement.query(By.directive(ClrDraggable));
                this.dragEventListener = this.draggable.injector.get(ClrDragEventListener);
                this.dragHandleRegistrar = this.draggable.injector.get(ClrDragHandleRegistrar);
                this.fixture.detectChanges();
            });

            afterEach(function() {
                this.fixture.destroy();
            });

            it("should have its nested handle as drag handle if it is present", function() {
                this.dragHandle = this.fixture.debugElement.query(By.directive(ClrDragHandle));
                expect(this.draggable.nativeElement.classList.contains("drag-handle")).toBeFalsy();
                expect(this.dragHandle.nativeElement.classList.contains("drag-handle")).toBeTruthy();
                expect(this.dragEventListener.draggableEl).toBe(this.dragHandle.nativeElement);
                expect(this.dragHandleRegistrar.customHandleEl).toBe(this.dragHandle.nativeElement);
            });

            it("should project custom ghost on drag start", function() {
                this.dragEventListener.dragStarted.next();
                expect(this.fixture.nativeElement.querySelectorAll("clr-draggable-ghost").length).toBe(1);
                const draggableGhost = this.fixture.nativeElement.querySelector("clr-draggable-ghost");
                expect(draggableGhost.querySelectorAll("clr-icon").length).toBe(1);
            });

            it("should remove ghost on drag end", function() {
                this.dragEventListener.dragStarted.next();
                expect(this.fixture.nativeElement.querySelectorAll("clr-draggable-ghost").length).toBe(1);
                this.dragEventListener.dragEnded.next();
                expect(this.fixture.nativeElement.querySelectorAll("clr-draggable-ghost").length).toBe(0);
            });
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
@Component({
    template: `<div clrDraggable>Test
            <clr-draggable-ghost *clrIfDragged>
                <clr-icon shape="check"></clr-icon>
            </clr-draggable-ghost>
        </div>
    `
})
class CustomGhostTest {}
@Component({template: `<div clrDraggable><button clrDragHandle></button></div>`})
class CustomHandleTest {}

@Component({
    template: `<div clrDraggable>
                    Test
                    <clr-draggable-ghost *clrIfDragged>
                        <clr-icon shape="check"></clr-icon>
                    </clr-draggable-ghost>
                    <button clrDragHandle></button>
                </div>`
})
class CustomGhostAndHandleTest {}
