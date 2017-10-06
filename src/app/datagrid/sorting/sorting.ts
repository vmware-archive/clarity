/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

import {SortOrder} from "../../../clarity-angular";
import {Inventory} from "../inventory/inventory";
import {User} from "../inventory/user";
import {PokemonComparator} from "../utils/pokemon-comparator";
import {EXAMPLES} from "./examples";

@Component({
    selector: "clr-datagrid-sorting-demo",
    providers: [Inventory],
    templateUrl: "./sorting.html",
    styleUrls: ["../datagrid.demo.scss"]
})
export class DatagridSortingDemo {
    examples = EXAMPLES;
    users: User[];
    usersDeprecated: User[];
    sortOrder: SortOrder = SortOrder.Unsorted;
    sorted: boolean = false;

    pokemonComparator = new PokemonComparator();

    constructor(private inventory: Inventory) {
        inventory.size = 10;
        inventory.reset();
        this.users = inventory.all;
        this.usersDeprecated = inventory.all;
    }
}
