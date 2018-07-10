/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, HostListener, Optional, ViewContainerRef, Renderer2, ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

import { IfErrorService } from '../common/if-error/if-error.service';
import { NgControlService } from '../common/providers/ng-control.service';
import { ClrTextareaContainer } from './textarea-container';
import { WrappedFormControl } from '../common/wrapped-control';
import { ControlClassService } from '../common/providers/control-class.service';

@Directive({ selector: '[clrTextarea]', host: { '[class.clr-textarea]': 'true' } })
export class ClrTextarea extends WrappedFormControl<ClrTextareaContainer> implements OnInit {
  constructor(
    vcr: ViewContainerRef,
    @Optional() private ngControlService: NgControlService,
    @Optional() private ifErrorService: IfErrorService,
    @Optional() private control: NgControl,
    @Optional() controlClassService: ControlClassService,
    renderer: Renderer2,
    el: ElementRef
  ) {
    super(ClrTextareaContainer, vcr, 1);
    if (!control) {
      throw new Error(
        'clrTextarea can only be used within an Angular form control, add ngModel or formControl to the textarea'
      );
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
