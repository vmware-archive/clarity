/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { Inventory } from '../inventory/inventory';
import { User } from '../inventory/user';

@Component({
  selector: 'clr-datagrid-preserve-selection-demo',
  providers: [Inventory],
  templateUrl: 'preserve-selection.html',
  styleUrls: ['../datagrid.demo.scss'],
})
export class DatagridPreserveSelectionDemo {
  users: User[];
  _selected: User[] = [];
  currentPageSize: number = 10;
  nameFilter = '';

  get selected() {
    return this._selected;
  }

  set selected(selection: User[]) {
    this._selected = selection;
  }

  constructor(inventory: Inventory) {
    inventory.size = 100;
    inventory.reset();
    this.users = inventory.all;
  }

  backUpUsers: User[] = [];

  updateInventorySize(): void {
    if (this.users.length === 100) {
      this.backUpUsers = this.users.slice();
      this.users = this.backUpUsers.slice(0, 80);
    } else {
      this.users = this.backUpUsers;
      this.backUpUsers = [];
    }
  }

  trackByFn(index: number, item: any) {
    return item.id;
  }
}
