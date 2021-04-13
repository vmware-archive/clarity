/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, Input, Optional, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgControlService } from '../providers/ng-control.service';
import { IfControlStateService, CONTROL_STATE } from './if-control-state.service';
import { AbstractIfState } from './abstract-if-state';

@Directive({ selector: '[clrIfError]' })
export class ClrIfError extends AbstractIfState {
  @Input('clrIfError') error: string;

  constructor(
    @Optional() ifControlStateService: IfControlStateService,
    @Optional() ngControlService: NgControlService,
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) {
    super(ifControlStateService, ngControlService);

    if (!this.ifControlStateService) {
      throw new Error('clrIfError can only be used within a form control container element like clr-input-container');
    }
  }
  /**
   * @param state CONTROL_STATE
   */
  protected handleState(state: CONTROL_STATE) {
    if (this.error && this.control) {
      this.displayError(this.control.hasError(this.error));
    } else {
      this.displayError(CONTROL_STATE.INVALID === state);
    }
  }

  private displayError(invalid: boolean) {
    /* if no container do nothing */
    if (!this.container) {
      return;
    }
    if (invalid && this.displayedContent === false) {
      this.container.createEmbeddedView(this.template, { error: this.control.getError(this.error) });
      this.displayedContent = true;
    } else if (!invalid) {
      this.container.clear();
      this.displayedContent = false;
    }
  }
}
