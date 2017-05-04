/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Directive, TemplateRef, ViewContainerRef, OnInit, OnDestroy} from "@angular/core";

import {RowExpand} from "./providers/row-expand";

/**
 * TODO: make this a reusable directive outside of Datagrid, like [clrLoading].
 */
@Directive({
    selector: "[clrIfExpanded]"
})
export class DatagridIfExpanded implements OnInit, OnDestroy {

    constructor(private template: TemplateRef<any>, private container: ViewContainerRef, private expand: RowExpand) {
        expand.expandable = true;
        expand.expandChange.subscribe(() => this.updateView());
    }

    private updateView() {
        if (this.expand.expanded) {
            // Should we pass a context? I don't see anything useful to pass right now,
            // but we can come back to it in the future as a solution for additional features.
            this.container.createEmbeddedView(this.template);
        } else {
            // We clear before the animation is over. Not ideal, but doing better would involve a much heavier
            // process for very little gain. Once Angular animations are dynamic enough, we should be able to
            // get the optimal behavior.
            this.container.clear();
        }
    }

    ngOnInit() {
        this.updateView();
    }

    ngOnDestroy() {
        this.expand.expandable = false;
    }
}