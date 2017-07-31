/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ContentChild, Inject} from "@angular/core";
import {TabContent} from "./tab-content";
import {
    IF_ACTIVE_ID,
    IF_ACTIVE_ID_PROVIDER,
    IfActiveService
} from "../../utils/conditional/if-active.service";
import {TabsService} from "./tabs-service";
import {TabLinkDirective} from "./tab-link.directive";
import {AriaService} from "./aria-service";

@Component({
    selector: "clr-tab",
    template: `
        <ng-content></ng-content>
    `,
    providers: [ IF_ACTIVE_ID_PROVIDER, AriaService ]
})
export class Tab {
    @ContentChild(TabLinkDirective) tabLink: TabLinkDirective;
    @ContentChild(TabContent) tabContent: TabContent;

    constructor(public ifActiveService: IfActiveService, @Inject(IF_ACTIVE_ID) public id: number,
                private tabsService: TabsService) {

        tabsService.register(this);
    }

    ngOnDestroy() {
        this.tabsService.unregister(this);
    }

    get active() {
        return this.ifActiveService.current === this.id;
    }
}
