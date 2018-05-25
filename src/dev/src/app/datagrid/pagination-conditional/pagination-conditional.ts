/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { Inventory } from '../inventory/inventory';
import { User } from '../inventory/user';

const EXAMPLE = `
<-- Inside the full datagrid declaration -->
<clr-dg-footer>
    <ng-container *ngIf="!paginationEnabled">
        {{users.length}} users
    </ng-container>
    <clr-dg-pagination #pagination [clrDgPageSize]="5" *ngIf="paginationEnabled">
        {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}} of {{pagination.totalItems}} users
    </clr-dg-pagination>
</clr-dg-footer>
`;

@Component({
  selector: 'clr-datagrid-conditional-pagination-demo',
  providers: [Inventory],
  templateUrl: 'pagination-conditional.html',
  styleUrls: ['../datagrid.demo.scss'],
})
export class DatagridConditionalPaginationDemo {
  example = EXAMPLE;
  users: User[];
  paginationEnabled: boolean = false;

  constructor(inventory: Inventory) {
    inventory.size = 103;
    inventory.reset();
    this.users = inventory.all;
  }

  toggle(): void {
    this.paginationEnabled = !this.paginationEnabled;
  }
}
