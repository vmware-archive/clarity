/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-eager-declarative-tree-demo',
  styleUrls: ['../tree-view.demo.scss'],
  templateUrl: './eager-declarative-tree.html',
})
export class EagerDeclarativeTreeDemo {
  expanded1 = true;
  expanded2 = true;
  isNodeAdisabled: boolean = true;

  isNodeA1disabled: boolean = false;
  isNodeA2disabled: boolean = false;
  isNodeA3disabled: boolean = false;

  isNodeA23disabled: boolean = false;

  toggleNode(name) {
    if (name === 'A-1') {
      this.isNodeA1disabled = !this.isNodeA1disabled;
    } else if (name === 'A-2') {
      this.isNodeA2disabled = !this.isNodeA2disabled;
    } else if (name === 'A-3') {
      this.isNodeA3disabled = !this.isNodeA3disabled;
    } else if (name === 'A-2.3') {
      this.isNodeA23disabled = !this.isNodeA23disabled;
    } else if (name === 'A') {
      this.isNodeAdisabled = !this.isNodeAdisabled;
    }
  }
}
