/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

import {ClrIconModule} from "../../../icon/icon.module";
import {DomAdapter} from "../../dom-adapter/dom-adapter";
import {ClrDragAndDropModule} from "../drag-and-drop.module";
import {ClrDragEvent, ClrDragEventType} from "../interfaces/drag-event";
import {ClrDragEventListener} from "../providers/drag-event-listener";
import {MOCK_DRAG_EVENT_LISTENER_PROVIDER} from "../providers/drag-event-listener.mock";
import {ClrDragHandleRegistrar} from "../providers/drag-handle-registrar";
import {ClrDraggableSnapshot} from "../providers/draggable-snapshot";
import {ClrGlobalDragMode} from "../providers/global-drag-mode";

import {ClrDraggable} from "./draggable";

export default function(): void {
    describe("With Custom Draggable Ghost", function() {
        let mockDragStartEventInt: ClrDragEvent<any>;
        let mockDragEndEventInt: ClrDragEvent<any>;

        beforeEach(function() {
            mockDragStartEventInt = {type: ClrDragEventType.DRAG_START, dragPosition: {pageX: 11, pageY: 22}};
            mockDragEndEventInt = {type: ClrDragEventType.DRAG_END, dragPosition: {pageX: 77, pageY: 88}};

            TestBed.configureTestingModule({
                imports: [ClrDragAndDropModule, ClrIconModule, NoopAnimationsModule],
                declarations: [CustomGhostTest]
            });
            TestBed.overrideComponent(ClrDraggable, {
                set: {
                    providers: [
                        DomAdapter, ClrDragHandleRegistrar, ClrDraggableSnapshot, ClrGlobalDragMode,
                        MOCK_DRAG_EVENT_LISTENER_PROVIDER
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
            this.dragEventListener.dragStarted.next(mockDragStartEventInt);
            const draggableGhosts = this.fixture.nativeElement.querySelectorAll("clr-draggable-ghost");
            expect(draggableGhosts.length).toBe(1);
            expect(draggableGhosts[0].querySelectorAll("clr-icon").length).toBe(1);
        });

        it("should remove ghost on drag end", function() {
            this.dragEventListener.dragStarted.next(mockDragStartEventInt);
            expect(this.fixture.nativeElement.querySelectorAll("clr-draggable-ghost").length).toBe(1);
            this.dragEventListener.dragEnded.next(mockDragEndEventInt);
            expect(this.fixture.nativeElement.querySelectorAll("clr-draggable-ghost").length).toBe(0);
        });
    });
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
