import {Component} from "@angular/core";

import {Inventory} from "../inventory/inventory";
import {User} from "../inventory/user";

const EXAMPLE = `
<clr-datagrid [(clrDgSelected)]="selected">
    <-- ... -->
    <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
        <-- ... -->
    </clr-dg-row>
   <-- ... -->
</clr-datagrid>

Selected users: <span *ngFor="let user of selected">{{user.name}}</span>
`;

@Component({
    selector: "clr-datagrid-selection-demo",
    providers: [Inventory],
    templateUrl: "selection.html",
    styleUrls: ["../datagrid.demo.scss"]
})
export class DatagridSelectionDemo {
    example = EXAMPLE;
    users: User[];
    selected: User[] = [];

    constructor(private inventory: Inventory) {
        inventory.size = 10;
        inventory.reset();
        this.users = inventory.all;
    }
}