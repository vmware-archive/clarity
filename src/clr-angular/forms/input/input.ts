/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, HostListener, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

import { IfErrorService } from '../common/if-error/if-error.service';
import { NgControlService } from '../common/providers/ng-control.service';

@Directive({ selector: '[clrInput]', host: { '[class.clr-input]': 'true' } })
export class ClrInput {
  constructor(
    @Optional() private ngControlService: NgControlService,
    @Optional() private ifErrorService: IfErrorService,
    @Optional() private control: NgControl
  ) {
    if (!this.control) {
      throw new Error(
        'clrInput can only be used within an Angular form control, add ngModel or formControl to the input'
      );
    }
  }

  ngAfterContentInit() {
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
