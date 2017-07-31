/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
})
export class AppComponent {
    name = "world";
    closeMessage: string = "";
    indeterminateState: boolean = true;

    onClose(): void {
        this.closeMessage = "The alert has been closed";
    }

    users: any[];
    selected: any[] = [];
    toAdd: any[] = [];
    toDelete: any[] = [];
    toEdit: any;

    constructor() {
        this.users = [
            {name: "alice"},
            {name: "bob"},
            {name: "carol"},
        ];
    }

    onDelete() {
        this.toDelete = this.selected.slice();
        return false;
    }

    onEdit() {
        this.toEdit = this.selected[0];
        return false;
    }

    onAdd() {
        this.toAdd = this.selected.slice();
    }

    selected1: boolean = false;
    selected2: boolean = true;
    selected3: boolean = true;
    indeterminate1: boolean = true;
}
