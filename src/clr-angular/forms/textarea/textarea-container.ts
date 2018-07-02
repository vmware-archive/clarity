/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ContentChild, OnDestroy, Optional } from '@angular/core';
import { Subscription } from 'rxjs';

import { IfErrorService } from '../common/if-error/if-error.service';
import { NgControlService } from '../common/providers/ng-control.service';
import { LayoutService } from '../common/providers/layout.service';
import { DynamicWrapper } from '../../utils/host-wrapping/dynamic-wrapper';
import { ControlIdService } from '../common/providers/control-id.service';
import { ClrLabel } from '../common/label';
import { ControlClassService } from '../common/providers/control-class.service';

@Component({
  selector: 'clr-textarea-container',
  template: `
        <ng-content select="label"></ng-content>
        <label *ngIf="!label && addGrid()"></label>
        <div class="clr-control-container" [ngClass]="controlClass()">
            <div class="clr-textarea-wrapper">
                <ng-content select="[clrTextarea]"></ng-content>
                <clr-icon *ngIf="invalid" class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
            </div>
            <ng-content select="clr-control-helper" *ngIf="!invalid"></ng-content>
            <ng-content select="clr-control-error" *ngIf="invalid"></ng-content>
        </div>
    `,
  host: {
    '[class.clr-form-control]': 'true',
    '[class.clr-row]': 'addGrid()',
  },
  providers: [IfErrorService, NgControlService, ControlIdService, ControlClassService],
})
export class ClrTextareaContainer implements DynamicWrapper, OnDestroy {
  subscription: Subscription;
  invalid = false;
  _dynamic = false;
  @ContentChild(ClrLabel) label: ClrLabel;

  constructor(
    private ifErrorService: IfErrorService,
    @Optional() private layoutService: LayoutService,
    private controlClassService: ControlClassService
  ) {
    this.subscription = this.ifErrorService.statusChanges.subscribe(control => {
      this.invalid = control.invalid;
    });
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
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
