/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-tree-node-10k-demo',
  styleUrls: ['../tree-view.demo.scss'],
  templateUrl: './tree-10k.demo.html',
})
export class TreeNode10kDemo {
  nodes: string[] = Array(10).fill('Tree Node');

  selected: boolean = false;
}
