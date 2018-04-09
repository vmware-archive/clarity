/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {DRAG_AND_DROP_DIRECTIVES} from "./index";
import {ClrDragAndDropEventBus} from "./providers/drag-and-drop-event-bus";


@NgModule({
    imports: [CommonModule],
    declarations: [DRAG_AND_DROP_DIRECTIVES],
    providers: [ClrDragAndDropEventBus],
    exports: [DRAG_AND_DROP_DIRECTIVES]
})
export class ClrDragAndDropModule {}
