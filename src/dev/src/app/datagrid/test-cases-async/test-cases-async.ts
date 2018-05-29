/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { Inventory } from '../inventory/inventory';
import { User } from '../inventory/user';

@Component({
  selector: 'clr-datagrid-test-cases-async-demo',
  providers: [Inventory],
  templateUrl: 'test-cases-async.html',
  styleUrls: ['../datagrid.demo.scss'],
})
export class DatagridTestCasesAsyncDemo {
  users: User[];
  users1: User[];

  loading: boolean = false;

  toggle() {
    this.loading = !this.loading;
  }

  constructor(inventory: Inventory) {
    inventory.size = 15;
    inventory.reset();

    setTimeout(() => {
      this.users = inventory.all;
    }, 1000);

    this.users1 = inventory.all.slice(0, 5);

    setTimeout(() => {
      this.users1 = this.users1.concat(inventory.all.slice(5));
    }, 3000);
  }
}
