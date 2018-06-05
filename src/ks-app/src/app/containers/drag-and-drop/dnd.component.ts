/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

import {Inventory} from "../data/inventory";
import {User} from "../data/user";

@Component({templateUrl: "./dnd.component.html", styleUrls: ["./dnd.component.scss"], providers: [Inventory]})
export class KSDragAndDrop {
    users: User[];

    constructor(inventory: Inventory) {
        inventory.size = 10;
        inventory.reset();
        this.users = inventory.all;
    }

    report($event: any) {
        console.log($event);
    }
}
