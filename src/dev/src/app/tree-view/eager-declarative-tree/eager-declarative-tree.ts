/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
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

  isNodeA1Disabled: boolean = false;
  isNodeA23Disabled: boolean = false;

  toggleDisableStateOfNodeA1() {
    this.isNodeA1Disabled = !this.isNodeA1Disabled;
  }

  toggleDisableStateOfNodeA23() {
    this.isNodeA23Disabled = !this.isNodeA23Disabled;
  }
}
