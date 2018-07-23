/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  Directive,
  OnInit,
  HostListener,
  Optional,
  ViewContainerRef,
  Attribute,
  Renderer2,
  Inject,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { NgControl } from '@angular/forms';

import { IfErrorService } from '../common/if-error/if-error.service';
import { NgControlService } from '../common/providers/ng-control.service';
import { ClrPasswordContainer, ToggleService } from './password-container';
import { WrappedFormControl } from '../common/wrapped-control';
import { FocusService } from '../common/providers/focus.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ControlClassService } from '../common/providers/control-class.service';

@Directive({ selector: '[clrPassword]', host: { '[class.clr-input]': 'true' } })
export class ClrPassword extends WrappedFormControl<ClrPasswordContainer> implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(
    vcr: ViewContainerRef,
    @Optional() private ngControlService: NgControlService,
    @Optional() private ifErrorService: IfErrorService,
    @Optional() private control: NgControl,
    @Optional() private focusService: FocusService,
    controlClassService: ControlClassService,
    @Attribute('type') public type: string,
    renderer: Renderer2,
    el: ElementRef,
    @Inject(ToggleService) private toggleService: BehaviorSubject<boolean>
  ) {
    super(ClrPasswordContainer, vcr, 1);
    if (!this.control) {
      throw new Error(
        'clrPassword can only be used within an Angular form control, add ngModel or formControl to the input'
      );
    }
    if (!this.focusService) {
      throw new Error('clrPassword requires being wrapped in <clr-password-container>');
    }
    // Set type if it is missing
    if (!this.type) {
      renderer.setAttribute(el.nativeElement, 'type', 'password');
    }
    controlClassService.className = el.nativeElement.className;
    this.subscription = this.toggleService.subscribe(toggle => {
      renderer.setProperty(el.nativeElement, 'type', toggle ? 'text' : 'password');
    });
  }

  ngOnInit() {
    super.ngOnInit();
    if (this.ngControlService) {
      this.ngControlService.setControl(this.control);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('focus')
  onFocus() {
    if (this.focusService) {
      this.focusService.focused = true;
    }
  }

  @HostListener('blur')
  onBlur() {
    if (this.ifErrorService) {
      this.ifErrorService.triggerStatusChange();
    }
    if (this.focusService) {
      this.focusService.focused = false;
    }
  }
}
