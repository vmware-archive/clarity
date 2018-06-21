/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { Inventory } from '../inventory/inventory';
import { User } from '../inventory/user';

@Component({
  selector: 'clr-datagrid-conditional-pagination-demo',
  providers: [Inventory],
  templateUrl: 'pagination-conditional.html',
  styleUrls: ['../datagrid.demo.scss'],
})
export class DatagridConditionalPaginationDemo {
  users: User[];
  paginationEnabled: boolean = false;

  constructor(inventory: Inventory) {
    inventory.size = 103;
    inventory.reset();
    this.users = inventory.all;
  }

  toggle(): void {
    this.paginationEnabled = !this.paginationEnabled;
  }
}
