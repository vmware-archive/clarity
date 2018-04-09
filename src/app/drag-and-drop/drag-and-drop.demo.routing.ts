/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {RouterModule, Routes} from "@angular/router";

import {BasicDraggableDemo} from "./basic-draggable.demo";
import {DragAndDropDemo} from "./drag-and-drop.demo";
import {DraggableHandleDemo} from "./draggable-handle.demo";

const ROUTES: Routes = [{
    path: "",
    component: DragAndDropDemo,
    children: [
        {path: "", redirectTo: "draggable", pathMatch: "full"}, {path: "draggable", component: BasicDraggableDemo},
        {path: "draggable-handle", component: DraggableHandleDemo}
    ]
}];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
