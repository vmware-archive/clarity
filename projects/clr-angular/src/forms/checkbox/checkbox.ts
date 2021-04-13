/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, Renderer2, ElementRef, Injector, Self, Optional, ViewContainerRef, Attribute } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { ClrCheckboxWrapper, IS_TOGGLE } from './checkbox-wrapper';
import { WrappedFormControl } from '../common/wrapped-control';

/**
 * This implements both the clrCheckbox and clrToggle functionality, since they are both just checkboxes with different
 * visual styling. The challenge is that the container needs to know which selector was used, which the @Attribute
 * decorator gets for us to determine if the toggle is used, and emits a value to the wrapper container to tell it
 * there is a toggle switch instead.
 */
@Directive({ selector: '[clrCheckbox],[clrToggle]' })
export class ClrCheckbox extends WrappedFormControl<ClrCheckboxWrapper> {
  constructor(
    vcr: ViewContainerRef,
    injector: Injector,
    @Self()
    @Optional()
    control: NgControl,
    renderer: Renderer2,
    el: ElementRef,
    @Attribute('clrToggle') private toggle: string
  ) {
    super(vcr, ClrCheckboxWrapper, injector, control, renderer, el);
  }

  ngOnInit() {
    super.ngOnInit();

    const toggleService = this.getProviderFromContainer<BehaviorSubject<boolean>>(IS_TOGGLE, null);

    if (toggleService && this.toggle !== null) {
      toggleService.next(true);
    }
  }
}
