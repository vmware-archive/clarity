/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { VerticalNavGroupRegistrationService } from './providers/vertical-nav-group-registration.service';
import { VerticalNavIconService } from './providers/vertical-nav-icon.service';
import { VerticalNavService } from './providers/vertical-nav.service';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';

@Component({
  selector: 'clr-vertical-nav',
  templateUrl: './vertical-nav.html',
  providers: [VerticalNavService, VerticalNavIconService, VerticalNavGroupRegistrationService],
  host: {
    class: 'clr-vertical-nav',
    '[class.is-collapsed]': 'collapsed',
    '[class.has-nav-groups]': 'hasNavGroups',
    '[class.has-icons]': 'hasIcons',
  },
})
export class ClrVerticalNav implements OnDestroy {
  get collapsible(): boolean {
    return this._navService.collapsible;
  }

  @Input('clrVerticalNavCollapsible')
  set collapsible(value: boolean) {
    this._navService.collapsible = value;
  }

  get collapsed(): boolean {
    return this._navService.collapsed;
  }

  @Input('clrVerticalNavCollapsed')
  set collapsed(value: boolean) {
    this._navService.collapsed = value;
  }

  @Output('clrVerticalNavCollapsedChange')
  private _collapsedChanged: EventEmitter<boolean> = new EventEmitter<boolean>(true);

  get hasNavGroups(): boolean {
    return this._navGroupRegistrationService.navGroupCount > 0;
  }

  get hasIcons(): boolean {
    return this._navIconService.hasIcons;
  }

  private _sub: Subscription;

  constructor(
    private _navService: VerticalNavService,
    private _navIconService: VerticalNavIconService,
    private _navGroupRegistrationService: VerticalNavGroupRegistrationService,
    public commonStrings: ClrCommonStrings
  ) {
    this._sub = this._navService.collapsedChanged.subscribe(value => {
      this._collapsedChanged.emit(value);
    });
  }

  toggleByButton() {
    this.collapsed = !this.collapsed;
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }
}
