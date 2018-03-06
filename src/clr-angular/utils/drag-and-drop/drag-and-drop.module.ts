/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {DraggableGhost} from "./draggable-ghost";
import {CLR_DRAG_AND_DROP_DIRECTIVES} from "./index";
import {DragAndDropDispatcher} from "./providers/drag-and-drop-dispatcher";

@NgModule({
    imports: [CommonModule],
    declarations: [CLR_DRAG_AND_DROP_DIRECTIVES],
    providers: [DragAndDropDispatcher],
    entryComponents: [DraggableGhost],
    exports: [CLR_DRAG_AND_DROP_DIRECTIVES]
})
export class ClrDragAndDropModule {}
