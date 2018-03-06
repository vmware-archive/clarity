/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component, ElementRef, ViewChild} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {ClrDragAndDropModule} from "./drag-and-drop.module";
import {Draggable} from "./draggable";


const emulateMouseEvent =
    (eventName: string, pageX: number = 0, pageY: number = 0, element: Document|Node = document): void => {
        const mouseMoveEvent = new CustomEvent(eventName, {pageX: pageX, pageY: pageY});
        element.dispatchEvent(mouseMoveEvent);
    };

fdescribe("clrDraggable directive", function() {
    let fixture: ComponentFixture<any>;
    let testComponent: BasicDraggable;
    let draggableDirective: Draggable;
    let draggableEl: HTMLElement;


    beforeEach(function() {
        TestBed.configureTestingModule({imports: [ClrDragAndDropModule], declarations: [BasicDraggable]});
        fixture = TestBed.createComponent(BasicDraggable);
        fixture.detectChanges();
        testComponent = fixture.componentInstance;
        draggableDirective = fixture.componentInstance.draggable;
        draggableEl = fixture.nativeElement;
    });

    afterEach(function() {
        fixture.destroy();
    });

    it("should have proper classes and attributes", function() {
        expect(draggableEl.querySelector(".draggable").getAttribute("tabindex")).toBe("0");
    });

    it("on dragStart", function() {
        emulateMouseEvent("mousedown", 0, 0, draggableEl.querySelector(".draggable"));
        emulateMouseEvent("mousemove", 200, 100);
        console.log(draggableEl);
    });
});

@Component({
    template: `
        <div clrDraggable #draggable></div>`
})
class BasicDraggable {}
