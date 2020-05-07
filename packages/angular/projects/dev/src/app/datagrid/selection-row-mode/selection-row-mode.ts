/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { Inventory } from '../inventory/inventory';
import { User } from '../inventory/user';

@Component({
  selector: 'clr-datagrid-selection-row-mode-demo',
  providers: [Inventory],
  templateUrl: 'selection-row-mode.html',
  styleUrls: ['../datagrid.demo.scss'],
})
export class DatagridSelectionRowModeDemo {
  users: User[];
  singleSelected: User;
  multiSelected: User[] = [];

  constructor(inventory: Inventory) {
    inventory.size = 10;
    inventory.reset();
    this.users = inventory.all;
  }
}
