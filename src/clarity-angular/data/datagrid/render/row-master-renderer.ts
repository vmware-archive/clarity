/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {AfterViewInit, Component, OnDestroy, TemplateRef, ViewChild, ViewContainerRef} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {DatagridRenderOrganizer} from "./render-organizer";

/**
 * This component serves as a conditional wrapper.
 * When in table mode, it puts its content next to itself rather than inside.
 */
@Component({
    selector: "clr-dg-row-master",
    template: `
        <ng-template #projected><ng-content></ng-content></ng-template>
        <ng-container #inside></ng-container>
    `,
    host: {"[class.datagrid-row-master]": "true"}
})
export class DatagridRowMasterRenderer implements AfterViewInit, OnDestroy {
    constructor(private outsideContainer: ViewContainerRef, private organizer: DatagridRenderOrganizer) {}

    private subscription: Subscription;
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    @ViewChild("inside", {read: ViewContainerRef}) insideContainer: ViewContainerRef;
    @ViewChild("projected") projected: TemplateRef<any>;

    private outside = false;

    ngAfterViewInit() {
        this.insideContainer.createEmbeddedView(this.projected);
        this.subscription = this.organizer.tableMode.subscribe(on => this.projectOutside(on));
    }

    projectOutside(outside: boolean) {
        // We know the datagrid row's master container is always the first element in it,
        // so hard-coding a zero index here is fine.
        if (outside && !this.outside) {
            this.outsideContainer.insert(this.insideContainer.detach(0), 0);
        } else if (!outside && this.outside) {
            this.insideContainer.insert(this.outsideContainer.detach(0), 0);
        }
        this.outside = outside;
    }
}