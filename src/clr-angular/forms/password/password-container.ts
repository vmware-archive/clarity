/**
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ContentChild, Inject, InjectionToken, Input, OnDestroy, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { DynamicWrapper } from '../../utils/host-wrapping/dynamic-wrapper';

import { IfErrorService } from '../common/if-error/if-error.service';
import { ClrLabel } from '../common/label';
import { ControlClassService } from '../common/providers/control-class.service';
import { ControlIdService } from '../common/providers/control-id.service';
import { FocusService } from '../common/providers/focus.service';
import { LayoutService } from '../common/providers/layout.service';
import { NgControlService } from '../common/providers/ng-control.service';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';

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
            type="button">
            <clr-icon
            [attr.shape]="show ? 'eye-hide' : 'eye'"
            [attr.title]="show ? commonStrings.hide : commonStrings.show"></clr-icon>
          </button>
        </div>
        <clr-icon *ngIf="invalid" class="clr-validate-icon" shape="exclamation-circle" aria-hidden="true"></clr-icon>
      </div>
      <ng-content select="clr-control-helper" *ngIf="!invalid"></ng-content>
      <ng-content select="clr-control-error" *ngIf="invalid"></ng-content>
    </div>
    `,
  host: {
    '[class.clr-form-control]': 'true',
    '[class.clr-form-control-disabled]': 'control?.disabled',
    '[class.clr-row]': 'addGrid()',
  },
  providers: [
    IfErrorService,
    NgControlService,
    ControlIdService,
    ControlClassService,
    FocusService,
    TOGGLE_SERVICE_PROVIDER,
  ],
})
export class ClrPasswordContainer implements DynamicWrapper, OnDestroy {
  private subscriptions: Subscription[] = [];
  invalid = false;
  control: NgControl;
  _dynamic = false;
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
  @ContentChild(ClrLabel, { static: false })
  label: ClrLabel;

  constructor(
    private ifErrorService: IfErrorService,
    @Optional() private layoutService: LayoutService,
    private controlClassService: ControlClassService,
    public focusService: FocusService,
    private ngControlService: NgControlService,
    @Inject(TOGGLE_SERVICE) private toggleService: BehaviorSubject<boolean>,
    public commonStrings: ClrCommonStrings
  ) {
    this.subscriptions.push(
      this.ifErrorService.statusChanges.subscribe(invalid => {
        this.invalid = invalid;
      })
    );
    this.subscriptions.push(
      this.focusService.focusChange.subscribe(state => {
        this.focus = state;
      })
    );
    this.subscriptions.push(
      this.ngControlService.controlChanges.subscribe(control => {
        this.control = control;
      })
    );
  }

  toggle() {
    this.show = !this.show;
    this.toggleService.next(this.show);
  }

  controlClass() {
    return this.controlClassService.controlClass(this.invalid, this.addGrid());
  }

  addGrid() {
    if (this.layoutService && !this.layoutService.isVertical()) {
      return true;
    }
    return false;
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.map(sub => sub.unsubscribe());
    }
  }
}
