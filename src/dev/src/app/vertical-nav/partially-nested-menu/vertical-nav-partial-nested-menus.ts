/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { VerticalNavCases } from '../vertical-nav-cases';

@Component({
  selector: 'clr-vertical-nav-partial-nested-menus-demo',
  templateUrl: './vertical-nav-partial-nested-menus.demo.html',
  styleUrls: ['../vertical-nav.demo.scss'],
})
export class VerticalNavPartiallyNestedMenusDemo {
  case: any;

  constructor(public verticalNavCases: VerticalNavCases) {
    this.case = this.verticalNavCases.partiallyNestedMenu;
  }

  private _collapse: boolean = false;

  get collapse(): boolean {
    return this._collapse;
  }

  set collapse(value: boolean) {
    this._collapse = value;
  }
}
