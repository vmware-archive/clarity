/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { Inventory } from '../inventory/inventory';
import { User } from '../inventory/user';

const MAIN_EXAMPLE = `
<clr-datagrid [(clrDgSelected)]="selected">
    <-- ... -->
    <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
        <-- ... -->
    </clr-dg-row>
   <-- ... -->
</clr-datagrid>

Selected users: <span *ngFor="let user of selected">{{user.name}}</span>
`;

const SINGLE_ROW_EXAMPLE = `
<clr-dg-row *clrDgItems="let item of items" [clrDgItem]="item" [(clrDgSelected)]="item.selected">
    <-- ... -->
</clr-dg-row>
`;

const ROW_SELECTION_EXAMPLE = `
<clr-datagrid [(clrDgSelected)]="rowSelected" [clrDgRowSelection]="true">
    <clr-dg-column>User ID</clr-dg-column>
    <-- ... -->
    <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
        <clr-dg-cell>{{user.id}}</clr-dg-cell>
        <-- ... -->
    </clr-dg-row>
    <clr-dg-footer>{{users.length}} users</clr-dg-footer>
</clr-datagrid>
`;

const SELECTION_CHANGE_EVENT_EXAMPLE = `
<clr-datagrid [clrDgSelected]="selected"
              (clrDgSelectedChange)="selectionChanged($event)">
    <-- ... -->
</clr-datagrid>
`;
const UNSELECTABLE_ROW = `
<clr-dg-row [clrDgSelectable]="!user.locked" *clrDgItems="let user of users" [clrDgItem]="user">
  <clr-dg-cell>{{user.id}}</clr-dg-cell>
    <-- ... -->
  </clr-dg-row>
</clr-dg-row>
`;

@Component({
  selector: 'clr-datagrid-selection-demo',
  providers: [Inventory],
  templateUrl: 'selection.html',
  styleUrls: ['../datagrid.demo.scss'],
})
export class DatagridSelectionDemo {
  mainExample = MAIN_EXAMPLE;
  rowSelectionExample = ROW_SELECTION_EXAMPLE;
  singleRowExample = SINGLE_ROW_EXAMPLE;
  selectionChangeEventExample = SELECTION_CHANGE_EVENT_EXAMPLE;
  unselectableRow = UNSELECTABLE_ROW;
  users: User[];
  selected: User[] = [];
  rowSelected: User[] = [];
  lockedUsers: User[] = [];

  constructor(inventory: Inventory) {
    inventory.size = 10;
    inventory.reset();
    this.users = inventory.all;

    this.lockedUsers = [...inventory.all];
  }

  unlockRows() {
    this.lockedUsers = this.lockedUsers.map(row => {
      delete row.locked;
      return row;
    });
  }

  lockRows() {
    this.lockedUsers = this.lockedUsers.map((user, index) => {
      // lock few rows
      if ([2, 3, 5, 9].includes(index)) {
        user.locked = true;
      }
      return user;
    });
  }
}
