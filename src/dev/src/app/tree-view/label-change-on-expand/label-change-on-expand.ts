/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-tree-node-label-change-expand-demo',
  styleUrls: ['../tree-view.demo.scss'],
  templateUrl: './label-change-on-expand.html',
})
export class TreeNodeLabelChangeOnExpandDemo {
  private _expanded: boolean = false;

  get expanded(): boolean {
    return this._expanded;
  }

  set expanded(value: boolean) {
    this._expanded = value;
  }

  selected: boolean = false;
}
