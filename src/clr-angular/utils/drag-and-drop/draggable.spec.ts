/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component, DebugElement} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";

import {ClrDragAndDropModule} from "./drag-and-drop.module";
import {Draggable} from "./draggable";
import {DragDispatcher} from "./providers/drag-dispatcher";


const emulateMouseEvent =
    (eventName: string, pageX: number = 0, pageY: number = 0, element: Document|Node = document): void => {
        const mouseMoveEvent = new CustomEvent(eventName, {pageX: pageX, pageY: pageY});
        element.dispatchEvent(mouseMoveEvent);
    };

fdescribe("clrDraggable directive", function() {
    let fixture: ComponentFixture<any>;
    let testComponent: BasicDraggable;
    let draggableDirective: Draggable;


    let draggableDebugElement: DebugElement;
    let dragDispatcherService: DragDispatcher;
    let draggableEl: Element;

    beforeEach(function() {
        TestBed.configureTestingModule({imports: [ClrDragAndDropModule], declarations: [BasicDraggable]});
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
        expect(dragDispatcherService.draggable.self).toBe(draggableDebugElement.nativeElement);
    });

    it("should have proper classes and attributes on draggable element", function() {
        expect(draggableDebugElement.nativeElement.getAttribute("tabindex")).toBe("0");
    });

    it("on dragStart", function() {
        emulateMouseEvent("mousedown", 0, 0, draggableDebugElement.nativeElement);
        emulateMouseEvent("mousemove", 200, 100);
    });
});

@Component({
    template: `
        <div clrDraggable #draggable 
             (clrDragStart)="onDragStart($event)" 
             (clrDragMove)="onDragMove($event)"
             (clrDragEnd)="onDragEnd($event)" 
             clrDraggable="basicDraggableData">{{basicDraggableData}}
        </div>`
})
class BasicDraggable {
    basicDraggableData = "test";
    dragStartEvent: any;
    dragMoveEvent: any;
    dragEndEvent: any;

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
