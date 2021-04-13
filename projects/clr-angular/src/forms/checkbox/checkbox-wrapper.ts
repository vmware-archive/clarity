/**
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, OnInit, ContentChild, Inject, InjectionToken, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

import { DynamicWrapper } from '../../utils/host-wrapping/dynamic-wrapper';
import { ControlIdService } from '../common/providers/control-id.service';
import { ClrLabel } from '../common/label';

export const IS_TOGGLE = new InjectionToken<BehaviorSubject<boolean>>('IS_TOGGLE');
export function isToggleFactory() {
  return new BehaviorSubject<boolean>(false);
}
export const IS_TOGGLE_PROVIDER = { provide: IS_TOGGLE, useFactory: isToggleFactory };

@Component({
  selector: 'clr-checkbox-wrapper,clr-toggle-wrapper',
  template: `
    <ng-content select="[clrCheckbox],[clrToggle]"></ng-content>
    <ng-content select="label"></ng-content>
    <label *ngIf="!label"></label>
  `,
  host: {
    '[class.clr-checkbox-wrapper]': '!toggle',
    '[class.clr-toggle-wrapper]': 'toggle',
  },
  providers: [ControlIdService, IS_TOGGLE_PROVIDER],
})
export class ClrCheckboxWrapper implements DynamicWrapper, OnInit, OnDestroy {
  // We need both _dynamic for HostWrapper and ContentChild(ClrLabel) in cases where
  // the user puts a radio inside a wrapper without a label, host wrapping doesn't apply
  // but we'd still need to insert a label
  _dynamic = false;
  @ContentChild(ClrLabel, { static: true })
  label: ClrLabel;
  toggle = false;
  private subscriptions: Subscription[] = [];

  constructor(@Inject(IS_TOGGLE) toggleService: BehaviorSubject<boolean>) {
    this.subscriptions.push(
      toggleService.subscribe(state => {
        this.toggle = state;
      })
    );
  }

  ngOnInit() {
    if (this.label) {
      this.label.disableGrid();
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
