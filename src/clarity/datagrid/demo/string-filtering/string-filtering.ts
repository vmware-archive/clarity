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

    constructor(private inventory: Inventory) {
        inventory.size = 10;
        inventory.reset();
        this.users = inventory.all;
    }
}