/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

import {Inventory} from "../inventory/inventory";
import {User} from "../inventory/user";

const MAIN_EXAMPLE = `
<clr-datagrid [(clrDgSelected)]="selected">
    <-- ... -->
    <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
        <-- ... -->
    </clr-dg-row>
   <-- ... -->
</clr-datagrid>

Selected users: <span *ngFor="let user of selected">{{user.name}}</span>
`;

const SINGLE_ROW_EXAMPLE = `
<clr-dg-row *clrDgItems="let item of items" [clrDgItem]="item" [(clrDgSelected)]="item.selected">
    <-- ... -->
</clr-dg-row>
`;

const SINGLE_SELECTION_EXAMPLE = `
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
    selector: "clr-datagrid-selection-demo",
    providers: [Inventory],
    templateUrl: "selection.html",
    styleUrls: ["../datagrid.demo.scss"]
})
export class DatagridSelectionDemo {
    mainExample = MAIN_EXAMPLE;
    rowSelectionExample = SINGLE_SELECTION_EXAMPLE;
    singleRowExample = SINGLE_ROW_EXAMPLE;
    users: User[];
    selected: User[] = [];
    rowSelected: User[] = [];

    constructor(private inventory: Inventory) {
        inventory.size = 10;
        inventory.reset();
        this.users = inventory.all;
    }
}
