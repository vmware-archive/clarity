/**
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ContentChild, OnDestroy, Optional, Input, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgControl } from '@angular/forms';

import { IfErrorService } from '../common/if-error/if-error.service';
import { NgControlService } from '../common/providers/ng-control.service';
import { LayoutService } from '../common/providers/layout.service';
import { DynamicWrapper } from '../../utils/host-wrapping/dynamic-wrapper';
import { ControlIdService } from '../common/providers/control-id.service';
import { ClrLabel } from '../common/label';
import { ControlClassService } from '../common/providers/control-class.service';

@Component({
  selector: 'clr-range-container',
  template: `
        <ng-content select="label"></ng-content>
        <label *ngIf="!label && addGrid()"></label>
        <div class="clr-control-container" [ngClass]="controlClass()">
            <div class="clr-range-wrapper" [class.progress-fill]="hasProgress">
                <ng-content select="[clrRange]"></ng-content>
                <span
                  *ngIf="hasProgress"
                  class="fill-input"
                  [style.width]="getRangeProgressFillWidth()"
                ></span>
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
export class ClrRangeContainer implements DynamicWrapper, OnDestroy {
  private subscriptions: Subscription[] = [];
  invalid = false;
  _dynamic = false;
  @ContentChild(ClrLabel) label: ClrLabel;
  control: NgControl;

  private _hasProgress: boolean = false;

  @Input('clrRangeHasProgress')
  set hasProgress(val: boolean) {
    const valBool = !!val;
    if (valBool !== this._hasProgress) {
      this._hasProgress = valBool;
    }
  }

  get hasProgress() {
    return this._hasProgress;
  }

  constructor(
    private ifErrorService: IfErrorService,
    @Optional() private layoutService: LayoutService,
    private controlClassService: ControlClassService,
    private ngControlService: NgControlService,
    private renderer: Renderer2,
    private idService: ControlIdService
  ) {
    this.subscriptions.push(
      this.ifErrorService.statusChanges.subscribe(invalid => {
        this.invalid = invalid;
      })
    );
    this.subscriptions.push(
      this.ngControlService.controlChanges.subscribe(control => {
        this.control = control;
      })
    );
  }

  getRangeProgressFillWidth(): string {
    const input = <HTMLInputElement>this.renderer.selectRootElement('[clrRange]#' + this.idService.id);

    const inputWidth = input.offsetWidth;
    const inputMinValue = +input.min;
    let inputMaxValue = +input.max;

    if (inputMinValue === 0 && inputMaxValue === 0) {
      inputMaxValue = 100;
    }

    const inputMiddle = (inputMinValue + inputMaxValue) / 2;
    const inputValue = !!this.control && this.control.value !== undefined ? this.control.value : inputMiddle;
    const valueAsPercent = (inputValue - inputMinValue) * 100 / (inputMaxValue - inputMinValue);

    return valueAsPercent * inputWidth / 100 + 'px';
  }

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
