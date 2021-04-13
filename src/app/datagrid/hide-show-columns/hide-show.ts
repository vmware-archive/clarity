/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

import { Inventory } from '../inventory/inventory';
import { User } from '../inventory/user';

@Component({
  selector: 'clr-datagrid-hide-show-demo',
  providers: [Inventory],
  templateUrl: './hide-show.html',
  styleUrls: ['../datagrid.demo.scss'],
})
export class DatagridHideShowDemo {
  users: User[];
  deleteIdColumn = false;
  hideNameColumn = false;
  shortFormat = true;
  conditionalSignpost = true;
  currentPageSize = 1;

  constructor(inventory: Inventory) {
    inventory.size = 10;
    inventory.reset();
    this.users = inventory.all;
  }

  get idControlMessage() {
    return this.deleteIdColumn ? 'Add User Id Column' : 'Delete User Id Column';
  }

  get nameControlMessage() {
    return this.hideNameColumn ? 'Show Name Column' : 'Hide Name Column';
  }

  toggleId() {
    this.deleteIdColumn = !this.deleteIdColumn;
  }

  toggleName() {
    this.hideNameColumn = !this.hideNameColumn;
  }
}
