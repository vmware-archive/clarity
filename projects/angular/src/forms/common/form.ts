/**
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ContentChildren, Directive, HostListener, QueryList, Input } from '@angular/core';
import { LayoutService } from './providers/layout.service';
import { MarkControlService } from './providers/mark-control.service';
import { ClrLabel } from './label';

@Directive({
  selector: '[clrForm]',
  providers: [LayoutService, MarkControlService],
  host: {
    '[class.clr-form]': 'true',
    '[class.clr-form-horizontal]': 'layoutService.isHorizontal()',
    '[class.clr-form-compact]': 'layoutService.isCompact()',
  },
})
export class ClrForm {
  @Input('clrLabelSize')
  set labelSize(size: number | string) {
    const sizeNumber = parseInt(size as string, 10) || 2;
    this.layoutService.labelSize = sizeNumber;
  }

  constructor(public layoutService: LayoutService, private markControlService: MarkControlService) {}

  // Trying to avoid adding an input and keep this backwards compatible at the same time
  markAsTouched() {
    this.markControlService.markAsTouched();
  }

  @ContentChildren(ClrLabel, { descendants: true })
  labels: QueryList<ClrLabel>;

  @HostListener('submit')
  onFormSubmit() {
    this.markAsTouched();
  }
}
