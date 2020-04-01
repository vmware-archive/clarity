/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, QueryList, ViewChildren } from '@angular/core';
import { ClrForm } from '@clr/angular';

@Component({
  templateUrl: './checkboxes.demo.html',
})
export class CheckboxesDemo {
  @ViewChildren(ClrForm) forms: QueryList<ClrForm>;

  disabled = true;
  vertical = {
    default: {
      one: false,
      two: true,
      three: false,
    },
    inline: {
      one: false,
      two: true,
      three: false,
    },
    disabled: {
      one: false,
      two: true,
      three: false,
    },
    error: {
      one: false,
      two: false,
      three: false,
    },
  };

  horizontal = Object.assign({}, this.vertical);
  compact = Object.assign({}, this.vertical);

  ngAfterViewInit() {
    // This just forces validation on each form on load for visual testing
    this.forms.forEach(f => f.markAsTouched());
  }
}
