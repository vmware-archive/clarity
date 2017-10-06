/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

import {Inventory} from "../inventory/inventory";
import {User} from "../inventory/user";
import {PokemonFilter} from "../utils/pokemon-filter";
import {EXAMPLES} from "./examples";

@Component({
    selector: "clr-datagrid-string-filtering-demo",
    providers: [Inventory],
    templateUrl: "string-filtering.html",
    styleUrls: ["../datagrid.demo.scss"]
})
export class DatagridStringFilteringDemo {
    examples = EXAMPLES;
    users: User[];

    pokemonFilter = new PokemonFilter();
    myFilterValue1 = "A";
    myFilterValue2 = "E";
    displayFilter = true;

    constructor(private inventory: Inventory) {
        inventory.size = 10;
        inventory.reset();
        this.users = inventory.all;
    }

    filterToggle() {
        this.displayFilter = !this.displayFilter;
    }
}
