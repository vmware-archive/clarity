/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import {
  ClrHeader,
  ClrNavLevel,
  ClrVerticalNav,
  ClrVerticalNavGroup,
  ClrVerticalNavGroupChildren,
  ClrVerticalNavIcon,
  ClrVerticalNavLink,
} from '@clr/angular';

import { VerticalNavCases } from './vertical-nav-cases';

@Component({ templateUrl: './vertical-nav.component.html', providers: [VerticalNavCases] })
export class KSVerticalNav {
  /**
   * @description
   * These exist so that the exported API from Clarity is tested when ks-app is compiled with --prod.
   * This is a catchall for navigation entities.
   */
  private aClrHeader: ClrHeader;
  private aClrNavLevel: ClrNavLevel;
  private aClrVerticalNav: ClrVerticalNav;
  private aClrVerticalNavGroup: ClrVerticalNavGroup;
  private aClrVerticalNavGroupChildren: ClrVerticalNavGroupChildren;
  private aClrVerticalNavIcon: ClrVerticalNavIcon;
  private aClrVerticalNavLink: ClrVerticalNavLink;

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
