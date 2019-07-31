/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { Inventory } from '../inventory/inventory';
import { User } from '../inventory/user';
import { EXAMPLES } from './examples';

import { ClrDatagridStringFilterInterface } from '@clr/angular';

class DateFilter implements ClrDatagridStringFilterInterface<User> {
  accepts(user: User, search: string): boolean {
    const date = user.creation.toDateString();
    return date === search || date.toLowerCase().indexOf(search) >= 0;
  }
}

@Component({
  selector: 'clr-datagrid-expandable-rows-demo',
  providers: [Inventory],
  templateUrl: 'expandable-rows.html',
  styleUrls: ['../datagrid.demo.scss'],
})
export class DatagridExpandableRowsDemo {
  examples = EXAMPLES;
  users: User[];

  detail = 'default';
  replace = false;
  slowLoad = false;

  dateFilter = new DateFilter();

  constructor(inventory: Inventory) {
    inventory.size = 10;
    inventory.reset();
    this.users = inventory.all;
  }
}
