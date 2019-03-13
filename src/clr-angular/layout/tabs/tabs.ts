/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  AfterContentInit,
  Component,
  ContentChildren,
  Inject,
  QueryList,
  Input,
  OnDestroy,
  HostBinding,
} from '@angular/core';

import { IfActiveService } from '../../utils/conditional/if-active.service';
import { IfOpenService } from '../../utils/conditional/if-open.service';

import { TabsService } from './providers/tabs.service';
import { ClrTab } from './tab';
import { ClrTabLink } from './tab-link.directive';
import { ClrTabContent } from './tab-content';
import { TABS_ID, TABS_ID_PROVIDER } from './tabs-id.provider';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
import { TabsLayout } from './enums/tabs-layout.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'clr-tabs',
  template: `
        <ul class="nav" role="tablist" [attr.aria-owns]="tabIds">
            <!--tab links-->
            <ng-container *ngFor="let link of tabLinkDirectives">
                <ng-container *ngIf="link.tabsId === tabsId && !link.inOverflow">
                    <li role="presentation" class="nav-item">
                        <ng-container [ngTemplateOutlet]="link.templateRefContainer.template"></ng-container>
                    </li>
                </ng-container>
            </ng-container>
            <ng-container *ngIf="tabsService.overflowTabs.length > 0">
                <div class="tabs-overflow bottom-right" [class.open]="ifOpenService.open"
                     (click)="toggleOverflow($event)">
                    <li role="presentation" class="nav-item">
                        <button class="btn btn-link nav-link dropdown-toggle" type="button" [class.active]="activeTabInOverflow">
                            <clr-icon shape="ellipsis-horizontal"
                              [class.is-info]="ifOpenService.open"
                              [attr.title]="commonStrings.more"></clr-icon>
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
        <!--tab content-->
        <ng-container *ngFor="let content of tabContents">
            <ng-container [ngTemplateOutlet]="content.templateRef"></ng-container>
        </ng-container>
    `,
  providers: [IfActiveService, IfOpenService, TabsService, TABS_ID_PROVIDER],
})
export class ClrTabs implements AfterContentInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  @Input('clrLayout')
  set layout(layout: TabsLayout) {
    if (Object.values(TabsLayout).includes(layout)) {
      this.tabsService.layout = layout;
    }
  }
  get layout(): TabsLayout {
    return this.tabsService.layout;
  }

  @ContentChildren(ClrTab) private tabs: QueryList<ClrTab>;

  private _tabLinkDirectives: ClrTabLink[] = [];
  get tabLinkDirectives(): ClrTabLink[] {
    return this._tabLinkDirectives;
  }

  get tabContents(): ClrTabContent[] {
    return this.tabs.filter(tab => !!tab.tabContent).map(tab => tab.tabContent);
  }

  constructor(
    public ifActiveService: IfActiveService,
    public ifOpenService: IfOpenService,
    public tabsService: TabsService,
    @Inject(TABS_ID) public tabsId: number,
    public commonStrings: ClrCommonStrings
  ) {}

  get activeTabInOverflow() {
    return this.tabsService.overflowTabs.indexOf(this.tabsService.activeTab) > -1;
  }

  get tabIds() {
    return this.tabsService.children.map(tab => tab.tabLink.tabLinkId).join(' ');
  }

  ngAfterContentInit() {
    this._tabLinkDirectives = this.tabs.map(tab => tab.tabLink);
    this.subscriptions.push(
      this.tabs.changes.subscribe(() => {
        this._tabLinkDirectives = this.tabs.map(tab => tab.tabLink);
      })
    );

    if (typeof this.ifActiveService.current === 'undefined' && this.tabLinkDirectives[0]) {
      this.tabLinkDirectives[0].activate();
    }
  }

  toggleOverflow(event: any) {
    this.ifOpenService.toggleWithEvent(event);
  }

  @HostBinding('class.tabs-vertical')
  get isVertical() {
    return this.layout === TabsLayout.VERTICAL;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
