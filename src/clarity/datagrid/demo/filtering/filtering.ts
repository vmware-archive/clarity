import {Component} from "@angular/core";

import {Inventory} from "../inventory/inventory";
import {User} from "../inventory/user";
import {EXAMPLES} from "./examples";

@Component({
    selector: "clr-datagrid-filtering-demo",
    providers: [Inventory],
    templateUrl: "./filtering.html",
    styleUrls: ["../datagrid.demo.scss"]
})
export class DatagridFilteringDemo {
    examples = EXAMPLES;
    users: User[];

    constructor(private inventory: Inventory) {
        inventory.size = 10;
        inventory.reset();
        this.users = inventory.all;
    }
}
