/**
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, Input, OnInit } from '@angular/core';
import { ClrFormLayout, LayoutService } from './providers/layout.service';

@Directive({
  selector: '[clrForm][clrLayout]',
})
export class ClrLayout implements OnInit {
  @Input('clrLayout') layout: ClrFormLayout;

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    // Only set the layout if it is a valid option
    if (this.layout && this.layoutService.isValid(this.layout)) {
      this.layoutService.layout = this.layout;
    }
  }
}
