/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Directive, ElementRef, Renderer, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {DomAdapter} from "./dom-adapter";
import {STRICT_WIDTH_CLASS} from "./constants";
import {DatagridRenderOrganizer} from "./render-organizer";

@Directive({
    selector: "clr-dg-column"
})
export class DatagridHeaderRenderer implements OnDestroy {

    constructor(private el: ElementRef, private renderer: Renderer, private domAdapter: DomAdapter,
                organizer: DatagridRenderOrganizer) {
        this.subscription = organizer.clearWidths.subscribe(() => this.clearWidth());
    }

    private subscription: Subscription;
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    /**
     * Indicates if the column has a strict width, so it doesn't grow or shrink
     */
    public strictWidth: number;

    private widthSet = false;

    private clearWidth() {
        this.renderer.setElementClass(this.el.nativeElement, STRICT_WIDTH_CLASS, false);
        // We only clear if we set the width ourselves, otherwise we risk clearing consumer styles.
        if (this.widthSet) {
            this.renderer.setElementStyle(this.el.nativeElement, "width", null);
            this.widthSet = false;
        }
        let strictWidth = this.domAdapter.userDefinedWidth(this.el.nativeElement);
        if (strictWidth) {
            this.strictWidth = strictWidth;
        } else {
            delete this.strictWidth;
        }
    }

    public computeWidth(): number {
        if (this.strictWidth) {
            // We do NOT set the width here, since we know the user already provided it.
            this.renderer.setElementClass(this.el.nativeElement, STRICT_WIDTH_CLASS, true);
            return this.strictWidth;
        } else {
            let width = this.domAdapter.scrollWidth(this.el.nativeElement);
            this.renderer.setElementClass(this.el.nativeElement, STRICT_WIDTH_CLASS, false);
            this.renderer.setElementStyle(this.el.nativeElement, "width", width + "px");
            this.widthSet = true;
            return width;
        }
    }
}