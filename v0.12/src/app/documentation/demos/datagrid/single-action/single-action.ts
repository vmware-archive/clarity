/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

import {Inventory} from "../inventory/inventory";
import {User} from "../inventory/user";

const MAIN_EXAMPLE = `
<clr-datagrid>
    <-- ... -->
    <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
        <clr-dg-action-overflow>
            <button class="action-item" (click)="onEdit(user)">Edit</button>
            <button class="action-item" (click)="onDelete(user)">Delete</button>
        </clr-dg-action-overflow>
        <-- ... -->
    </clr-dg-row>
   <-- ... -->
</clr-datagrid>

Selected users: <span *ngFor="let user of selected">{{user.name}}</span>
`;

@Component({
    selector: "clr-datagrid-single-action-demo",
    providers: [Inventory],
    templateUrl: "single-action.html",
    styleUrls: ["../datagrid.demo.scss"]
})
export class DatagridSingleActionDemo {
    mainExample = MAIN_EXAMPLE;
    users: User[];
    toDelete: User;
    toEdit: User;

    constructor(private inventory: Inventory) {
        inventory.size = 10;
        inventory.reset();
        this.users = inventory.all;
    }

    cleanUp(): void {
        this.toDelete = null;
        this.toEdit = null;
    }

    onEdit(user: User) {
        this.cleanUp();
        this.toEdit = user;
    }

    onDelete(user: User) {
        this.cleanUp();
        this.toDelete = user;
    }
}
