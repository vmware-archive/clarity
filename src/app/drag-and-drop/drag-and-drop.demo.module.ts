/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {ClarityModule} from "../../clr-angular/clr-angular.module";
import {BasicDraggableDemo} from "./basic-draggable.demo";
import {CustomGhostAndHandleDemo} from "./custom-ghost-and-handle.demo";
import {CustomGhostDemo} from "./custom-ghost.demo";
import {DragAndDropDemo} from "./drag-and-drop.demo";
import {ROUTING} from "./drag-and-drop.demo.routing";
import {DraggableHandleDemo} from "./draggable-handle.demo";

@NgModule({
    imports: [CommonModule, ClarityModule, ROUTING],
    declarations: [DragAndDropDemo, DraggableHandleDemo, BasicDraggableDemo, CustomGhostDemo, CustomGhostAndHandleDemo],
    exports: [DragAndDropDemo, DraggableHandleDemo, BasicDraggableDemo, CustomGhostDemo, CustomGhostAndHandleDemo]
})
export class DragAndDropDemoModule {}
