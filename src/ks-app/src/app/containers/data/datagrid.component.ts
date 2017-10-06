/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component} from "@angular/core";
import {SortOrder} from "clarity-angular";

import {PokemonComparator} from "./pokemon-comparator";
import {DatagridKitchenSinkData} from "./pokemon-data";
import {PokemonFilter} from "./pokemon-filter";
import {User} from "./user";

@Component({templateUrl: "./datagrid.component.html", styleUrls: ["./datagrid.component.scss"]})
export class KSDatagrid {
    currentPageSize: number = 10;
    detail: string = "default";
    users: User[];
    nameFilter = "d";
    nonPaginatedUsers: User[];
    pokemonComparator = new PokemonComparator();
    pokemonFilter = new PokemonFilter();
    replace: boolean = false;
    selected: User[] = [];
    showDate = true;
    showId = true;
    singleSelected: User;
    sortOrder: SortOrder = SortOrder.Unsorted;
    toAdd: User[] = [];
    toDelete: User[] = [];
    toEdit: User;
    variableLengthUsers: User[];

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
