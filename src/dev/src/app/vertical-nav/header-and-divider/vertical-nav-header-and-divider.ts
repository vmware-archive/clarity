/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { VerticalNavCases } from '../vertical-nav-cases';

@Component({
  selector: 'clr-vertical-nav-header-and-divider-demo',
  templateUrl: './vertical-nav-header-and-divider.demo.html',
  styleUrls: ['../vertical-nav.demo.scss'],
})
export class VerticalNavHeaderAndDividerDemo {
  case: any;

  constructor(public verticalNavCases: VerticalNavCases) {
    this.case = this.verticalNavCases.basicMenu;
  }
}
