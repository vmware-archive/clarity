/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {RouterModule, Routes} from "@angular/router";
import {DragAndDropDemo} from "./drag-and-drop.demo";

const ROUTES: Routes = [{
    path: "",
    component: DragAndDropDemo,
    children: [
        {path: "", redirectTo: "drag-and-drop", pathMatch: "full"},
        {path: "drag-and-drop", component: DragAndDropDemo}
    ]
}];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
