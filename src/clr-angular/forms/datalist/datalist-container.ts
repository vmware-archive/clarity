/**
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ContentChild } from '@angular/core';
import { ControlClassService } from '../common/providers/control-class.service';
import { LayoutService } from '../common/providers/layout.service';
import { DynamicWrapper } from '../../utils/host-wrapping/dynamic-wrapper';
import { ControlIdService } from '../common/providers/control-id.service';
import { FocusService } from '../common/providers/focus.service';
import { IfErrorService } from '../common/if-error/if-error.service';
import { NgControlService } from '../common/providers/ng-control.service';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ClrLabel } from '../common/label';
import { DatalistIdService } from './providers/datalist-id.service';

@Component({
  selector: 'clr-datalist-container',
  template: `
    <ng-content select="label"></ng-content>
    <label *ngIf="!label && addGrid()"></label>
    <div class="clr-control-container" [ngClass]="controlClass()">
      <div class="clr-input-wrapper">
        <div class="clr-input-group" [class.clr-focus]="focus">
          <ng-content select="[clrDatalistInput]"></ng-content>
          <ng-content select="datalist"></ng-content>
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
    ControlClassService,
    LayoutService,
    ControlIdService,
    FocusService,
    IfErrorService,
    NgControlService,
    DatalistIdService,
  ],
})
export class ClrDatalistContainer implements DynamicWrapper {
  private subscriptions: Subscription[] = [];
  _dynamic: boolean = false;
  invalid: boolean = false;
  focus: boolean = false;
  control: NgControl;

  constructor(
    private controlClassService: ControlClassService,
    private layoutService: LayoutService,
    private ifErrorService: IfErrorService,
    private focusService: FocusService,
    private ngControlService: NgControlService
  ) {
    this.subscriptions.push(
      this.ifErrorService.statusChanges.subscribe(invalid => (this.invalid = invalid)),
      this.focusService.focusChange.subscribe(state => (this.focus = state)),
      this.ngControlService.controlChanges.subscribe(control => (this.control = control))
    );
  }

  @ContentChild(ClrLabel) label: ClrLabel;

  controlClass() {
    return this.controlClassService.controlClass(this.invalid, this.addGrid());
  }

  addGrid() {
    return this.layoutService && !this.layoutService.isVertical();
  }

  ngOnDestroy() {
    this.subscriptions.map(sub => sub.unsubscribe());
  }
}
