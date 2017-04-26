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
        <!--Name-->
        <ng-container *clrDgHideableColumn="{hidden: false}">
            Name
        </ng-container>
    </clr-dg-column>
    <clr-dg-column>
        <ng-container *clrDgHideableColumn="{hidden: false}">
            Creation date
        </ng-container>
    </clr-dg-column>
    <clr-dg-column>
        <ng-container *clrDgHideableColumn="{hidden: true}">
            Pokemon
        </ng-container>
    </clr-dg-column>
    <clr-dg-column>
        <ng-container *clrDgHideableColumn>
            Favorite color
        </ng-container>
    </clr-dg-column>

    <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
        <clr-dg-cell>{{user.id}}</clr-dg-cell>
        <clr-dg-cell>{{user.name}}</clr-dg-cell>
        <clr-dg-cell>{{user.creation | date}}</clr-dg-cell>
        <clr-dg-cell>{{user.pokemon.name}}</clr-dg-cell>
        <clr-dg-cell>
            <span class="color-square" [style.backgroundColor]="user.color"></span>
        </clr-dg-cell>
    </clr-dg-row>

    <clr-dg-footer>
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
    users: User[];

    constructor( private inventory: Inventory ) {
        inventory.size = 10;
        inventory.reset();
        this.users = inventory.all;
    }
}


// /*
//  * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
//  * This software is released under MIT license.
//  * The full license information can be found in LICENSE in the root directory of this project.
//  */
// import { Component } from "@angular/core";
//
// import { Inventory } from "../inventory/inventory";
// import { User } from "../inventory/user";
//
// @Component({
//     selector: "clr-datagrid-hide-show-columns-demo",
//     providers: [ Inventory ],
//     templateUrl: "./hide-show-columns.html",
//     styleUrls: [ "../datagrid.demo.scss" ]
// })
// export class DatagridHideShowColumnsDemo {
//     users: User[];
//
//     constructor( private inventory: Inventory ) {
//         inventory.size = 10;
//         inventory.reset();
//         this.users = inventory.all;
//     }
//
//     html: string = `<clr-datagrid>
//     <clr-dg-column>
//         <ng-container *clrDgHideableColumn="{hidden: false}">
//             User ID
//         </ng-container>
//     </clr-dg-column>
//     <clr-dg-column>
//         <!--Name-->
//         <ng-container *clrDgHideableColumn="{hidden: false}">
//             Name
//         </ng-container>
//     </clr-dg-column>
//     <clr-dg-column>
//         <ng-container *clrDgHideableColumn="{hidden: false}">
//             Creation date
//         </ng-container>
//     </clr-dg-column>
//     <clr-dg-column>
//         <ng-container *clrDgHideableColumn="{hidden: true}">
//             Pokemon
//         </ng-container>
//     </clr-dg-column>
//     <clr-dg-column>
//         <ng-container *clrDgHideableColumn>
//             Favorite color
//         </ng-container>
//     </clr-dg-column>
//
//     <clr-dg-placeholder>No users found</clr-dg-placeholder>
//
//     <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
//         <clr-dg-cell>{{user.id}}</clr-dg-cell>
//         <clr-dg-cell>{{user.name}}</clr-dg-cell>
//         <clr-dg-cell>{{user.creation | date}}</clr-dg-cell>
//         <clr-dg-cell>{{user.pokemon.name}}</clr-dg-cell>
//         <clr-dg-cell>
//             <span class="color-square" [style.backgroundColor]="user.color"></span>
//         </clr-dg-cell>
//     </clr-dg-row>
//
//     <clr-dg-footer>
//         {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}}
//         of {{pagination.totalItems}} users
//         <clr-dg-pagination #pagination [clrDgPageSize]="currentPageSize"></clr-dg-pagination>
//     </clr-dg-footer>
// </clr-datagrid>`;
// }
