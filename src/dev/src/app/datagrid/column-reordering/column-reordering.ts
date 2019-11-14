/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { Inventory } from '../inventory/inventory';
import { User } from '../inventory/user';

@Component({
  selector: 'clr-datagrid-column-reordering-demo',
  providers: [Inventory],
  templateUrl: './column-reordering.html',
  styleUrls: ['../datagrid.demo.scss'],
})
export class DatagridColumnReorderingDemo {
  usersSource: User[];
  users: User[];
  deleteIdColumn = false;
  deleteNameColumn = false;
  conditionalSignpost = true;
  currentPageSize = 10;

  selectedUsers = [];

  constructor(inventory: Inventory) {
    inventory.size = 1000;
    inventory.reset();
    this.usersSource = inventory.all;
    this.users = this.usersSource.splice(-1);
  }

  userId = 2;
  name = 1;
  date = 0;
  pokemon = 4;
  color = 3;

  get idControlMessage() {
    return this.deleteIdColumn ? 'Add User Id Column' : 'Delete User Id Column';
  }

  addItem() {
    if (this.usersSource.length) {
      this.users.push(this.usersSource.pop());
    }
  }
}
