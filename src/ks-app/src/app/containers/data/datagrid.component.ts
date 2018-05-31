/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { AfterViewInit, Component } from '@angular/core';
import {
  ClrDatagrid,
  ClrDatagridActionBar,
  ClrDatagridActionOverflow,
  ClrDatagridCell,
  ClrDatagridColumn,
  ClrDatagridColumnToggle,
  ClrDatagridComparatorInterface,
  ClrDatagridFilter,
  ClrDatagridFilterInterface,
  ClrDatagridFooter,
  ClrDatagridHideableColumn,
  ClrDatagridItems,
  ClrDatagridPagination,
  ClrDatagridPlaceholder,
  ClrDatagridRow,
  ClrDatagridRowDetail,
  ClrDatagridStateInterface,
  ClrDatagridStringFilterInterface,
  Comparator,
  Datagrid,
  DatagridActionBar,
  DatagridActionOverflow,
  DatagridCell,
  DatagridColumn,
  DatagridColumnToggle,
  DatagridFilter,
  DatagridFooter,
  DatagridHideableColumnDirective,
  DatagridItems,
  DatagridPagination,
  DatagridPlaceholder,
  DatagridRow,
  DatagridRowDetail,
  Filter,
  SortOrder,
  State,
  StringFilter,
} from '@clr/angular';

import { PokemonComparator } from './pokemon-comparator';
import { DatagridKitchenSinkData } from './pokemon-data';
import { PokemonFilter } from './pokemon-filter';
import { User } from './user';

@Component({ templateUrl: './datagrid.component.html', styleUrls: ['./datagrid.component.scss'] })
export class KSDatagrid {
  currentPageSize: number = 10;
  detail: string = 'default';
  users: User[];
  nameFilter = 'd';
  nonPaginatedUsers: User[];
  pokemonComparator = new PokemonComparator();
  pokemonFilter = new PokemonFilter();
  replace: boolean = false;
  isCompact: boolean = false;
  selected: User[] = [];
  showDate = true;
  showId = true;
  singleSelected: User;
  sortOrder: SortOrder = SortOrder.Unsorted;
  toAdd: User[] = [];
  toDelete: User[] = [];
  toEdit: User;
  variableLengthUsers: User[];

  /**
   * @description
   * These exist so that the exported API from Clarity is tested when ks-app is compiled with --prod.
   */
  private aDatagrid: Datagrid;
  private aClrDatagrid: ClrDatagrid;
  private aDatagridActionBar: DatagridActionBar;
  private aClrDatagridActionBar: ClrDatagridActionBar;
  private aDatagridActionOverflow: DatagridActionOverflow;
  private aClrDatagridActionOverflow: ClrDatagridActionOverflow;
  private aDatagridColumn: DatagridColumn;
  private aClrDatagridColumn: ClrDatagridColumn;
  private aDatagridColumnToggle: DatagridColumnToggle;
  private aClrDatagridColumnToggle: ClrDatagridColumnToggle;
  private aDatagridHideableColumnDirective: DatagridHideableColumnDirective;
  private aClrDatagridHideableColumnDirective: ClrDatagridHideableColumn;
  private aDatagridFilter: DatagridFilter;
  private aClrDatagridFilter: ClrDatagridFilter;
  private aDatagridItems: DatagridItems;
  private aClrDatagridItems: ClrDatagridItems;
  private aDatagridRow: DatagridRow;
  private aClrDatagridRow: ClrDatagridRow;
  private aDatagridRowDetail: DatagridRowDetail;
  private aClrDatagridRowDetail: ClrDatagridRowDetail;
  private aDatagridCell: DatagridCell;
  private aClrDatagridCell: ClrDatagridCell;
  private aDatagridFooter: DatagridFooter;
  private aClrDatagridFooter: ClrDatagridFooter;
  private aDatagridPagination: DatagridPagination;
  private aClrDatagridPagination: ClrDatagridPagination;
  private aDatagridPlaceholder: DatagridPlaceholder;
  private aClrDatagridPlaceholder: ClrDatagridPlaceholder;
  private aComparator: Comparator<string>;
  private aClrDatagridComparatorInterface: ClrDatagridComparatorInterface<string>;
  private aFilter: Filter<string>;
  private aClrDatagridFilterInterface: ClrDatagridFilterInterface<string>;
  private aState: State;
  private aClrDatagridStateInterface: ClrDatagridStateInterface;
  private aStringFilter: StringFilter<string>;
  private aClrDatagridStringFilterInterface: ClrDatagridStringFilterInterface<string>;
  // END Clarity Data Entities

  constructor() {
    this.nonPaginatedUsers = DatagridKitchenSinkData.users.slice(0, 5);
    this.variableLengthUsers = DatagridKitchenSinkData.users.slice(0, 5);
    this.users = DatagridKitchenSinkData.users;
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

  onAdd() {
    this.cleanUp();
    this.toAdd = this.selected.slice();
  }

  cleanUp(): void {
    this.toAdd = [];
    this.toDelete = [];
    this.toEdit = null;
  }
}
