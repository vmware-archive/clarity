/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Directive, ElementRef} from "@angular/core";

@Directive({selector: "[clrDraggableHandle]"})
export class DraggableHandle {
    draggableHandleEl: Node;

    constructor(private el: ElementRef) {
        this.draggableHandleEl = el.nativeElement;
    }
}
