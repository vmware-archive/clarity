/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import '@clr/icons/shapes/media-shapes';
import '@clr/icons/shapes/social-shapes';

import { Component } from '@angular/core';

import { VerticalNavCases } from '../vertical-nav-cases';

@Component({
  selector: 'clr-vertical-nav-static-demo',
  templateUrl: './vertical-nav-static.demo.html',
  styleUrls: ['../vertical-nav.demo.scss'],
})
export class VerticalNavStaticDemo {
  cases: any[];
  collapsed: boolean = false;

  constructor(public verticalNavCases: VerticalNavCases) {
    this.cases = this.verticalNavCases.nonCollapsedMenus;
  }

  hasNestedChildren(items: any[]): boolean {
    for (const item of items) {
      if (item.children) {
        return true;
      }
    }
    return false;
  }
}
