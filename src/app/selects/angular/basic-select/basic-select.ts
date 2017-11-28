/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

import {FetchResult, Inventory} from "./../../../datagrid/inventory/inventory";

@Component({
    selector: "clr-basic-select-demo",
    providers: [Inventory],
    templateUrl: "./basic-select.html",
})
export class BasicSelectDemo {
    private options: any[];
    private loading: boolean;
    private optionsAFewMore: any[];
    private optionsFromServer: any[];
    constructor(public inventory: Inventory) {
        inventory.size = 30;
        inventory.reset();
        this.optionsAFewMore = inventory.all.slice(0, 20);
        this.options = inventory.all.slice(0, 10);
    }
    loadOptionsFromServer(input: string) {
        if (input === undefined || input == null) {
            return;
        }
        this.loading = true;
        this.inventory.latency = 500;
        this.inventory.filter({"name": [input]}).fetch().then((result: FetchResult) => {
            this.optionsFromServer = result.users;
            this.loading = false;
        });
    }
}
