/**
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, Optional, ViewContainerRef, Renderer2, ElementRef, Injector, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

import { WrappedFormControl } from '../common/wrapped-control';
import { ClrRangeContainer } from './range-container';

@Directive({ selector: '[clrRange]', host: { '[class.clr-range]': 'true' } })
export class ClrRange extends WrappedFormControl<ClrRangeContainer> {
  constructor(
    vcr: ViewContainerRef,
    injector: Injector,
    @Self()
    @Optional()
    control: NgControl,
    renderer: Renderer2,
    el: ElementRef
  ) {
    super(vcr, ClrRangeContainer, injector, control, renderer, el);
  }

  // Notes: We need an output here EventEmitter for the value
  // Does this implementation also need a display for the value?
}
