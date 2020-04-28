/**
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  Directive,
  ViewContainerRef,
  Injector,
  Self,
  Optional,
  Renderer2,
  ElementRef,
  HostListener,
  AfterContentInit,
} from '@angular/core';
import { WrappedFormControl } from '../common/wrapped-control';
import { ClrDatalistContainer } from './datalist-container';
import { NgControl } from '@angular/forms';
import { FocusService } from '../common/providers/focus.service';
import { DatalistIdService } from './providers/datalist-id.service';

@Directive({
  selector: '[clrDatalistInput]',
  host: {
    '[class.clr-input]': 'true',
    '[attr.list]': 'listValue',
  },
})
export class ClrDatalistInput extends WrappedFormControl<ClrDatalistContainer> implements AfterContentInit {
  constructor(
    @Optional() private focusService: FocusService,
    vcr: ViewContainerRef,
    injector: Injector,
    @Self()
    @Optional()
    control: NgControl,
    renderer: Renderer2,
    el: ElementRef,
    private datalistIdService: DatalistIdService
  ) {
    super(vcr, ClrDatalistContainer, injector, control, renderer, el);

    if (!this.focusService) {
      throw new Error('clrDatalist requires being wrapped in <clr-datalist-container>');
    }
  }

  listValue: string;

  ngAfterContentInit() {
    // Subscriptions is inherited from WrappedFormControl, unsubscribe is handled there
    this.subscriptions.push(this.datalistIdService.idChange.subscribe(id => (this.listValue = id)));
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
