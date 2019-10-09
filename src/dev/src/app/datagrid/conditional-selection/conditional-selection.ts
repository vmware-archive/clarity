/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

import { Inventory } from '../inventory/inventory';
import { User } from '../inventory/user';

@Component({
  selector: 'clr-datagrid-conditional-selection-demo',
  providers: [Inventory],
  templateUrl: './conditional-selection.html',
  styleUrls: ['../datagrid.demo.scss'],
})
export class DatagridConditionalSelectionsDemo {
  users: User[];
  usersMulti: User[] = [];
  selected: User;
  selectedRows: User[] = [];
  pagedUsers: User[] = [];

  constructor(inventory: Inventory) {
    inventory.size = 10;
    inventory.reset();

    this.users = inventory.all;
    inventory.reset();

    this.usersMulti = inventory.all;

    inventory.size = 30;
    inventory.reset();
    this.pagedUsers = inventory.all;
  }

  // Single

  singleSelectionUnlockRows() {
    this.users = this.users.map(user => {
      delete user.locked;
      return user;
    });
  }

  singleSelectionLockRows() {
    this.users = this.users.map((user, index) => {
      // lock few rows
      if ([2, 3, 5, 9].includes(index)) {
        user.locked = true;
      }
      return user;
    });
  }

  // Multi

  multiSelectionUnlockRows() {
    this.usersMulti = this.usersMulti.map(user => {
      delete user.locked;
      return user;
    });
  }

  multiSelectionLockRows() {
    this.usersMulti = this.usersMulti.map((user, index) => {
      // lock few rows
      if ([2, 3, 5, 7, 9].includes(index)) {
        user.locked = true;
      }
      return user;
    });
  }

  // Paged Multi Select
  pagedMultiSelectionUnlockRows() {
    this.pagedUsers = this.pagedUsers.map(user => {
      delete user.locked;
      return user;
    });
  }

  pagedMultiSelectionLockRows() {
    this.pagedUsers = this.pagedUsers.map((user, index) => {
      // lock few rows
      if ([2, 3, 5, 7, 9].includes(index)) {
        user.locked = true;
      }
      return user;
    });
  }
}
