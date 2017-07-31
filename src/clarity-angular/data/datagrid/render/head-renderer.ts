/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Directive, ElementRef, OnDestroy, Renderer2} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {DatagridRenderOrganizer} from "./render-organizer";

@Directive({selector: "[clrDgHead]"})
export class DatagridHeadRenderer implements OnDestroy {
    constructor(private el: ElementRef, private renderer: Renderer2, organizer: DatagridRenderOrganizer) {
        this.subscription = organizer.scrollbarWidth.subscribe(width => this.accountForScrollbar(width));
    }

    private subscription: Subscription;
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    private accountForScrollbar(width: number) {
        this.renderer.setStyle(this.el.nativeElement, "padding-right", width + "px");
    }
}