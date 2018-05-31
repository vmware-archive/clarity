/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
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
  showId = true;
  showDate = true;
  conditionalSignpost: boolean = true;

  constructor(inventory: Inventory) {
    inventory.size = 10;
    inventory.reset();
    this.users = inventory.all;
  }

  toggleId() {
    this.showId = !this.showId;
  }

  toggleDate() {
    this.showDate = !this.showDate;
  }
}
