/**
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, Input, Optional, ContentChild } from '@angular/core';

import { ControlClassService } from '../common/providers/control-class.service';
import { NgControlService } from '../common/providers/ng-control.service';
import { ClrAbstractContainer } from '../common/abstract-container';
import { LayoutService } from '../common/providers/layout.service';
import { ClrControlSuccess } from '../common/success';
import { IfControlStateService } from '../common/if-control-state/if-control-state.service';

@Component({
  selector: 'clr-radio-container',
  template: `
    <ng-content select="label"></ng-content>
    <label *ngIf="!label && addGrid()"></label>
    <div class="clr-control-container" [class.clr-control-inline]="clrInline" [ngClass]="controlClass()">
      <ng-content select="clr-radio-wrapper"></ng-content>
      <div class="clr-subtext-wrapper">
        <ng-content select="clr-control-helper" *ngIf="showHelper"></ng-content>
        <clr-icon
          *ngIf="showInvalid"
          class="clr-validate-icon"
          shape="exclamation-circle"
          aria-hidden="true"
        ></clr-icon>
        <clr-icon
          *ngIf="showValid && controlSuccessComponent"
          class="clr-validate-icon"
          shape="check-circle"
          aria-hidden="true"
        ></clr-icon>
        <ng-content select="clr-control-error" *ngIf="showInvalid"></ng-content>
        <ng-content select="clr-control-success" *ngIf="showValid"></ng-content>
      </div>
    </div>
  `,
  host: {
    '[class.clr-form-control]': 'true',
    '[class.clr-form-control-disabled]': 'control?.disabled',
    '[class.clr-row]': 'addGrid()',
  },
  providers: [NgControlService, IfControlStateService, ControlClassService],
})
export class ClrRadioContainer extends ClrAbstractContainer {
  private inline = false;
  @ContentChild(ClrControlSuccess) controlSuccessComponent: ClrControlSuccess;

  constructor(
    @Optional() protected layoutService: LayoutService,
    protected controlClassService: ControlClassService,
    protected ngControlService: NgControlService,
    protected ifControlStateService: IfControlStateService
  ) {
    super(ifControlStateService, layoutService, controlClassService, ngControlService);
  }

  /*
   * Here we want to support the following cases
   * clrInline - true by presence
   * clrInline="true|false" - unless it is explicitly false, strings are considered true
   * [clrInline]="true|false" - expect a boolean
   */
  @Input()
  set clrInline(value: boolean | string) {
    if (typeof value === 'string') {
      this.inline = value === 'false' ? false : true;
    } else {
      this.inline = !!value;
    }
  }
  get clrInline() {
    return this.inline;
  }
}
