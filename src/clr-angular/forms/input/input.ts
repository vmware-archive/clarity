/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  Directive,
  HostListener,
  Optional,
  ViewContainerRef,
  OnInit,
  Attribute,
  Renderer2,
  ElementRef,
} from '@angular/core';
import { NgControl } from '@angular/forms';

import { IfErrorService } from '../common/if-error/if-error.service';
import { NgControlService } from '../common/providers/ng-control.service';
import { ClrInputContainer } from './input-container';
import { WrappedFormControl } from '../common/wrapped-control';
import { ControlClassService } from '../common/providers/control-class.service';

@Directive({ selector: '[clrInput]', host: { '[class.clr-input]': 'true' } })
export class ClrInput extends WrappedFormControl<ClrInputContainer> implements OnInit {
  constructor(
    vcr: ViewContainerRef,
    @Optional() private ngControlService: NgControlService,
    @Optional() private ifErrorService: IfErrorService,
    @Optional() private control: NgControl,
    @Optional() controlClassService: ControlClassService,
    @Attribute('type') public type: string,
    renderer: Renderer2,
    el: ElementRef
  ) {
    super(ClrInputContainer, vcr, 1);
    if (!control) {
      throw new Error(
        'clrInput can only be used within an Angular form control, add ngModel or formControl to the input'
      );
    }
    // Set type if it is missing
    if (!this.type) {
      renderer.setAttribute(el.nativeElement, 'type', 'text');
    }
    if (controlClassService) {
      controlClassService.className = el.nativeElement.className;
    }
  }

  ngOnInit() {
    super.ngOnInit();
    if (this.ngControlService) {
      this.ngControlService.setControl(this.control);
    }
  }

  @HostListener('blur')
  onBlur() {
    if (this.ifErrorService) {
      this.ifErrorService.triggerStatusChange();
    }
  }
}
