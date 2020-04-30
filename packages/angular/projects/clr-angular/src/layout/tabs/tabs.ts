/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewContainerRef,
  HostBinding,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { IfActiveService } from '../../utils/conditional/if-active.service';
import { ClrKeyFocus } from '../../utils/focus/key-focus/key-focus';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';
import { TabsLayout } from './enums/tabs-layout.enum';
import { TabsService } from './providers/tabs.service';
import { ClrTab } from './tab';
import { ClrTabLink } from './tab-link.directive';
import { TABS_ID, TABS_ID_PROVIDER } from './tabs-id.provider';
import { ClrTabOverflowContent } from './tab-overflow-content';

@Component({
  selector: 'clr-tabs',
  template: `
    <ul
      class="nav"
      role="tablist"
      [attr.aria-owns]="tabIds"
      [clrKeyFocus]="tabLinkElements"
      clrDirection="both"
      (clrFocusChange)="toggleOverflowOnPosition($event)"
      (focusout)="resetKeyFocusCurrentToActive($event)"
    >
      <!--tab links-->
      <ng-container *ngFor="let link of tabLinkDirectives">
        <ng-container *ngIf="link.tabsId === tabsId && !link.inOverflow">
          <li role="presentation" class="nav-item">
            <ng-container [ngTemplateOutlet]="link.templateRefContainer.template"></ng-container>
          </li>
        </ng-container>
      </ng-container>
      <ng-container *ngIf="tabsService.overflowTabs.length > 0">
        <div class="tabs-overflow bottom-right" role="presentation" [class.open]="toggleService.open">
          <li role="application" class="nav-item">
            <button
              #tabOverflowTrigger
              class="btn btn-link nav-link dropdown-toggle"
              type="button"
              aria-hidden="true"
              [attr.tabindex]="activeTabInOverflow && !toggleService.open ? 0 : -1"
              [class.active]="activeTabInOverflow"
              [class.open]="toggleService.open"
              (mousedown)="_mousedown = true"
              (focus)="openOverflowOnFocus()"
              (click)="toggleOverflowOnClick()"
            >
              <clr-icon
                shape="ellipsis-horizontal"
                [class.is-info]="toggleService.open"
                [attr.title]="commonStrings.keys.more"
              ></clr-icon>
            </button>
          </li>
          <!--tab links in overflow menu-->
          <clr-tab-overflow-content
            *ngIf="toggleService.open"
            (document:keydown.esc)="closeOnEscapeKey()"
            (document:click)="closeOnOutsideClick($event, tabOverflowTrigger)"
            (focusout)="closeOnFocusOut($event)"
          >
            <ng-container *ngFor="let link of tabLinkDirectives">
              <ng-container
                *ngIf="link.tabsId === tabsId && link.inOverflow"
                [ngTemplateOutlet]="link.templateRefContainer.template"
              >
              </ng-container>
            </ng-container>
          </clr-tab-overflow-content>
        </div>
      </ng-container>
    </ul>
    <ng-container #tabContentViewContainer></ng-container>
  `,
  providers: [IfActiveService, ClrPopoverToggleService, TabsService, TABS_ID_PROVIDER],
})
export class ClrTabs implements AfterContentInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  private get overflowPosition() {
    return this._tabLinkDirectives.filter(link => !link.inOverflow).length;
  }

  @ViewChild('tabContentViewContainer', { static: true, read: ViewContainerRef })
  // @ts-ignore
  private set tabContentViewContainer(value: ViewContainerRef) {
    this.tabsService.tabContentViewContainer = value;
  }

  @Input('clrLayout')
  set layout(layout: TabsLayout) {
    if (
      Object.keys(TabsLayout)
        .map(key => {
          return (TabsLayout as Record<string, any>)[key];
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
    public toggleService: ClrPopoverToggleService,
    public tabsService: TabsService,
    @Inject(TABS_ID) public tabsId: number,
    public commonStrings: ClrCommonStringsService
  ) {}

  get activeTabInOverflow() {
    return this.tabsService.overflowTabs.indexOf(this.tabsService.activeTab) > -1;
  }

  get activeTabPosition() {
    return this._tabLinkDirectives.findIndex(link => link.active);
  }

  get tabIds() {
    return this.tabsService.children.map(tab => tab.tabLink.tabLinkId).join(' ');
  }

  get isCurrentInOverflow() {
    return this.keyFocus.current >= this.overflowPosition;
  }

  @HostBinding('class.tabs-vertical')
  get isVertical() {
    return this.layout === TabsLayout.VERTICAL;
  }

  toggleOverflowOnPosition(position: number) {
    // we need to check current position to determine
    // whether we need to open the tab overflow or not
    this.toggleService.open = position >= this.overflowPosition;
  }

  private _tabOverflowEl: HTMLElement;

  @ViewChild(ClrTabOverflowContent, { read: ElementRef })
  set tabOverflowEl(value: ElementRef) {
    this._tabOverflowEl = value && value.nativeElement;
    if (this.toggleService.open && value) {
      // only when tab overflow view element is registered,
      // we need to move the focus to the first item
      this.keyFocus.focusCurrent();
    }
  }

  resetKeyFocusCurrentToActive(event: FocusEvent) {
    const keyFocusContainsFocus = this.keyFocus.nativeElement.contains(event.relatedTarget as HTMLElement);
    if (!keyFocusContainsFocus && this.keyFocus.current !== this.activeTabPosition) {
      this.keyFocus.current = this.activeTabPosition;
    }
  }

  toggleOverflowOnClick() {
    if (this.isCurrentInOverflow && this.toggleService.open) {
      this.keyFocus.moveTo(this.overflowPosition - 1);
    } else {
      this.keyFocus.moveTo(this.overflowPosition);
    }

    // once click handler completes running,
    // reset the _mousedown flag
    this._mousedown = false;
  }

  // in order to check focus is triggered by click
  // we are using this _mousedown flag
  _mousedown = false;

  openOverflowOnFocus() {
    // This method should be called only on keyboard generated focus
    // when the active tab is in the overflow
    if (!this._mousedown && !this.toggleService.open) {
      this.keyFocus.moveTo(this.activeTabPosition);
    }
  }

  closeOnFocusOut(event: FocusEvent) {
    if (
      !this._tabOverflowEl.contains(event.relatedTarget as HTMLElement) &&
      this.toggleService.open &&
      !this._mousedown
    ) {
      this.toggleService.open = false;

      // if the focus is out of overflow and lands on the active tab link
      // which is currently visible, set the key focus current to activeTabPosition
      if (this.tabLinkElements[this.activeTabPosition] === event.relatedTarget) {
        this.keyFocus.current = this.activeTabPosition;
      }
    }
  }

  closeOnEscapeKey() {
    // Move current to the last visible focusable item
    this.keyFocus.moveTo(this.overflowPosition - 1);
  }

  closeOnOutsideClick(event: Event, tabOverflowTrigger: HTMLElement) {
    // Exit early if the event target is the trigger element itself or element that's inside the trigger element.
    // This is because we have another handler on the tabOverflowTrigger element itself.
    // As this handler method is on the document level so the event bubbles up to it and conflicts
    // with the tabOverflowTrigger handler resulting in opening the tab overflow and closing it right away consecutively.
    if (event.target === tabOverflowTrigger || tabOverflowTrigger.contains(event.target as HTMLElement)) {
      return;
    }

    // Move current to the last visible focusable item
    if (!this._tabOverflowEl.contains(event.target as HTMLElement) && this.isCurrentInOverflow) {
      this.keyFocus.moveTo(this.overflowPosition - 1);
    }
  }

  private listenForTabLinkChanges() {
    return this.tabs.changes.pipe(startWith(this.tabs.map(tab => tab.tabLink))).subscribe(() => {
      this._tabLinkDirectives = this.tabs.map(tab => tab.tabLink);
      this.tabLinkElements = this._tabLinkDirectives.map(tab => tab.el.nativeElement);
    });
  }

  ngAfterContentInit() {
    this.subscriptions.push(this.listenForTabLinkChanges());

    if (typeof this.ifActiveService.current === 'undefined' && this.tabLinkDirectives[0]) {
      this.tabLinkDirectives[0].activate();
    }

    // set initial current position
    this.keyFocus.current = this.activeTabPosition;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
