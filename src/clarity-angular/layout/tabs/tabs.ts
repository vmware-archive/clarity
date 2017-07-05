/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {IfActiveService} from "../../utils/conditional/if-active.service";
import {Tab} from "./tab";
import {TabsService} from "./tabs-service";

// TODO: find a better way to separately render the tab contents (i.e. not inside the ul)
@Component({
    selector: "clr-tabs",
    template: `
        <ul class="nav" role="tablist">
            <ng-content select="clr-tab"></ng-content>
        </ul>
        <ng-container *ngFor="let tab of tabsService.children">
            <ng-template *ngIf="tab.tabContent" [ngTemplateOutlet]="tab.tabContent.templateRef"></ng-template>
        </ng-container>
    `,
    providers: [ IfActiveService, TabsService ]
})
export class Tabs {
    constructor(public ifActiveService: IfActiveService, public tabsService: TabsService) {
    }

    get activeTab() {
        let activeTab: Tab;
        if (this.tabsService.children.length > 0) {
            activeTab = this.tabsService.children.find((tab: Tab) => {
                return tab.active;
            });
        }
        return activeTab;
    }
}
