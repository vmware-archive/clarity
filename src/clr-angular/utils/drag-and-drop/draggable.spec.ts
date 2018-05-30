/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {ClrDragHandle} from "./drag-handle";
import {ClrDraggable} from "./draggable";
import {ClrDragAndDropEventBus} from "./providers/drag-and-drop-event-bus";
import {ClrDragEventListener} from "./providers/drag-event-listener";
import {ClrDragHandleRegistrar} from "./providers/drag-handle-registrar";

export default function(): void {
    describe("ClrDraggable", function() {
        describe("ClrDragHandle", function() {
            beforeEach(function() {
                TestBed.configureTestingModule({
                    declarations: [NestedHandleTest, ClrDraggable, ClrDragHandle],
                    providers: [ClrDragAndDropEventBus]
                });

                this.fixture = TestBed.createComponent(NestedHandleTest);
                this.testComponent = this.fixture.componentInstance;
                this.draggable = this.fixture.debugElement.query(By.directive(ClrDraggable));
                this.dragEventListener = this.draggable.injector.get(ClrDragEventListener);
                this.dragHandleRegistrar = this.draggable.injector.get(ClrDragHandleRegistrar);
            });

            afterEach(function() {
                this.fixture.destroy();
            });

            it("should have its own element as default drag handle when there is no nested drag handle", function() {
                this.fixture.detectChanges();

                expect(this.draggable.nativeElement.classList.contains("drag-handle")).toBeTruthy();
                expect(this.dragEventListener.draggableEl).toBe(this.draggable.nativeElement);
                expect(this.dragHandleRegistrar.defaultHandleEl).toBe(this.draggable.nativeElement);
                expect(this.dragHandleRegistrar.customHandleEl).toBeUndefined();
            });

            it("should have its nested handle as drag handle if it is present", function() {
                this.testComponent.display = true;
                this.fixture.detectChanges();
                this.dragHandle = this.fixture.debugElement.query(By.directive(ClrDragHandle));
                expect(this.draggable.nativeElement.classList.contains("drag-handle")).toBeFalsy();
                expect(this.dragHandle.nativeElement.classList.contains("drag-handle")).toBeTruthy();
                expect(this.dragEventListener.draggableEl).toBe(this.dragHandle.nativeElement);
                expect(this.dragHandleRegistrar.customHandleEl).toBe(this.dragHandle.nativeElement);
                expect(this.dragHandleRegistrar.defaultHandleEl)
                    .toBe(
                        this.draggable.nativeElement,
                        `The default handle should be still set to the draggable element even though it's not made an active drag handle.`);
            });
        });
    });
}

@Component({template: `<div clrDraggable><button *ngIf="display" clrDragHandle></button></div>`})
class NestedHandleTest {
    display = false;
}
