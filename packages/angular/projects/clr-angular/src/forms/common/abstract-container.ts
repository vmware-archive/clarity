/**
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ContentChild, Directive, OnDestroy, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

import { NgControlService } from './providers/ng-control.service';
import { LayoutService } from './providers/layout.service';
import { DynamicWrapper } from '../../utils/host-wrapping/dynamic-wrapper';
import { ClrLabel } from './label';
import { ControlClassService } from './providers/control-class.service';
import { Subscription } from 'rxjs';
import { IfControlStateService, CONTROL_STATE } from './if-control-state/if-control-state.service';

@Directive()
export abstract class ClrAbstractContainer implements DynamicWrapper, OnDestroy {
  protected subscriptions: Subscription[] = [];
  _dynamic = false;
  @ContentChild(ClrLabel, { static: false })
  label: ClrLabel;
  control: NgControl;
  private state: CONTROL_STATE;

  get showHelper(): boolean {
    return this.state === CONTROL_STATE.NONE;
  }

  get showValid(): boolean {
    return this.state === CONTROL_STATE.VALID;
  }

  get showInvalid(): boolean {
    return this.state === CONTROL_STATE.INVALID;
  }

  constructor(
    protected ifControlStateService: IfControlStateService,
    @Optional() protected layoutService: LayoutService,
    protected controlClassService: ControlClassService,
    protected ngControlService: NgControlService
  ) {
    this.subscriptions.push(
      this.ifControlStateService.statusChanges.subscribe((state: CONTROL_STATE) => {
        this.state = state;
      })
    );

    this.subscriptions.push(
      this.ngControlService.controlChanges.subscribe(control => {
        this.control = control;
      })
    );
  }

  controlClass() {
    return this.controlClassService.controlClass(this.state, this.addGrid());
  }

  addGrid() {
    return this.layoutService && !this.layoutService.isVertical();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
