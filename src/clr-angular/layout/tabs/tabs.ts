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
  Input,
  OnDestroy,
  HostBinding,
  ViewContainerRef,
  ViewChild,
  PLATFORM_ID,
} from '@angular/core';

import { IfActiveService } from '../../utils/conditional/if-active.service';
import { IfOpenService } from '../../utils/conditional/if-open.service';

import { TabsService } from './providers/tabs.service';
import { ClrTab } from './tab';
import { ClrTabLink } from './tab-link.directive';
import { TABS_ID, TABS_ID_PROVIDER } from './tabs-id.provider';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { TabsLayout } from './enums/tabs-layout.enum';
import { Subscription } from 'rxjs';
import { ClrKeyFocus } from '../../utils/focus/key-focus/key-focus';
import { startWith, filter } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'clr-tabs',
  template: `
        <ul class="nav" role="tablist" [attr.aria-owns]="tabIds" [clrKeyFocus]="tabLinkElements" clrDirection="both"
            (clrFocusChange)="checkFocusVisible()">
            <!--tab links-->
            <ng-container *ngFor="let link of tabLinkDirectives">
                <ng-container *ngIf="link.tabsId === tabsId && !link.inOverflow">
                    <li role="presentation" class="nav-item">
                        <ng-container [ngTemplateOutlet]="link.templateRefContainer.template"></ng-container>
                    </li>
                </ng-container>
            </ng-container>
            <ng-container *ngIf="tabsService.overflowTabs.length > 0">
                <div class="tabs-overflow bottom-right" [class.open]="ifOpenService.open" role="presentation">
                    <li role="application" class="nav-item" (click)="toggleOverflow($event)">
                        <button class="btn btn-link nav-link dropdown-toggle" type="button" aria-hidden="true"
                                [class.active]="activeTabInOverflow" [class.open]="inOverflow()" tabIndex="-1">
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
export class ClrTabs implements AfterContentInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  private get overflowPosition() {
    return this._tabLinkDirectives.filter(link => !link.inOverflow).length;
  }

  /* tslint:disable:no-unused-variable */
  @ViewChild('tabContentViewContainer', { static: true, read: ViewContainerRef })
  private set tabContentViewContainer(value: ViewContainerRef) {
    this.tabsService.tabContentViewContainer = value;
  }
  /* tslint:enable:no-unused-variable */

  @Input('clrLayout')
  set layout(layout: TabsLayout) {
    if (
      Object.keys(TabsLayout)
        .map(key => {
          return TabsLayout[key];
        })
        .indexOf(layout) >= 0
    ) {
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

  tabLinkElements: HTMLElement[] = [];

  @ViewChild(ClrKeyFocus, { static: true })
  keyFocus: ClrKeyFocus;

  constructor(
    public ifActiveService: IfActiveService,
    public ifOpenService: IfOpenService,
    public tabsService: TabsService,
    @Inject(TABS_ID) public tabsId: number,
    public commonStrings: ClrCommonStringsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  get activeTabInOverflow() {
    return this.tabsService.overflowTabs.indexOf(this.tabsService.activeTab) > -1;
  }

  get tabIds() {
    return this.tabsService.children.map(tab => tab.tabLink.tabLinkId).join(' ');
  }

  ngAfterContentInit() {
    this.subscriptions.push(this.listenForTabLinkChanges(), this.listenForOverflowMenuFocusChanges());

    if (typeof this.ifActiveService.current === 'undefined' && this.tabLinkDirectives[0]) {
      this.tabLinkDirectives[0].activate();
    }
  }

  toggleOverflow(event: any) {
    this.ifOpenService.toggleWithEvent(event);
  }

  checkFocusVisible() {
    if (!this.ifOpenService.open && this.inOverflow()) {
      this.ifOpenService.open = true;
    } else if (this.ifOpenService.open && !this.inOverflow()) {
      this.ifOpenService.open = false;
    }
  }

  inOverflow() {
    return (
      this.tabLinkElements.indexOf(document.activeElement as HTMLElement) > -1 &&
      this.keyFocus.current >= this.overflowPosition
    );
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

  private listenForTabLinkChanges() {
    return this.tabs.changes.pipe(startWith(this.tabs.map(tab => tab.tabLink))).subscribe(() => {
      this._tabLinkDirectives = this.tabs.map(tab => tab.tabLink);
      this.tabLinkElements = this._tabLinkDirectives.map(tab => tab.el.nativeElement);
    });
  }

  private listenForOverflowMenuFocusChanges() {
    return this.ifOpenService.openChange.pipe(filter(() => isPlatformBrowser(this.platformId))).subscribe(open => {
      if (open && !this.inOverflow()) {
        this.focusToFirstItemInOverflow();
      } else if (!open && this.nextFocusedItemIsNotInOverflow()) {
        this.keyFocus.resetTabFocus();
      }
    });
  }

  private focusToFirstItemInOverflow() {
    this.keyFocus.moveTo(this.overflowPosition);
  }

  private nextFocusedItemIsNotInOverflow() {
    return this.tabLinkElements.find(e => e === document.activeElement) === undefined;
  }
}
