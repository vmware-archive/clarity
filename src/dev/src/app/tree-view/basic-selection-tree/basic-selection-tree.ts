/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-basic-selection-tree-demo',
  styleUrls: ['../tree-view.demo.scss'],
  templateUrl: './basic-selection-tree.html',
})
export class BasicSelectionTreeDemo {
  selected1: boolean = false;
  selected1Child: boolean = false;
  selected2: boolean = false;
}
