/**
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, Inject, InjectionToken, Input, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ControlClassService } from '../common/providers/control-class.service';
import { ControlIdService } from '../common/providers/control-id.service';
import { FocusService } from '../common/providers/focus.service';
import { LayoutService } from '../common/providers/layout.service';
import { NgControlService } from '../common/providers/ng-control.service';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { ClrAbstractContainer } from '../common/abstract-container';
import { IfControlStateService } from '../common/if-control-state/if-control-state.service';

export const TOGGLE_SERVICE = new InjectionToken<BehaviorSubject<boolean>>(undefined);
export function ToggleServiceFactory() {
  return new BehaviorSubject<boolean>(false);
}
export const TOGGLE_SERVICE_PROVIDER = { provide: TOGGLE_SERVICE, useFactory: ToggleServiceFactory };

@Component({
  selector: 'clr-password-container',
  template: `
    <ng-content select="label"></ng-content>
    <label *ngIf="!label && addGrid()"></label>
    <div class="clr-control-container" [ngClass]="controlClass()">
      <div class="clr-input-wrapper">
        <div class="clr-input-group" [class.clr-focus]="focus">
          <ng-content select="[clrPassword]"></ng-content>
          <button
            *ngIf="clrToggle"
            (click)="toggle()"
            [disabled]="control?.disabled"
            class="clr-input-group-icon-action"
            type="button"
          >
            <clr-icon
              [attr.shape]="show ? 'eye-hide' : 'eye'"
              [attr.title]="show ? commonStrings.keys.hide : commonStrings.keys.show"
            ></clr-icon>
          </button>
        </div>
        <clr-icon
          *ngIf="showInvalid"
          class="clr-validate-icon"
          shape="exclamation-circle"
          aria-hidden="true"
        ></clr-icon>
        <clr-icon *ngIf="showValid" class="clr-validate-icon" shape="check-circle" aria-hidden="true"></clr-icon>
      </div>
      <ng-content select="clr-control-helper" *ngIf="showHelper"></ng-content>
      <ng-content select="clr-control-error" *ngIf="showInvalid"></ng-content>
      <ng-content select="clr-control-success" *ngIf="showValid"></ng-content>
    </div>
  `,
  host: {
    '[class.clr-form-control]': 'true',
    '[class.clr-form-control-disabled]': 'control?.disabled',
    '[class.clr-row]': 'addGrid()',
  },
  providers: [
    NgControlService,
    ControlIdService,
    ControlClassService,
    FocusService,
    TOGGLE_SERVICE_PROVIDER,
    IfControlStateService,
  ],
})
export class ClrPasswordContainer extends ClrAbstractContainer {
  show = false;
  focus = false;
  private _toggle = true;

  @Input('clrToggle')
  set clrToggle(state: boolean) {
    this._toggle = state;
    if (!state) {
      this.show = false;
    }
  }
  get clrToggle() {
    return this._toggle;
  }

  constructor(
    ifControlStateService: IfControlStateService,
    @Optional() layoutService: LayoutService,
    controlClassService: ControlClassService,
    ngControlService: NgControlService,
    public focusService: FocusService,
    @Inject(TOGGLE_SERVICE) private toggleService: BehaviorSubject<boolean>,
    public commonStrings: ClrCommonStringsService
  ) {
    super(ifControlStateService, layoutService, controlClassService, ngControlService);

    /* The unsubscribe is handle inside the ClrAbstractContainer */
    this.subscriptions.push(
      this.focusService.focusChange.subscribe(state => {
        this.focus = state;
      })
    );
  }

  toggle() {
    this.show = !this.show;
    this.toggleService.next(this.show);
  }
}
