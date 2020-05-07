/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { Inventory } from '../inventory/inventory';
import { User } from '../inventory/user';

@Component({
  selector: 'clr-datagrid-filtering-demo',
  providers: [Inventory],
  templateUrl: './filtering.html',
  styleUrls: ['../datagrid.demo.scss'],
})
export class DatagridFilteringDemo {
  users: User[];

  constructor(inventory: Inventory) {
    inventory.size = 10;
    inventory.reset();
    this.users = inventory.all;
  }

  dgFilterChange($event: boolean) {
    console.log('clrDgFilterOpenChange is fired', $event);
  }
}
