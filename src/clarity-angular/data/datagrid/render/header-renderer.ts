/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Directive, ElementRef, OnDestroy, Renderer2} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {DatagridColumnResizer} from "./column-resizer";
import {STRICT_WIDTH_CLASS} from "./constants";
import {DomAdapter} from "./dom-adapter";
import {DatagridRenderOrganizer} from "./render-organizer";

@Directive({selector: "clr-dg-column"})
export class DatagridHeaderRenderer implements OnDestroy {
    constructor(private el: ElementRef, private renderer: Renderer2, private organizer: DatagridRenderOrganizer,
                private domAdapter: DomAdapter, private columnResizer: DatagridColumnResizer) {
        this.subscription = organizer.clearWidths.subscribe(() => this.clearWidth());
    }

    private subscription: Subscription;

    /**
     * Indicates if the column has a strict width, so it doesn't shrink or expand based on the content.
     */
    public strictWidth: number;
    private widthSet: boolean = false;


    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    private clearWidth() {
        // remove the width only if we set it, and it is not changed by dragging.
        if (this.widthSet && !this.columnResizer.columnResizeBy) {
            this.renderer.setStyle(this.el.nativeElement, "width", null);
        }

        let strictWidth: number = this.domAdapter.userDefinedWidth(this.el.nativeElement);

        if (this.columnResizer.columnResizeBy) {
            strictWidth = this.columnResizer.columnRectWidth + this.columnResizer.columnResizeBy;
        }

        if (strictWidth) {
            this.strictWidth = strictWidth;
        } else {
            delete this.strictWidth;
        }
    }

    public computeWidth(): number {
        let width: number = this.strictWidth;

        if (!!width) {
            this.renderer.addClass(this.el.nativeElement, STRICT_WIDTH_CLASS);
        } else {
            this.renderer.removeClass(this.el.nativeElement, STRICT_WIDTH_CLASS);
        }

        if (this.columnResizer.columnResizeBy) {
            this.renderer.setStyle(this.el.nativeElement, "width", width + "px");
            this.columnResizer.columnResizeBy = 0;
            this.widthSet = false;
        }

        if (!width) {
            width = this.domAdapter.scrollWidth(this.el.nativeElement);

            this.renderer.setStyle(this.el.nativeElement, "width", width + "px");
            this.widthSet = true;
        }
        return width;
    }
}
