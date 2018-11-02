/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Injector,
  OnDestroy,
  OnInit,
  Optional,
  Renderer2,
  Self,
  ViewContainerRef,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgControl } from '@angular/forms';

import { ClrPasswordContainer, ToggleService } from './password-container';
import { WrappedFormControl } from '../common/wrapped-control';
import { FocusService } from '../common/providers/focus.service';

@Directive({ selector: '[clrPassword]', host: { '[class.clr-input]': 'true' } })
export class ClrPassword extends WrappedFormControl<ClrPasswordContainer> implements OnInit, OnDestroy {
  protected index = 1;

  constructor(
    vcr: ViewContainerRef,
    injector: Injector,
    @Self()
    @Optional()
    control: NgControl,
    renderer: Renderer2,
    el: ElementRef,
    @Optional() private focusService: FocusService,
    @Optional()
    @Inject(ToggleService)
    private toggleService: BehaviorSubject<boolean>
  ) {
    super(vcr, ClrPasswordContainer, injector, control, renderer, el);

    if (!this.focusService) {
      throw new Error('clrPassword requires being wrapped in <clr-password-container>');
    }

    this.subscriptions.push(
      this.toggleService.subscribe(toggle => {
        renderer.setProperty(el.nativeElement, 'type', toggle ? 'text' : 'password');
      })
    );
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
