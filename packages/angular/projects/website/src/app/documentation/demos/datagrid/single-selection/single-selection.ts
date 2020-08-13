/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { Inventory } from '../inventory/inventory';
import { User } from '../inventory/user';

const EXAMPLE = `
<clr-datagrid [(clrDgSingleSelected)]="selectedUser">
    <-- ... -->
    <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
        <-- ... -->
    </clr-dg-row>
   <-- ... -->
</clr-datagrid>

Selected user: <span class="username" *ngIf="selectedUser">{{selectedUser.name}}</span>
`;

const ROW_SELECTION_EXAMPLE = `
<clr-datagrid [(clrDgSingleSelected)]="selectedUser" [clrDgRowSelection]="true">
    <-- ... -->
    <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
        <-- ... -->
    </clr-dg-row>
   <-- ... -->
</clr-datagrid>

Selected user: <span class="username" *ngIf="selectedUser">{{selectedUser.name}}</span>
`;

const SELECTION_CHANGE_EVENT_EXAMPLE = `
<clr-datagrid [clrDgSingleSelected]="selected"
              (clrDgSingleSelectedChange)="selectionChanged($event)">
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
  moduleId: module.id,
  selector: 'clr-datagrid-selection-single-demo',
  providers: [Inventory],
  templateUrl: 'single-selection.html',
  styleUrls: ['../datagrid.demo.scss'],
})
export class DatagridSelectionSingleDemo {
  example = EXAMPLE;
  rowSelectionExample = ROW_SELECTION_EXAMPLE;
  selectionChangeEventExample = SELECTION_CHANGE_EVENT_EXAMPLE;
  unselectableRow = UNSELECTABLE_ROW;
  users: User[];
  singleSelected: User;
  rowSelected: User;
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
      if ([2, 3, 5, 10].includes(index)) {
        user.locked = true;
      }
      return user;
    });
  }
}
