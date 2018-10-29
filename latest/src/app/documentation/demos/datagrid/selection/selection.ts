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

const ROW_SELECTION_EXAMPLE = `
<clr-datagrid [(clrDgSelected)]="rowSelected" [clrDgRowSelection]="true">
    <clr-dg-column>User ID</clr-dg-column>
    <-- ... -->
    <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
        <clr-dg-cell>{{user.id}}</clr-dg-cell>
        <-- ... -->
    </clr-dg-row>
    <clr-dg-footer>{{users.length}} users</clr-dg-footer>
</clr-datagrid>
`;

const SELECTION_CHANGE_EVENT_EXAMPLE = `
<clr-datagrid [clrDgSelected]="selected"
              (clrDgSelectedChange)="selectionChanged($event)">
    <-- ... -->
</clr-datagrid>
`;

@Component({
    selector: "clr-datagrid-selection-demo",
    providers: [Inventory],
    templateUrl: "selection.html",
    styleUrls: ["../datagrid.demo.scss"]
})
export class DatagridSelectionDemo {
    mainExample = MAIN_EXAMPLE;
    rowSelectionExample = ROW_SELECTION_EXAMPLE;
    singleRowExample = SINGLE_ROW_EXAMPLE;
    selectionChangeEventExample = SELECTION_CHANGE_EVENT_EXAMPLE;
    users: User[];
    selected: User[] = [];
    rowSelected: User[] = [];

    constructor(private inventory: Inventory) {
        inventory.size = 10;
        inventory.reset();
        this.users = inventory.all;
    }
}
