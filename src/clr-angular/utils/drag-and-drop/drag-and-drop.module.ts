/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule} from "@angular/common";
import {NgModule, Type} from "@angular/core";

import {Draggable} from "./draggable";
import {DraggableGhost} from "./draggable-ghost";
import {DraggableHandle} from "./draggable-handle";
import {Droppable} from "./droppable";
import {IfDragged} from "./if-dragged";
import {DragAndDropDispatcher} from "./providers/drag-and-drop-dispatcher";

export const CLR_DRAG_AND_DROP_DIRECTIVES: Type<any>[] =
    [Draggable, Droppable, DraggableGhost, DraggableHandle, IfDragged];

@NgModule({
    imports: [CommonModule],
    declarations: [CLR_DRAG_AND_DROP_DIRECTIVES],
    providers: [DragAndDropDispatcher],
    entryComponents: [DraggableGhost],
    exports: [CLR_DRAG_AND_DROP_DIRECTIVES]
})
export class ClrDragAndDropModule {}
