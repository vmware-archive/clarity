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

@Component({
    selector: "clr-tab",
    template: `
        <ng-content></ng-content>
    `,
    providers: [ IF_ACTIVE_ID_PROVIDER ]
})
export class Tab {
    @ContentChild(TabLinkDirective) tabLink: TabLinkDirective;
    @ContentChild(TabContent) tabContent: TabContent;

    constructor(public ifActiveService: IfActiveService, @Inject(IF_ACTIVE_ID) public id: number,
                private tabsService: TabsService) {

        tabsService.register(this);

        // if there's no active tab, set itself as active; it will be overridden if
        // a tab created after this one sets it explicitly
        // TODO: when we have another component using IfActiveService, the same logic might be
        // needed. If this is a recurring pattern, let's consider moving this logic to IfActiveService.
        if (!this.ifActiveService.current) {
            this.ifActiveService.current = id;
        }
    }

    ngAfterContentChecked() {
        // the tabContent is only there if this tab is active
        if (this.tabLink && this.tabContent) {
            this.tabLink.ariaControls = this.tabContent.tabContentId;
            this.tabContent.ariaLabelledBy = this.tabLink.tabLinkId;
        }
    }

    ngOnDestroy() {
        this.tabsService.unregister(this);
    }

    get active() {
        return this.ifActiveService.current === this.id;
    }
}
