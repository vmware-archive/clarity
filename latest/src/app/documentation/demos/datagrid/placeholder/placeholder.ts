/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

import {Inventory} from "../inventory/inventory";
import {User} from "../inventory/user";

const EXAMPLE = `
<clr-datagrid>
    <-- ... -->
    <clr-dg-placeholder>We couldn't find any users!</clr-dg-placeholder>
    
    <clr-dg-row *ngFor="let user of users">
        <-- ... -->
    </clr-dg-row>
    <-- ... -->
</clr-datagrid>
`;

@Component({
    selector: "clr-datagrid-placeholder-demo",
    providers: [Inventory],
    templateUrl: "placeholder.html",
    styleUrls: ["../datagrid.demo.scss"]
})
export class DatagridPlaceholderDemo {
    example = EXAMPLE;
    users: User[] = [];
}
