/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  AfterContentInit,
  Component,
  ContentChildren,
  Inject,
  QueryList,
  ViewContainerRef,
  ViewChild,
} from '@angular/core';

import { IfActiveService } from '../../utils/conditional/if-active.service';
import { IfOpenService } from '../../utils/conditional/if-open.service';

import { TabsService } from './providers/tabs.service';
import { ClrTabLink } from './tab-link.directive';
import { ClrTabContent } from './tab-content';
import { TABS_ID, TABS_ID_PROVIDER } from './tabs-id.provider';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';

@Component({
  selector: 'clr-tabs',
  template: `
        <ul class="nav" role="tablist" [attr.aria-owns]="tabIds">
            <!--tab links-->
            <ng-container *ngFor="let link of tabLinkDirectives">
                <ng-container *ngIf="link.tabsId === tabsId && !link.inOverflow"
                              [ngTemplateOutlet]="link.templateRefContainer.template">
                </ng-container>
            </ng-container>
            <ng-container *ngIf="tabsService.overflowTabs.length > 0">
                <div class="tabs-overflow bottom-right" [class.open]="ifOpenService.open"
                     (click)="toggleOverflow($event)">
                    <li role="presentation" class="nav-item">
                        <button class="btn btn-link nav-link dropdown-toggle" type="button" [class.active]="activeTabInOverflow">
                            <clr-icon shape="ellipsis-horizontal"
                              [class.is-info]="ifOpenService.open"
                              [attr.title]="commonStrings.keys.more"></clr-icon>
                        </button>
                    </li>
                    <!--tab links in overflow menu-->
                    <clr-tab-overflow-content>
                        <ng-container *ngFor="let link of tabLinkDirectives">
                            <ng-container *ngIf="link.tabsId === tabsId && link.inOverflow"
                                          [ngTemplateOutlet]="link.templateRefContainer.template">
                            </ng-container>
                        </ng-container>
                    </clr-tab-overflow-content>
                </div>
            </ng-container>
        </ul>
        <ng-container #tabContentViewContainer></ng-container>
    `,
  providers: [IfActiveService, IfOpenService, TabsService, TABS_ID_PROVIDER],
})
export class ClrTabs implements AfterContentInit {
  @ContentChildren(ClrTabLink, { descendants: true })
  tabLinkDirectives: QueryList<ClrTabLink>;

  @ContentChildren(ClrTabContent, { descendants: true })
  tabContents: QueryList<ClrTabContent>;

  /* tslint:disable:no-unused-variable */
  @ViewChild('tabContentViewContainer', { read: ViewContainerRef })
  private set tabContentViewContainer(value: ViewContainerRef) {
    this.tabsService.tabContentViewContainer = value;
  }
  /* tslint:enable:no-unused-variable */

  constructor(
    public ifActiveService: IfActiveService,
    public ifOpenService: IfOpenService,
    public tabsService: TabsService,
    @Inject(TABS_ID) public tabsId: number,
    public commonStrings: ClrCommonStringsService
  ) {}

  get activeTabInOverflow() {
    return this.tabsService.overflowTabs.indexOf(this.tabsService.activeTab) > -1;
  }

  get tabIds() {
    return this.tabsService.children.map(tab => tab.tabLink.tabLinkId).join(' ');
  }

  ngAfterContentInit() {
    if (typeof this.ifActiveService.current === 'undefined') {
      this.tabLinkDirectives.first.activate();
    }
  }

  toggleOverflow(event: any) {
    this.ifOpenService.toggleWithEvent(event);
  }
}
