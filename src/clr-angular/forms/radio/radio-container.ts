/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ContentChild, Input, OnDestroy, Optional } from '@angular/core';
import { Subscription } from 'rxjs';
import { isBoolean } from 'util';

import { IfErrorService } from '../common/if-error/if-error.service';
import { ClrLabel } from '../common/label';
import { ControlClassService } from '../common/providers/control-class.service';
import { LayoutService } from '../common/providers/layout.service';
import { NgControlService } from '../common/providers/ng-control.service';

@Component({
  selector: 'clr-radio-container',
  template: `
    <ng-content select="label"></ng-content>
    <label *ngIf="!label && addGrid()"></label>
    <div class="clr-control-container" [ngClass]="controlClass()">
      <div class="clr-radio-wrapper" [class.clr-radio-inline]="clrInline">
        <ng-content select="clr-radio-wrapper"></ng-content>
      </div>
      <ng-content select="clr-control-helper" *ngIf="!invalid"></ng-content>
      <clr-icon *ngIf="invalid" class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
      <ng-content select="clr-control-error" *ngIf="invalid"></ng-content>
    </div>
    `,
  host: {
    '[class.clr-form-control]': 'true',
    '[class.clr-row]': 'addGrid()',
  },
  providers: [NgControlService, ControlClassService, IfErrorService],
})
export class ClrRadioContainer implements OnDestroy {
  private subscriptions: Subscription[] = [];
  invalid = false;
  @ContentChild(ClrLabel) label: ClrLabel;
  private inline = false;

  /*
   * Here we want to support the following cases
   * clrInline - true by presence
   * clrInline="true|false" - unless it is explicitly false, strings are considered true
   * [clrInline]="true|false" - expect a boolean
   */
  @Input()
  set clrInline(value: boolean | string) {
    if (!isBoolean(value)) {
      this.inline = value === 'false' ? false : true;
    } else {
      this.inline = !!value;
    }
  }
  get clrInline() {
    return this.inline;
  }

  constructor(
    private ifErrorService: IfErrorService,
    @Optional() private layoutService: LayoutService,
    private controlClassService: ControlClassService
  ) {
    this.subscriptions.push(
      this.ifErrorService.statusChanges.subscribe(control => {
        this.invalid = control.invalid;
      })
    );
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
    this.subscriptions.map(sub => sub.unsubscribe());
  }
}
