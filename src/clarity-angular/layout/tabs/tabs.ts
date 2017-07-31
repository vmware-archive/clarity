/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ContentChildren, QueryList} from "@angular/core";

import {IfActiveService} from "../../utils/conditional/if-active.service";
import {IfOpenService} from "../../utils/conditional/if-open.service";

import {TabLinkDirective} from "./tab-link.directive";
import {TabsService} from "./tabs-service";

@Component({
    selector: "clr-tabs",
    template: `        
        <ul class="nav" role="tablist">
            <!--tab links-->
            <ng-container *ngFor="let link of tabLinkDirectives">
                <ng-container *ngIf="!link.inOverflow"
                              [ngTemplateOutlet]="link.templateRefContainer.template">
                </ng-container>
            </ng-container>
            <ng-container *ngIf="tabsService.overflowTabs.length > 0">
                <div class="tabs-overflow bottom-right" [class.open]="ifOpenService.open" 
                     (click)="toggleOverflow($event)">
                    <li role="presentation" class="nav-item">
                        <button class="btn btn-link nav-link dropdown-toggle" [class.active]="activeTabInOverflow">
                            <clr-icon shape="ellipsis-horizontal" [class.is-info]="ifOpenService.open"></clr-icon>
                        </button>
                    </li>
                    <!--tab links in overflow menu-->
                    <clr-tab-overflow-content>
                        <ng-container *ngFor="let link of tabLinkDirectives">
                            <ng-container *ngIf="link.inOverflow"
                                          [ngTemplateOutlet]="link.templateRefContainer.template">
                            </ng-container>
                        </ng-container>
                    </clr-tab-overflow-content>
                </div>
            </ng-container>
        </ul>
        <!--tab content-->
        <ng-content></ng-content>
    `,
    providers: [IfActiveService, IfOpenService, TabsService]
})
export class Tabs {
    @ContentChildren(TabLinkDirective, {descendants: true}) tabLinkDirectives: QueryList<TabLinkDirective>;

    constructor(public ifActiveService: IfActiveService, public ifOpenService: IfOpenService,
                public tabsService: TabsService) {}

    get activeTabInOverflow() {
        return this.tabsService.overflowTabs.indexOf(this.tabsService.activeTab) > -1;
    }

    toggleOverflow(event: any) {
        this.ifOpenService.toggleWithEvent(event);
    }
}
