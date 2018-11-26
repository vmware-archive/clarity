/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import '@clr/icons/shapes/technology-shapes';

import { Component } from '@angular/core';

import { VerticalNavCases } from '../vertical-nav-cases';

@Component({
  selector: 'clr-vertical-nav-routing-demo',
  templateUrl: './vertical-nav-routing.demo.html',
  styleUrls: ['../vertical-nav.demo.scss'],
})
export class VerticalNavRoutingDemo {
  option: string = 'link';

  case: any;

  groupExpand: boolean = true;

  updateGroupExpand(event: any) {
    this.groupExpand = event;
  }

  navCollapsed: boolean = false;

  updateNavCollapsed(val: boolean): void {
    this.navCollapsed = val;
  }

  toggleNav(): void {
    this.navCollapsed = !this.navCollapsed;
  }

  toggleGroup(): void {
    this.groupExpand = !this.groupExpand;
  }

  constructor(public verticalNavCases: VerticalNavCases) {
    this.case = this.verticalNavCases.allNestedIconMenu;
  }
}
