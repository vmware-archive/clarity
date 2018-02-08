/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";

import { Inventory } from "../inventory/inventory";
import { User } from "../inventory/user";

const EXAMPLE = `
<clr-datagrid>
    <clr-dg-column>
        <ng-container *clrDgHideableColumn="{hidden: false}">
            User ID
        </ng-container>
    </clr-dg-column>
    <clr-dg-column>
        <ng-container *clrDgHideableColumn="{hidden: false}">
            Name
        </ng-container>
    </clr-dg-column>
    ...

    <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
        <clr-dg-cell>{{user.id}}</clr-dg-cell>
        <clr-dg-cell>{{user.name}}</clr-dg-cell>
        ...
    </clr-dg-row>

    <clr-dg-footer></clr-dg-footer>
</clr-datagrid>
`;

@Component({
    selector: "clr-datagrid-hide-show-columns-demo",
    providers: [ Inventory ],
    templateUrl: "./hide-show-columns.html",
    styleUrls: [ "../datagrid.demo.scss" ]
})
export class DatagridHideShowColumnsDemo {
    example = EXAMPLE;
    users: User[];
    currentPageSize: number = 10;

    constructor( private inventory: Inventory ) {
        inventory.size = 10;
        inventory.reset();
        this.users = inventory.all;
    }
}
