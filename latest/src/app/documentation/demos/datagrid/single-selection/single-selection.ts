/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

import {Inventory} from "../inventory/inventory";
import {User} from "../inventory/user";

const EXAMPLE = `
<clr-datagrid [(clrDgSingleSelected)]="selectedUser">
    <-- ... -->
    <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
        <-- ... -->
    </clr-dg-row>
   <-- ... -->
</clr-datagrid>

Selected user: <span class="username" *ngIf="selectedUser">{{selectedUser.name}}</span>
`;

const ROW_SELECTION_EXAMPLE = `
<clr-datagrid [(clrDgSingleSelected)]="selectedUser" [clDgRowSelection]="true">
    <-- ... -->
    <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
        <-- ... -->
    </clr-dg-row>
   <-- ... -->
</clr-datagrid>

Selected user: <span class="username" *ngIf="selectedUser">{{selectedUser.name}}</span>
`;

@Component({
    moduleId: module.id,
    selector: "clr-datagrid-selection-single-demo",
    providers: [Inventory],
    templateUrl: "single-selection.html",
    styleUrls: ["../datagrid.demo.scss"]
})
export class DatagridSelectionSingleDemo {
    example = EXAMPLE;
    rowSelectionExample = ROW_SELECTION_EXAMPLE;
    users: User[];
    singleSelected: User;
    rowSelected: User;

    constructor(private inventory: Inventory) {
        inventory.size = 10;
        inventory.reset();
        this.users = inventory.all;
    }
}