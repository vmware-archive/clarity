/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-tree-lazy-loading-node-demo',
  styleUrls: ['../tree-view.demo.scss'],
  templateUrl: './lazy-loading-tree-node.html',
})
export class LazyLoadingTreeNodeDemo {
  slowLoad = true;

  selected: boolean = true;

  parentSelected: boolean = false;
}
