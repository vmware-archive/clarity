/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-indeterminate-node-demo',
  styleUrls: ['../tree-view.demo.scss'],
  templateUrl: './indeterminate-node.html',
})
export class IndeterminateNodeDemo {
  selected1: boolean = true;
  selected2: boolean = false;
  selected3: boolean = false;
  selected4: boolean = true;
  selected5: boolean = true;
  selected6: boolean = true;
  selected7: boolean = true;
  selected8: boolean = true;
  selected9: boolean = true;
  selected10: boolean = true;

  indeterminate1: boolean = true;
  indeterminate2: boolean = true;
  indeterminate3: boolean = true;
  indeterminate4: boolean = true;

  iSelectedNode: boolean = false;
}
