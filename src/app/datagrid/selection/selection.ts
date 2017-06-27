/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
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
    _selected: User[] = [];
    toAdd: User[] = [];
    toDelete: User[] = [];
    toEdit: User;

    get selected() {
        return this._selected;
    }

    set selected(selection: User[]) {
        this._selected = selection;
        this.cleanUp();
    }

    cleanUp(): void {
        this.toAdd = [];
        this.toDelete = [];
        this.toEdit = null;
    }

    constructor(private inventory: Inventory) {
        inventory.size = 10;
        inventory.reset();
        this.users = inventory.all;
    }

    onDelete(user: User) {
        this.cleanUp();
        if (user) {
            this.toDelete = [ user ];
        } else {
            this.toDelete = this.selected.slice();
        }
    }

    onEdit(user: User) {
        this.cleanUp();
        if (user) {
            this.toEdit = user;
        } else {
            this.toEdit = this.selected[0];
        }
    }

    onAdd() {
        this.cleanUp();
        this.toAdd = this.selected.slice();
    }
}
