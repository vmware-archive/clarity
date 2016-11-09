import {Component} from "@angular/core";

import {Inventory} from "../inventory/inventory";
import {User} from "../inventory/user";

const EXAMPLE = `
<-- Inside the full datagrid declaration -->
<clr-dg-row *clrDgItems="let user of users">
    <-- Cells declarations -->
</clr-dg-row>
`;

@Component({
    selector: "clr-datagrid-smart-iterator-demo",
    providers: [Inventory],
    templateUrl: "./smart-iterator.html",
    styleUrls: ["../datagrid.demo.scss"]
})
export class DatagridSmartIteratorDemo {
    example = EXAMPLE;
    users: User[];

    constructor(private inventory: Inventory) {
        inventory.size = 10;
        inventory.reset();
        this.users = inventory.all;
    }
}