/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

import {Inventory} from "../inventory/inventory";
import {User} from "../inventory/user";

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

const MULTI_SELECTION_EXAMPLE = `
<clr-datagrid [(clrDgSelected)]="selected" [clDgRowSelection]="true">
    <-- ... -->
    <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
        <-- ... -->
    </clr-dg-row>
   <-- ... -->
</clr-datagrid>

Selected users: <span *ngFor="let user of selected">{{user.name}}</span>
`;

@Component({
    moduleId: module.id,
    selector: "clr-datagrid-selection-row-mode-demo",
    providers: [Inventory],
    templateUrl: "selection-row-mode.html",
    styleUrls: ["../datagrid.demo.scss"]
})
export class DatagridSelectionRowModeDemo {
    singleSelectionExample = SINGLE_SELECTION_EXAMPLE;
    multiSelectionExample = MULTI_SELECTION_EXAMPLE;
    users: User[];
    singleSelected: User;
    multiSelected: User[] = [];

    constructor(private inventory: Inventory) {
        inventory.size = 10;
        inventory.reset();
        this.users = inventory.all;
    }
}