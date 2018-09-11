/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { Inventory } from '../datagrid/inventory/inventory';
import { User } from '../datagrid/inventory/user';

@Component({
  selector: 'basic-draggable-demo',
  providers: [Inventory],
  styleUrls: ['./drag-and-drop.demo.scss'],
  templateUrl: './basic-draggable.demo.html',
})
export class BasicDraggableDemo {
  users: User[];

  constructor(inventory: Inventory) {
    inventory.size = 10;
    inventory.reset();
    this.users = inventory.all;
  }
}
