/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { Inventory } from '../inventory/inventory';
import { User } from '../inventory/user';

@Component({
  selector: 'clr-datagrid-pagination-demo',
  providers: [Inventory],
  templateUrl: 'pagination.html',
  styleUrls: ['../datagrid.demo.scss'],
})
export class DatagridPaginationDemo {
  users: User[];
  expanded: false;

  constructor(inventory: Inventory) {
    inventory.size = 103;
    inventory.reset();
    this.users = inventory.all;
  }
}
