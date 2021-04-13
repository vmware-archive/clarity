/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { ClrDatagridStateInterface } from '@clr/angular';
import { FetchResult, Inventory } from '../inventory/inventory';
import { User } from '../inventory/user';
import { EXAMPLES } from './examples';

@Component({
  selector: 'clr-datagrid-server-driven-demo',
  providers: [Inventory],
  templateUrl: 'server-driven.html',
  styleUrls: ['../datagrid.demo.scss'],
})
export class DatagridServerDrivenDemo {
  examples = EXAMPLES;
  users: User[];
  total: number;
  loading: boolean = true;

  constructor(private inventory: Inventory) {
    inventory.size = 103;
    this.inventory.latency = 500;
    inventory.reset();
  }

  refresh(state: ClrDatagridStateInterface) {
    this.loading = true;
    const filters: { [prop: string]: any[] } = {};
    if (state.filters) {
      for (const filter of state.filters) {
        const { property, value } = <{ property: string; value: string }>filter;
        filters[property] = [value];
      }
    }
    if (!state.page) {
      state.page = {
        from: 0,
        to: 9,
        size: 10,
        current: 1,
      };
    }
    this.inventory
      .filter(filters)
      .sort(<{ by: string; reverse: boolean }>state.sort)
      .fetch(state.page.size * (state.page.current - 1), state.page.size)
      .then((result: FetchResult) => {
        this.users = result.users;
        this.total = result.length;
        this.loading = false;
      });
  }
}
