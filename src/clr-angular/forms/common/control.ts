/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, ElementRef, Injector, Optional, Renderer2, Self, ViewContainerRef } from '@angular/core';
import { WrappedFormControl } from './wrapped-control';
import { ClrControlContainer } from './control-container';
import { NgControl } from '@angular/forms';

@Directive({ selector: '[clrControl]', host: { '[class.clr-input]': 'true' } })
export class ClrControl extends WrappedFormControl<ClrControlContainer> {
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
    super(vcr, ClrControlContainer, injector, control, renderer, el);
  }
}
