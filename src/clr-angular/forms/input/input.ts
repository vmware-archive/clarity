/**
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, Optional, ViewContainerRef, Renderer2, ElementRef, Injector, Self, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

import { ClrInputContainer } from './input-container';
import { WrappedFormControl } from '../common/wrapped-control';
import { ControlIdService } from '../common/providers/control-id.service';

@Directive({
  selector: '[clrInput]',
  host: {
    '[class.clr-input]': 'true',
    '[attr.aria-describedby]': 'getDescribedById',
  },
})
export class ClrInput extends WrappedFormControl<ClrInputContainer> {
  protected index = 1;

  constructor(
    vcr: ViewContainerRef,
    injector: Injector,
    @Self()
    @Optional()
    control: NgControl,
    renderer: Renderer2,
    el: ElementRef,
    @Optional() public controlIdService: ControlIdService
  ) {
    super(vcr, ClrInputContainer, injector, control, renderer, el);
  }

  /**
   * Provide a way to overwrite aria-describedby property.
   */
  @Input('aria-describedby') userDescribedById: string;

  public get getDescribedById() {
    if (this.userDescribedById) {
      return this.userDescribedById;
    }
    /**
     * expect to find containerID-error else empty string
     */
    return this.controlIdService ? `${this.controlIdService.id}-error` : '';
  }
}
