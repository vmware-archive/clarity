/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, Renderer2, TemplateRef, ViewChild, ViewContainerRef, ViewRef} from "@angular/core";

@Component({
    selector: "clr-drag-and-drop-demo",
    styleUrls: ["./drag-and-drop.demo.scss"],
    templateUrl: "./drag-and-drop.demo.html",
})
export class DragAndDropDemo {
    constructor(private renderer: Renderer2) {}

    buttonGroup =
        [{shape: "home"}, {shape: "check"}, {shape: "user"}, {shape: "bell"}, {shape: "search"}, {shape: "image"}];

    buttonGroupDrop($event: any, droppablePosition: number) {
        const dragged = this.buttonGroup.indexOf($event.data);
        const dropped = droppablePosition;

        if (dragged < dropped) {
            this.buttonGroup.splice(dragged, 1);
            this.buttonGroup.splice(dropped, 0, $event.data);
        } else {
            if (dragged === dropped) {
                return;
            }
            this.buttonGroup.splice(dragged, 1);
            this.buttonGroup.splice(dropped + 1, 0, $event.data);
        }
    }

    onDragStart($event: any) {
        this.renderer.setStyle($event.draggable.self, "opacity", "0.1");
    }
    onDragEnd($event: any) {
        this.renderer.setStyle($event.draggable.self, "opacity", "1");
    }
}
