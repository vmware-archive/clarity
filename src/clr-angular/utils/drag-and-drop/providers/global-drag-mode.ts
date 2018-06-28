/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Injectable, Renderer2} from "@angular/core";

@Injectable()
export class ClrGlobalDragMode {
    constructor(private renderer: Renderer2) {}

    enter(): void {
        this.renderer.addClass(document.body, "in-drag");
    }

    exit(): void {
        this.renderer.removeClass(document.body, "in-drag");
    }
}
