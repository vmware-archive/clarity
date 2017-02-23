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
    <clr-dg-column [clrDgField]="'name'">Name</clr-dg-column>
    <clr-dg-column [clrDgField]="'creation'">Creation date</clr-dg-column>
    <clr-dg-column [clrDgField]="'pokemon.name'">Pokemon</clr-dg-column>
    <clr-dg-column [clrDgField]="'color'">Favorite color</clr-dg-column>

    <clr-dg-row *clrDgItems="let user of users">
        <clr-dg-cell>{{user.id}}</clr-dg-cell>
        <clr-dg-cell>{{user.name}}</clr-dg-cell>
        <clr-dg-cell>{{user.creation | date}}</clr-dg-cell>
        <clr-dg-cell>{{user.pokemon.name}}</clr-dg-cell>
        <clr-dg-cell>
            <span class="color-square" [style.backgroundColor]="user.color"></span>
        </clr-dg-cell>
    </clr-dg-row>

    <clr-dg-footer>{{users.length}} users</clr-dg-footer>
</clr-datagrid>
`;

@Component({
    selector: "clr-datagrid-binding-properties-demo",
    providers: [Inventory],
    templateUrl: "./binding-properties.html",
    styleUrls: ["../datagrid.demo.scss"]
})
export class DatagridBindingPropertiesDemo {
    example = EXAMPLE;
    users: User[];

    constructor(private inventory: Inventory) {
        inventory.size = 10;
        inventory.reset();
        this.users = inventory.all;
    }
}
