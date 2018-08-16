/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { ClrTreeNode } from '@clr/angular';

@Component({ templateUrl: './tree-view.component.html' })
export class KSTreeView {
  /**
   * @description
   * These exist so that the exported API from Clarity is tested when ks-app is compiled with --prod.
   */
  private aClrTreeNode: ClrTreeNode;
  // END Clarity Stackview Entities
  selected1 = false;
  selected1Child = true;
}
