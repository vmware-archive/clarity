/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";

import { Inventory } from "../inventory/inventory";
import { User } from "../inventory/user";

const CUSTOM_TOGGLE = `
<clr-dg-column-toggle>
    <clr-dg-column-toggle-title>Kolumne Herauschauen!</clr-dg-column-toggle-title>
    <clr-dg-column-toggle-button clrType="selectAll">Alle auswählen!</clr-dg-column-toggle-button>
    <clr-dg-column-toggle-button clrType="ok"><clr-icon shape="check"></clr-icon></clr-dg-column-toggle-button>
</clr-dg-column-toggle>
`;

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

    <clr-dg-footer>
        <!-- Optional customization of hide/show columns toggle -->
        <clr-dg-column-toggle>
            <clr-dg-column-toggle-title>Kolumne Herauschauen!</clr-dg-column-toggle-title>
            <clr-dg-column-toggle-button clrType="selectAll">Alle auswählen!</clr-dg-column-toggle-button>
            <clr-dg-column-toggle-button clrType="ok"><clr-icon shape="check"></clr-icon></clr-dg-column-toggle-button>
        </clr-dg-column-toggle>
        {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}}
        of {{pagination.totalItems}} users
        <clr-dg-pagination #pagination [clrDgPageSize]="currentPageSize"></clr-dg-pagination>
    </clr-dg-footer>
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
    customToggle = CUSTOM_TOGGLE;
    users: User[];
    currentPageSize: number = 10;

    constructor( private inventory: Inventory ) {
        inventory.size = 10;
        inventory.reset();
        this.users = inventory.all;
    }
}
