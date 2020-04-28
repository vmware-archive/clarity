/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, ViewContainerRef, Renderer2, ElementRef, Injector, Optional, Self } from '@angular/core';

import { WrappedFormControl } from '../common/wrapped-control';
import { ClrSelectContainer } from './select-container';
import { NgControl } from '@angular/forms';

@Directive({ selector: '[clrSelect]', host: { '[class.clr-select]': 'true' } })
export class ClrSelect extends WrappedFormControl<ClrSelectContainer> {
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
    super(vcr, ClrSelectContainer, injector, control, renderer, el);
  }
}
