/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { Inventory } from '../inventory/inventory';
import { User } from '../inventory/user';

@Component({
  selector: 'clr-datagrid-scrolling-demo',
  providers: [Inventory],
  templateUrl: 'scrolling.html',
  styleUrls: ['../datagrid.demo.scss'],
})
export class DatagridScrollingDemo {
  manyUsers: User[];
  users: User[];

  constructor(inventory: Inventory) {
    inventory.size = 30;
    inventory.reset();
    this.manyUsers = inventory.all;
    this.users = inventory.all.slice(0, 10);
  }
}
