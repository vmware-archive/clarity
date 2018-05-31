/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { Inventory } from '../inventory/inventory';
import { User } from '../inventory/user';

@Component({
  selector: 'clr-datagrid-binding-properties-demo',
  providers: [Inventory],
  templateUrl: 'expandable-rows.html',
  styleUrls: ['../datagrid.demo.scss'],
})
export class DatagridExpandableRowsDemo {
  constructor(inventory: Inventory) {
    inventory.size = 10;
    inventory.reset();
    this.users = inventory.all;
  }

  users: User[];
  selected: User[];
  detail = 'columns';
  replace = false;
  fixedHeight = false;
  slowLoad = false;
  date = false;

  get selectable() {
    return !!this.selected;
  }
  set selectable(value: boolean) {
    if (value) {
      this.selected = [];
    } else {
      delete this.selected;
    }
  }
}
