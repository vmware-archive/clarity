/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, Optional } from '@angular/core';
import { Subscription } from 'rxjs';

import { NgControlService } from '../providers/ng-control.service';
import { NgControl } from '@angular/forms';
import { IfControlStateService, CONTROL_STATE } from './if-control-state.service';

@Directive()
export abstract class AbstractIfState {
  protected subscriptions: Subscription[] = [];
  protected displayedContent = false;
  protected control: NgControl;

  constructor(
    @Optional() protected ifControlStateService: IfControlStateService,
    @Optional() protected ngControlService: NgControlService
  ) {
    if (ngControlService) {
      this.subscriptions.push(
        this.ngControlService.controlChanges.subscribe(control => {
          this.control = control;
        })
      );
    }

    if (ifControlStateService) {
      this.subscriptions.push(
        this.ifControlStateService.statusChanges.subscribe((state: CONTROL_STATE) => {
          this.handleState(state);
        })
      );
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  protected handleState(state: CONTROL_STATE): void {
    /* overwrite in implementation to handle status change */
  }
}
