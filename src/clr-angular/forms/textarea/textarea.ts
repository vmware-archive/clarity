/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, ViewContainerRef, Renderer2, ElementRef, Injector, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

import { WrappedFormControl } from '../common/wrapped-control';
import { ClrTextareaContainer } from './textarea-container';

@Directive({ selector: '[clrTextarea]', host: { '[class.clr-textarea]': 'true' } })
export class ClrTextarea extends WrappedFormControl<ClrTextareaContainer> {
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
    super(vcr, ClrTextareaContainer, injector, control, renderer, el);
  }
}
