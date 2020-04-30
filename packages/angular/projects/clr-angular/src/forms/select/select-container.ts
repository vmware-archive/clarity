/**
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ContentChild, Optional } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';

import { IfErrorService } from '../common/if-error/if-error.service';
import { NgControlService } from '../common/providers/ng-control.service';
import { ControlIdService } from '../common/providers/control-id.service';
import { ControlClassService } from '../common/providers/control-class.service';
import { ClrAbstractContainer } from '../common/abstract-container';
import { LayoutService } from '../common/providers/layout.service';

@Component({
  selector: 'clr-select-container',
  template: `
    <ng-content select="label"></ng-content>
    <label *ngIf="!label && addGrid()"></label>
    <div class="clr-control-container" [ngClass]="controlClass()">
      <div [ngClass]="wrapperClass()">
        <ng-content select="[clrSelect]"></ng-content>
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
  providers: [IfErrorService, NgControlService, ControlIdService, ControlClassService],
})
export class ClrSelectContainer extends ClrAbstractContainer {
  @ContentChild(SelectMultipleControlValueAccessor, { static: false })
  multiple: SelectMultipleControlValueAccessor;
  private multi = false;

  constructor(
    protected ifErrorService: IfErrorService,
    @Optional() protected layoutService: LayoutService,
    protected controlClassService: ControlClassService,
    protected ngControlService: NgControlService
  ) {
    super(ifErrorService, layoutService, controlClassService, ngControlService);
  }

  ngOnInit() {
    this.subscriptions.push(
      this.ngControlService.controlChanges.subscribe(control => {
        if (control) {
          this.multi = control.valueAccessor instanceof SelectMultipleControlValueAccessor;
          this.control = control;
        }
      })
    );
  }

  wrapperClass() {
    return this.multi ? 'clr-multiselect-wrapper' : 'clr-select-wrapper';
  }
}
