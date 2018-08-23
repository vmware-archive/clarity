/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, ElementRef, HostListener, OnInit, Optional, ViewContainerRef } from '@angular/core';
import { NgControl } from '@angular/forms';

import { IfErrorService } from '../common/if-error/if-error.service';
import { ControlClassService } from '../common/providers/control-class.service';
import { NgControlService } from '../common/providers/ng-control.service';
import { WrappedFormControl } from '../common/wrapped-control';
import { ClrRadioWrapper } from '../radio/radio-wrapper';

@Directive({ selector: '[clrRadio]' })
export class ClrRadio extends WrappedFormControl<ClrRadioWrapper> implements OnInit {
  constructor(
    vcr: ViewContainerRef,
    @Optional() private ngControlService: NgControlService,
    @Optional() private ifErrorService: IfErrorService,
    @Optional() private control: NgControl,
    @Optional() controlClassService: ControlClassService,
    el: ElementRef
  ) {
    super(ClrRadioWrapper, vcr, 0);
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
