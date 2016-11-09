import {Component} from "@angular/core";

import {Inventory} from "../inventory/inventory";
import {User} from "../inventory/user";

const EXAMPLE = `
<-- Inside the full datagrid declaration -->
<clr-dg-row *ngFor="let user of users">
    <clr-dg-cell>{{user.id}}</clr-dg-cell>
    <clr-dg-cell>{{user.name}}</clr-dg-cell>
    <clr-dg-cell>{{user.creation | date}}</clr-dg-cell>
    <clr-dg-cell>
        <span class="color-square" [style.backgroundColor]="user.color"></span>
    </clr-dg-cell>
</clr-dg-row>
`;

@Component({
    selector: "clr-datagrid-custom-rendering-demo",
    providers: [Inventory],
    templateUrl: "./custom-rendering.html",
    styleUrls: ["../datagrid.demo.scss"]
})
export class DatagridCustomRenderingDemo {
    example = EXAMPLE;
    users: User[];

    constructor(private inventory: Inventory) {
        inventory.size = 10;
        inventory.reset();
        this.users = inventory.all;
    }
}