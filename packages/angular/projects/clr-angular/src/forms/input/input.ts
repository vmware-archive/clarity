/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, Optional, ViewContainerRef, Renderer2, ElementRef, Injector, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

import { ClrInputContainer } from './input-container';
import { WrappedFormControl } from '../common/wrapped-control';

@Directive({ selector: '[clrInput]', host: { '[class.clr-input]': 'true' } })
export class ClrInput extends WrappedFormControl<ClrInputContainer> {
  protected index = 1;

  constructor(
    vcr: ViewContainerRef,
    injector: Injector,
    @Self()
    @Optional()
    control: NgControl,
    renderer: Renderer2,
    el: ElementRef
  ) {
    super(vcr, ClrInputContainer, injector, control, renderer, el);
  }
}
