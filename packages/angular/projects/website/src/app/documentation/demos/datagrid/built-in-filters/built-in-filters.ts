/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { Inventory } from '../inventory/inventory';
import { User } from '../inventory/user';
import { PokemonFilter } from '../utils/pokemon-filter';
import { WinsFilter } from '../utils/wins-filter';
import { EXAMPLES } from './examples';

@Component({
  selector: 'clr-datagrid-built-in-filters-demo',
  providers: [Inventory],
  templateUrl: 'built-in-filters.html',
  styleUrls: ['../datagrid.demo.scss'],
})
export class DatagridBuiltInFiltersDemo {
  examples = EXAMPLES;
  users: User[];

  pokemonFilter = new PokemonFilter();
  winsFilter = new WinsFilter();
  myFilterValue = 'A';

  constructor(inventory: Inventory) {
    inventory.size = 10;
    inventory.reset();
    this.users = inventory.all;
  }
}
