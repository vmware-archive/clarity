/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Type} from "@angular/core";

import {Draggable} from "./draggable";
import {DraggableGhost} from "./draggable-ghost";
import {DraggableHandle} from "./draggable-handle";
import {Droppable} from "./droppable";
import {IfDragged} from "./if-dragged";

export const CLR_DRAG_AND_DROP_DIRECTIVES: Type<any>[] =
    [Draggable, Droppable, DraggableGhost, DraggableHandle, IfDragged];
