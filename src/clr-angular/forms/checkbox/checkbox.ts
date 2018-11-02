/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, Renderer2, ElementRef, Injector, Self, Optional, ViewContainerRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { ClrCheckboxWrapper } from './checkbox-wrapper';

import { WrappedFormControl } from '../common/wrapped-control';

@Directive({ selector: '[clrCheckbox]' })
export class ClrCheckbox extends WrappedFormControl<ClrCheckboxWrapper> {
  constructor(
    vcr: ViewContainerRef,
    injector: Injector,
    @Self()
    @Optional()
    control: NgControl,
    renderer: Renderer2,
    el: ElementRef
  ) {
    super(vcr, ClrCheckboxWrapper, injector, control, renderer, el);
  }
}
