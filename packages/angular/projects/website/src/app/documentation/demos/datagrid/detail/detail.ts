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

    <clr-dg-detail *clrIfDetail="let detail">
        <clr-dg-detail-header>{{detail.name}}</clr-dg-detail-header>
    </clr-dg-detail>
   <-- ... -->
</clr-datagrid>

Selected users: <span *ngFor="let user of selected">{{user.name}}</span>
`;

const DETAIL_PANE_EXAMPLE = `
<clr-dg-detail *clrIfDetail="let detail">
  <clr-dg-detail-header>{{detail.name}}</clr-dg-detail-header>
  <clr-dg-detail-body>
    <-- ... -->
  </clr-dg-detail-body>
</clr-dg-detail>
`;

const CHANGE_EVENT_EXAMPLE = `
<ng-template clrIfDetail let-detail (clrIfDetailChange)="onDetailOpen($event)">
  <clr-dg-detail>
    <clr-dg-detail-header>{{detail.name}}</clr-dg-detail-header>
    <clr-dg-detail-body>
      <-- ... -->
    </clr-dg-detail-body>
  </clr-dg-detail>
</ng-template>
`;

const TWO_WAY_BINDING_EXAMPLE = `
<ng-template [(clrIfDetail)]="detailState" let-detail>
  <clr-dg-detail>
    <clr-dg-detail-header>{{detail.name}}</clr-dg-detail-header>
    <clr-dg-detail-body>
      <!-- ... -->
    </clr-dg-detail-body>
  </clr-dg-detail>
</ng-template>
`;

@Component({
  providers: [Inventory],
  templateUrl: 'detail.html',
  styleUrls: ['../datagrid.demo.scss'],
})
export class DatagridDetailPaneDemo {
  mainExample = MAIN_EXAMPLE;
  detailPaneExample = DETAIL_PANE_EXAMPLE;
  changeEventExample = CHANGE_EVENT_EXAMPLE;
  twoWayBindingExample = TWO_WAY_BINDING_EXAMPLE;

  users: User[];
  selected: User[] = [];
  state: User;

  constructor(inventory: Inventory) {
    inventory.size = 103;
    inventory.reset();
    this.users = inventory.all;
  }
}
