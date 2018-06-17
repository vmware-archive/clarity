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

import {ClrDraggableGhost} from ".";
import {ClrDragAndDropModule} from "./drag-and-drop.module";
import {ClrDragEventListener} from "./providers/drag-event-listener";
import {MOCK_DRAG_EVENT_LISTENER_PROVIDER} from "./providers/drag-event-listener.mock";
import {ClrDraggableSnapshot} from "./providers/draggable-snapshot";

export default function(): void {
    describe("ClrDraggableGhost", function() {
        describe("Without Wrapping ClrDraggable", function() {
            it("should throw an error with a message", function() {
                TestBed.configureTestingModule({
                    declarations: [WithNoWrappingDraggable, ClrDraggableGhost],
                    providers: [ClrDraggableSnapshot, DomAdapter]
                });

                expect(function() {
                    this.fixture = TestBed.createComponent(WithNoWrappingDraggable);
                }).toThrowError(
                    "The clr-draggable-ghost component can only be used inside of a clrDraggable directive."
                );
            });
        });

        describe("With Wrapping ClrDraggable", function() {
            const mockDraggable = document.createElement("div");
            document.body.appendChild(mockDraggable);

            mockDraggable.style.position = "absolute";
            mockDraggable.style.width = "100px";
            mockDraggable.style.height = "50px";
            mockDraggable.style.left = "90px";
            mockDraggable.style.top = "45px";
            mockDraggable.style.marginLeft = "10px";
            mockDraggable.style.marginTop = "5px";

            beforeEach(function() {
                TestBed.configureTestingModule({
                    imports: [ClrDragAndDropModule, NoopAnimationsModule],
                    declarations: [WithWrappingDraggable],
                    providers: [MOCK_DRAG_EVENT_LISTENER_PROVIDER, DomAdapter, ClrDraggableSnapshot]
                });

                this.fixture = TestBed.createComponent(WithWrappingDraggable);
                this.fixture.detectChanges();

                this.testComponent = this.fixture.componentInstance;
                this.draggableGhostDebugElement = this.fixture.debugElement.query(By.directive(ClrDraggableGhost));
                this.draggableGhostComponent = this.draggableGhostDebugElement.injector.get(ClrDraggableGhost);
                this.ghostElement = this.draggableGhostDebugElement.nativeElement;
                this.dragEventListener = TestBed.get(ClrDragEventListener);
                this.draggableStateRegistrar = TestBed.get(ClrDraggableSnapshot);
            });

            afterEach(function() {
                this.fixture.destroy();
            });

            it("should have draggable-ghost class", function() {
                expect(this.ghostElement.classList.contains("draggable-ghost")).toBeTruthy();
            });

            it("should give in-drag class to document once instantiated", function() {
                expect(document.body.classList.contains("in-drag")).toBeTruthy();
            });

            it("should remove in-drag class from document once destroyed", function() {
                this.testComponent.display = false;
                this.fixture.detectChanges();
                expect(document.body.classList.contains("in-drag")).toBeFalsy();
            });

            it("should appear on the first drag move event", function() {
                const mockDragMoveEvent = {dragPosition: {pageX: 33, pageY: 44}};
                this.dragEventListener.dragMoved.next(mockDragMoveEvent);
                expect(this.ghostElement.style.visibility).toBe("visible");
                expect(this.ghostElement.style.left).toBe("33px");
                expect(this.ghostElement.style.top).toBe("44px");
            });

            it("should appear aligned with draggable if draggable state is registered", function() {
                const mockDragMoveEvent = {dragPosition: {pageX: 120, pageY: 60}};
                this.draggableStateRegistrar.register(mockDraggable, mockDragMoveEvent);
                this.dragEventListener.dragMoved.next(mockDragMoveEvent);

                expect(this.ghostElement.style.left).toBe(`${this.draggableStateRegistrar.clientRect.left}px`);
                expect(this.ghostElement.style.top).toBe(`${this.draggableStateRegistrar.clientRect.top}px`);
            });

            it("should be dragged from its first drag position on the draggable if draggable state is registered", function() {
                const mockDragMoveEvent1 = {dragPosition: {pageX: 120, pageY: 60}};
                this.draggableStateRegistrar.register(mockDraggable, mockDragMoveEvent1);

                const initDeltaX = mockDragMoveEvent1.dragPosition.pageX - this.draggableStateRegistrar.clientRect.left;
                const initDeltaY = mockDragMoveEvent1.dragPosition.pageY - this.draggableStateRegistrar.clientRect.top;

                const mockDragMoveEvent2 = {dragPosition: {pageX: 180, pageY: 120}};

                this.dragEventListener.dragMoved.next(mockDragMoveEvent1);
                expect(this.ghostElement.style.left).toBe(`${this.draggableStateRegistrar.clientRect.left}px`);
                expect(this.ghostElement.style.top).toBe(`${this.draggableStateRegistrar.clientRect.top}px`);

                this.dragEventListener.dragMoved.next(mockDragMoveEvent2);
                expect(this.ghostElement.style.left).toBe(`${mockDragMoveEvent2.dragPosition.pageX - initDeltaX}px`);
                expect(this.ghostElement.style.top).toBe(`${mockDragMoveEvent2.dragPosition.pageY - initDeltaY}px`);
            });
        });
    });
}

@Component({template: `<clr-draggable-ghost></clr-draggable-ghost>`})
class WithNoWrappingDraggable {}

@Component({template: `<clr-draggable-ghost *ngIf="display"></clr-draggable-ghost>`})
class WithWrappingDraggable {
    display = true;
}
