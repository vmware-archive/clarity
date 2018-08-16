/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { ClrDatagridStateInterface } from '@clr/angular';
import { FetchResult, Inventory } from '../inventory/inventory';
import { User } from '../inventory/user';

@Component({
  selector: 'clr-datagrid-selection-single-demo',
  providers: [Inventory],
  templateUrl: 'selection-single.html',
  styleUrls: ['../datagrid.demo.scss'],
})
export class DatagridSelectionSingleDemo {
  users: User[];
  singleSelected: User;

  trackByIndexUsers: User[];
  trackByIndexSingleSelected: User;

  trackByIdUsers: User[];
  trackByIdSingleSelected: User;

  trackByIdServerUsers: User[];
  trackByIdServerSingleSelected: User;

  loading: boolean = true;
  total: number;

  constructor(private inventory: Inventory) {
    this.inventory.size = 100;
    this.inventory.latency = 500;
    this.inventory.reset();
    this.users = this.trackByIndexUsers = this.trackByIdUsers = this.inventory.all;
  }

  refresh(state: ClrDatagridStateInterface) {
    // this.loading = true;
    const filters: { [prop: string]: any[] } = {};
    if (state.filters) {
      for (const filter of state.filters) {
        const { property, value } = <{ property: string; value: string }>filter;
        filters[property] = [value];
      }
    }
    this.inventory
      .filter(filters)
      .sort(<{ by: string; reverse: boolean }>state.sort)
      .fetch(state.page.from, state.page.size)
      .then((result: FetchResult) => {
        setTimeout(() => {
          this.trackByIdServerUsers = result.users;
          this.total = result.length;
          this.loading = false;
        });
      });
  }

  trackByIndex(index: number, item: User) {
    return index;
  }

  trackById(index: number, item: User) {
    return item.id;
  }
}
