/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";
import { User } from "../inventory/user";
import { Inventory } from "../inventory/inventory";

const COMPACT_EXAMPLE = `
<clr-datagrid class="datagrid-compact">
    <-- ... -->
</clr-datagrid>
`;

@Component({
    selector: "clr-datagrid-compact-demo",
    templateUrl: "./compact.html",
    providers: [Inventory],
    styleUrls: ["../datagrid.demo.scss"]
})
export class DatagridCompactDemo {
    compactExample = COMPACT_EXAMPLE;
    users: User[];

    constructor(private inventory: Inventory) {
        inventory.size = 10;
        inventory.reset();
        this.users = inventory.all;
    }

}
