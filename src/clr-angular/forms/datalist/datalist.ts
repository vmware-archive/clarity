/**
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  Input,
  Directive,
  ViewContainerRef,
  Injector,
  Self,
  Optional,
  Renderer2,
  ElementRef,
  HostListener,
} from '@angular/core';
import { WrappedFormControl } from '../common/wrapped-control';
import { ClrDatalistContainer } from './datalist-container';
import { NgControl } from '@angular/forms';
import { FocusService } from '../common/providers/focus.service';

@Directive({
  selector: '[clrDatalist]',
  host: {
    '[class.clr-input]': 'true',
  },
})
export class ClrDatalist extends WrappedFormControl<ClrDatalistContainer> {
  constructor(
    @Optional() private focusService: FocusService,
    vcr: ViewContainerRef,
    injector: Injector,
    @Self()
    @Optional()
    control: NgControl,
    renderer: Renderer2,
    el: ElementRef
  ) {
    super(vcr, ClrDatalistContainer, injector, control, renderer, el);
  }

  @HostListener('focus')
  triggerFocus() {
    if (this.focusService) {
      this.focusService.focused = true;
    }
  }

  @HostListener('blur')
  triggerValidation() {
    super.triggerValidation();
    if (this.focusService) {
      this.focusService.focused = false;
    }
  }
}
