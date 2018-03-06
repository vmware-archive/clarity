/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component, DebugElement} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {ClrDragAndDropModule} from "./drag-and-drop.module";
import {Draggable} from "./draggable";
import {DraggableGhost} from "./draggable-ghost";
import {DraggableEvent} from "./interfaces/draggable-event";
import {DragDispatcher} from "./providers/drag-dispatcher";


const emulateMouseEvent =
    (eventName: string, pageX: number = 0, pageY: number = 0, element: Document|Node = document): void => {
        const mouseEvent = new CustomEvent(eventName);
        mouseEvent.pageX = pageX;
        mouseEvent.pageY = pageY;
        element.dispatchEvent(mouseEvent);
    };

fdescribe("clrDraggable directive", function() {
    let fixture: ComponentFixture<any>;
    let testComponent: BasicDraggable;
    let draggableDirective: Draggable;


    let draggableDebugElement: DebugElement;
    let dragDispatcherService: DragDispatcher;
    // let dragAndDropDispatcherService: DragAndDropDispatcher;
    let draggableEl: Element;
    let ghostDebugElement: DebugElement;
    let ghostEl: Element;

    beforeEach(function() {
        TestBed.configureTestingModule(
            {imports: [ClrDragAndDropModule, BrowserAnimationsModule], declarations: [BasicDraggable]});
        fixture = TestBed.createComponent(BasicDraggable);
        fixture.detectChanges();

        testComponent = fixture.componentInstance;
        draggableDirective = fixture.componentInstance.draggable;
        draggableDebugElement = fixture.debugElement.query(By.directive(Draggable));
        dragDispatcherService = draggableDebugElement.injector.get(DragDispatcher);
        draggableEl = draggableDebugElement.nativeElement;
    });

    afterEach(function() {
        fixture.destroy();
    });

    it("should get access to draggable element in DragDispatcher", function() {
        expect(dragDispatcherService.draggable.self).toBe(draggableEl);
    });

    it("should have proper classes and attributes on draggable element", function() {
        expect(draggableEl.getAttribute("tabindex")).toBe("0");
    });

    it("should create draggable ghost with proper style on drag start", function() {
        emulateMouseEvent("mousedown", 0, 0, draggableEl);
        fixture.detectChanges();

        ghostDebugElement = fixture.debugElement.query(By.directive(DraggableGhost));
        ghostEl = ghostDebugElement.nativeElement;

        expect(ghostDebugElement).not.toBeNull();
        expect(ghostEl.getAttribute("focusable")).toBe("false");
        expect(ghostEl.classList.contains("draggable-ghost")).toBeTruthy();
        expect(ghostEl.classList.contains("draggable-ghost--hidden")).toBeTruthy();
    });

    it("should create draggable ghost on drag start", function() {
        emulateMouseEvent("mousedown", 0, 0, draggableEl);
        fixture.detectChanges();

        ghostDebugElement = fixture.debugElement.query(By.directive(DraggableGhost));
        ghostEl = ghostDebugElement.nativeElement;

        expect(ghostDebugElement).not.toBeNull();
        expect(ghostEl.getAttribute("focusable")).toBe("false");
        expect(ghostEl.classList.contains("draggable-ghost")).toBeTruthy();
        expect(ghostEl.classList.contains("draggable-ghost--hidden")).toBeTruthy();
    });

    it("should emit proper event on drag start", function() {
        emulateMouseEvent("mousedown", 0, 0, draggableEl);
        fixture.detectChanges();

        ghostDebugElement = fixture.debugElement.query(By.directive(DraggableGhost));
        ghostEl = ghostDebugElement.nativeElement;

        expect(testComponent.dragStartEvent.draggable.self).toBe(draggableEl);
        expect(testComponent.dragStartEvent.draggable.ghost).toBe(ghostEl);
        expect(testComponent.dragStartEvent.data).toBe(testComponent.basicDraggableData);
        expect(testComponent.dragStartEvent.dragPosition.x).toBe(0);
        expect(testComponent.dragStartEvent.dragPosition.y).toBe(0);
        expect(testComponent.dragStartEvent.ghostAnchorPosition).toBeUndefined();
    });

    it("should display draggable ghost on drag move and turn document into drag state", function() {
        emulateMouseEvent("mousedown", 0, 0, draggableEl);
        fixture.detectChanges();
        emulateMouseEvent("mousemove");
        fixture.detectChanges();

        ghostDebugElement = fixture.debugElement.query(By.directive(DraggableGhost));
        ghostEl = ghostDebugElement.nativeElement;

        expect(ghostDebugElement).not.toBeNull();
        expect(ghostEl.classList.contains("draggable-ghost--hidden")).toBeFalsy();
        expect(document.body.classList.contains("in-drag")).toBeTruthy();
    });

    it("should emit proper event on drag move", function() {
        emulateMouseEvent("mousedown", 0, 0, draggableEl);
        fixture.detectChanges();

        // first mousemove event
        emulateMouseEvent("mousemove", 200, 400);
        fixture.detectChanges();

        ghostDebugElement = fixture.debugElement.query(By.directive(DraggableGhost));
        ghostEl = ghostDebugElement.nativeElement;

        expect(testComponent.dragMoveEvent.draggable.self).toBe(draggableEl);
        expect(testComponent.dragMoveEvent.draggable.ghost).toBe(ghostEl);
        expect(testComponent.dragMoveEvent.data).toBe(testComponent.basicDraggableData);

        expect(testComponent.dragMoveEvent.dragPosition.x).toBe(200);
        expect(testComponent.dragMoveEvent.dragPosition.y).toBe(400);

        expect(testComponent.dragMoveEvent.ghostAnchorPosition.x)
            .toBe(0, `On the very first drag move event, ghost shouldn't move so the expected value is 0.`);
        expect(testComponent.dragMoveEvent.ghostAnchorPosition.y)
            .toBe(0, `On the very first drag move event, ghost shouldn't move so the expected value is 0.`);

        // second mousemove event
        emulateMouseEvent("mousemove", 300, 500);
        fixture.detectChanges();

        expect(testComponent.dragMoveEvent.dragPosition.x).toBe(300);
        expect(testComponent.dragMoveEvent.dragPosition.y).toBe(500);
        expect(testComponent.dragMoveEvent.ghostAnchorPosition.x).toBe(100);
        expect(testComponent.dragMoveEvent.ghostAnchorPosition.y).toBe(100);
    });

    // TODO: test state of draggalbe on dragEnd
    // TODO: test whether ghost created on dragEnd
    // TODO: test events on dragEnd
});

@Component({
    template: `
        <div clrDraggable #draggable
             (clrDragStart)="onDragStart($event)"
             (clrDragMove)="onDragMove($event)"
             (clrDragEnd)="onDragEnd($event)"
             [clrDraggable]="basicDraggableData">{{basicDraggableData}}
        </div>`
})
class BasicDraggable {
    basicDraggableData = "test";
    dragStartEvent: DraggableEvent;
    dragMoveEvent: DraggableEvent;
    dragEndEvent: DraggableEvent;

    onDragStart($event: any) {
        this.dragStartEvent = $event;
    }

    onDragMove($event: any) {
        this.dragMoveEvent = $event;
    }

    onDragEnd($event: any) {
        this.dragEndEvent = $event;
    }
}
