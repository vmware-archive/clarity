/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {ClrButtonGroupModule} from "../../clr-angular/button/button-group/button-group.module";
import {ClrIconModule} from "../../clr-angular/icon/icon.module";
import {ClrDragAndDropModule} from "../../clr-angular/utils/drag-and-drop/drag-and-drop.module";

import {DragAndDropDemo} from "./drag-and-drop.demo";
import {ROUTING} from "./drag-and-drop.demo.routing";

@NgModule({
    imports: [CommonModule, ClrDragAndDropModule, ClrIconModule, ClrButtonGroupModule, ROUTING],
    declarations: [DragAndDropDemo]
})
export class DragAndDropDemoModule {}
