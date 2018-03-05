/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


import {Component, ViewChild} from "@angular/core";
import {TestBed} from "@angular/core/testing";
import {ClrDragAndDropModule} from "./drag-and-drop.module";
import {Draggable} from "./draggable";


fdescribe("clrDraggable directive", function() {
    beforeEach(function() {
        TestBed.configureTestingModule({imports: [ClrDragAndDropModule], declarations: [TestComponent]});
        this.fixture = TestBed.createComponent(TestComponent);
        this.fixture.detectChanges();
        this.testComponent = this.fixture.componentInstance;
        this.draggableDirective = this.fixture.componentInstance.draggable;
    });

    afterEach(function() {
        this.fixture.destroy();
    });

    it("notifies the listener when the [clrLoading] input changes", function() {
        console.log(this.draggableDirective.template);
    });
});

@Component({template: `<button clrDraggable></button>`})
class TestComponent {
    @ViewChild(Draggable) draggable: Draggable;
}
