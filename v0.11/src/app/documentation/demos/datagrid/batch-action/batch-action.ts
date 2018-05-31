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
    <clr-dg-action-bar>
        <div class="btn-group">
            <button type="button" class="btn btn-sm btn-secondary" (click)="onAdd()"><clr-icon shape="plus"></clr-icon> Add
                to group</button>
            <button type="button" class="btn btn-sm btn-secondary" (click)="onDelete()" ><clr-icon shape="close"></clr-icon> Delete</button>
            <button type="button" class="btn btn-sm btn-secondary" (click)="onEdit()" *ngIf="selected.length == 1"><clr-icon shape="pencil"></clr-icon> Edit</button>
        </div>
    </clr-dg-action-bar>
    <-- ... -->
    <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
        <-- ... -->
    </clr-dg-row>
   <-- ... -->
</clr-datagrid>

Selected users: <span *ngFor="let user of selected">{{user.name}}</span>
`;

@Component({
    selector: "clr-datagrid-batch-action-demo",
    providers: [Inventory],
    templateUrl: "batch-action.html",
    styleUrls: ["../datagrid.demo.scss"]
})
export class DatagridBatchActionDemo {
    mainExample = MAIN_EXAMPLE;
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

    cleanUp(): void {
        this.toAdd = [];
        this.toDelete = [];
        this.toEdit = null;
    }

    onAdd() {
        this.cleanUp();
        this.toAdd = this.selected.slice();
    }

    onEdit() {
        this.cleanUp();
        this.toEdit = this.selected[0];
    }

    onDelete() {
        this.cleanUp();
        this.toDelete =this.selected.slice();
    }
}
