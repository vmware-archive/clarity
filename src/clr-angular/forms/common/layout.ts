/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, Input, OnInit } from '@angular/core';
import { Layouts, LayoutService } from './providers/layout.service';

@Directive({
  selector: '[clrLayout]',
})
export class ClrLayout implements OnInit {
  @Input('clrLayout') layout: Layouts;

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    // Only set the layout if it is a valid option
    if (this.layout && this.layoutService.isValid(this.layout)) {
      this.layoutService.layout = this.layout;
    }
  }
}
