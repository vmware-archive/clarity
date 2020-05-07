/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { Inventory } from '../inventory/inventory';
import { User } from '../inventory/user';

@Component({
  providers: [Inventory],
  templateUrl: 'detail.html',
  styleUrls: ['../datagrid.demo.scss'],
})
export class DatagridDetailDemo {
  users: User[];
  selection: User[] = [];
  singleSelection: User;
  state: any = null;
  stateEvent: any = null;

  constructor(inventory: Inventory) {
    inventory.size = 103;
    inventory.reset();
    this.users = inventory.all;
  }
}
