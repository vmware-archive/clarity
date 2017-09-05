/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

import {State} from "./../../../../clarity-angular/select/interfaces/state";
import {FetchResult, Inventory} from "./../../../datagrid/inventory/inventory";

@Component({
    moduleId: module.id,
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
    loadOptionsFromServer(state: State) {
        this.loading = true;
        this.inventory.latency = 500;
        this.inventory.filter({"name": [state.search]}).fetch().then((result: FetchResult) => {
            this.optionsFromServer = result.users;
            this.loading = false;
        });
    }
}
