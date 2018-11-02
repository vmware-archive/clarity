/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

import {Inventory} from "../inventory/inventory";
import {User} from "../inventory/user";

const EXAMPLE = `
<-- Inside the full datagrid declaration -->
<clr-dg-footer>
    <clr-dg-pagination #pagination [clrDgPageSize]="10">
        <clr-dg-page-size [clrPageSizeOptions]="[10,20,50,100]">Users per page</clr-dg-page-size>
        {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}}
        of {{pagination.totalItems}} users
    </clr-dg-pagination>
</clr-dg-footer>
`;

@Component({
    selector: "clr-datagrid-pagination-demo",
    providers: [Inventory],
    templateUrl: "pagination.html",
    styleUrls: ["../datagrid.demo.scss"]
})
export class DatagridPaginationDemo {
    example = EXAMPLE;
    users: User[];

    constructor(private inventory: Inventory) {
        inventory.size = 103;
        inventory.reset();
        this.users = inventory.all;
    }
}
