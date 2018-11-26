/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import '@clr/icons/shapes/essential-shapes';

import { Component } from '@angular/core';

import { ClrDatagridSortOrder } from '@clr/angular';
import { User } from '../inventory/user';
import { DatagridKitchenSinkData } from '../kitchen-sink/kitchen-sink-data';
import { PokemonComparator } from '../utils/pokemon-comparator';
import { PokemonFilter } from '../utils/pokemon-filter';

@Component({
  selector: 'clr-datagrid-compact-demo',
  templateUrl: './compact.html',
  styleUrls: ['../datagrid.demo.scss'],
})
export class DatagridCompactDemo {
  nonPaginatedUsers: User[];
  users: User[];
  sortOrder: ClrDatagridSortOrder = ClrDatagridSortOrder.UNSORTED;
  pokemonComparator = new PokemonComparator();
  pokemonFilter = new PokemonFilter();
  singleSelected: User;
  _selected: User[] = [];
  selected2: User[];
  toAdd: User[] = [];
  toDelete: User[] = [];
  toEdit: User;
  detail = 'default';
  replace = false;
  fixedHeight = false;
  slowLoad = false;
  showDate = true;
  showId = true;

  get selectable() {
    return !!this.selected2;
  }

  set selectable(value: boolean) {
    if (value) {
      this.selected2 = [];
    } else {
      delete this.selected2;
    }
  }

  constructor() {
    this.nonPaginatedUsers = DatagridKitchenSinkData.users.slice(0, 5);
    this.users = DatagridKitchenSinkData.users;
  }

  get selected() {
    return this._selected;
  }

  set selected(selection: User[]) {
    this._selected = selection;
    this.cleanUp();
  }

  cleanUp(): void {
    this.toAdd = [];
    this.toDelete = [];
    this.toEdit = null;
  }

  onDelete(user: User) {
    this.cleanUp();
    if (user) {
      this.toDelete = [user];
    } else {
      this.toDelete = this.selected.slice();
    }
  }

  onEdit(user: User) {
    this.cleanUp();
    if (user) {
      this.toEdit = user;
    } else {
      this.toEdit = this.selected[0];
    }
  }
}
