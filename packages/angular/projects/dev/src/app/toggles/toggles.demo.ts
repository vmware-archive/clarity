/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, QueryList, ViewChildren } from '@angular/core';
import { ClrForm } from '@clr/angular';

@Component({ templateUrl: './toggles.demo.html' })
export class TogglesDemo {
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
    right: {
      one: false,
      two: true,
      three: false,
    },
    rightInline: {
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
