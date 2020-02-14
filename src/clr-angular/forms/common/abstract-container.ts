/**
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ContentChild, Directive, OnDestroy, Optional } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgControl } from '@angular/forms';

import { IfErrorService } from './if-error/if-error.service';
import { NgControlService } from './providers/ng-control.service';
import { LayoutService } from './providers/layout.service';
import { DynamicWrapper } from '../../utils/host-wrapping/dynamic-wrapper';
import { ClrLabel } from './label';
import { ControlClassService } from './providers/control-class.service';

@Directive()
export abstract class ClrAbstractContainer implements DynamicWrapper, OnDestroy {
  protected subscriptions: Subscription[] = [];
  invalid = false;
  _dynamic = false;
  @ContentChild(ClrLabel, { static: false })
  label: ClrLabel;
  control: NgControl;

  constructor(
    protected ifErrorService: IfErrorService,
    @Optional() protected layoutService: LayoutService,
    protected controlClassService: ControlClassService,
    protected ngControlService: NgControlService
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
