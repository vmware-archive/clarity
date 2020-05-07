/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

import { Inventory } from '../inventory/inventory';
import { User } from '../inventory/user';

@Component({
  selector: 'clr-datagrid-test-cases-demo',
  providers: [Inventory],
  templateUrl: 'test-cases.html',
  styleUrls: ['../datagrid.demo.scss'],
})
export class DatagridTestCasesDemo {
  selectedUser: User;
  users: User[];
  oneUser: User[];
  zeroUsers: User[] = [];
  pageSize = 7;
  loading = false;

  constructor(inventory: Inventory) {
    inventory.size = 15;
    inventory.reset();
    this.users = inventory.all;
    this.oneUser = [this.users[0]];
  }

  updatePageSize() {
    this.pageSize = Math.floor(Math.random() * 10 + 3);
  }

  toggle() {
    this.loading = !this.loading;
  }
}
