/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Directive, ElementRef, OnDestroy, Renderer2} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {STRICT_WIDTH_CLASS} from "./constants";
import {DatagridRenderOrganizer} from "./render-organizer";

@Directive({selector: "clr-dg-cell"})
export class DatagridCellRenderer implements OnDestroy {
    constructor(private el: ElementRef, private renderer: Renderer2, organizer: DatagridRenderOrganizer) {
        this.subscription = organizer.clearWidths.subscribe(() => this.clearWidth());
    }

    private subscription: Subscription;
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    private clearWidth() {
        this.renderer.removeClass(this.el.nativeElement, STRICT_WIDTH_CLASS);
        this.renderer.setStyle(this.el.nativeElement, "width", null);
    }

    public setWidth(strict: boolean, value: number) {
        if (strict) {
            this.renderer.addClass(this.el.nativeElement, STRICT_WIDTH_CLASS);
        } else {
            this.renderer.removeClass(this.el.nativeElement, STRICT_WIDTH_CLASS);
        }
        this.renderer.setStyle(this.el.nativeElement, "width", value + "px");
    }
}