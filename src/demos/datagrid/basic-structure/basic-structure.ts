/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

import {Inventory} from "../inventory/inventory";
import {User} from "../inventory/user";

const EXAMPLE = `
<clr-datagrid>
    <clr-dg-column>User ID</clr-dg-column>
    <clr-dg-column>Name</clr-dg-column>
    <clr-dg-column>Creation date</clr-dg-column>
    <clr-dg-column>Favorite color</clr-dg-column>

    <clr-dg-row *ngFor="let user of users">
        <clr-dg-cell>{{user.id}}</clr-dg-cell>
        <clr-dg-cell>{{user.name}}</clr-dg-cell>
        <clr-dg-cell>{{user.creation | date}}</clr-dg-cell>
        <clr-dg-cell>{{user.color}}</clr-dg-cell>
    </clr-dg-row>

    <clr-dg-footer>{{users.length}} users</clr-dg-footer>
</clr-datagrid>
`;

@Component({
    selector: "clr-datagrid-basic-structure-demo",
    providers: [Inventory],
    templateUrl: "./basic-structure.html",
    styleUrls: ["../datagrid.demo.scss"]
})
export class DatagridBasicStructureDemo {
    example = EXAMPLE;
    users: User[];

    constructor(private inventory: Inventory) {
        inventory.size = 10;
        inventory.reset();
        this.users = inventory.all;
    }
}
