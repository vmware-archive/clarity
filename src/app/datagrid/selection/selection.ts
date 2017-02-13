/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
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
    moduleId: module.id,
    selector: "clr-datagrid-selection-demo",
    providers: [Inventory],
    templateUrl: "selection.html",
    styleUrls: ["../datagrid.demo.scss"]
})
export class DatagridSelectionDemo {
    example = EXAMPLE;
    users: User[];
    selected: User[] = [];
    toAdd: User[] = [];
    toDelete: User[] = [];
    toEdit: User;

    constructor(private inventory: Inventory) {
        inventory.size = 10;
        inventory.reset();
        this.users = inventory.all;
    }

    onDelete(user: User) {
        if (user) {
            this.toDelete = [ user ];
        } else {
            this.toDelete = this.selected.slice();
        }
    }

    onEdit(user: User) {
        this.toEdit = user;
    }

    onAdd() {
        this.toAdd = this.selected.slice();
    }
}